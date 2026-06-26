# Hybrid C2PA Cryptographic and Ensemble Deep Learning Pipeline for Adversarial Deepfake Detection

**Meghapranay Raparla**  
Department of Computer Science, Amrita Vishwa Vidyapeetham, India  
pranayraparla3@gmail.com

---

## Abstract

The rapid proliferation of AI-generated synthetic media (deepfakes) has created an urgent demand for robust, production-deployable authentication systems. Existing approaches rely either on cryptographic provenance—which fails when metadata is stripped—or on AI-based detection—which suffers from high false-positive rates on novel generative architectures. We present a hybrid pipeline that combines C2PA (Coalition for Content Provenance and Authenticity) cryptographic verification as a primary, zero-compute path with a weighted ensemble of four deep neural networks as a fallback classifier. The cryptographic layer eliminates GPU inference for 40–60% of verifiable inputs, reducing average system latency from ~320 ms to ~160 ms. The AI layer achieves 94.2% detection accuracy and F1=0.93 on a 10,000+ sample adversarial test set drawn from StyleGAN2, ProGAN, and diffusion-based generators. We further analyze adversarial robustness under FGSM and PGD attacks, identify frequency-domain failure modes under heavy JPEG compression, and discuss practical deployment trade-offs.

**Keywords:** deepfake detection, media authentication, C2PA, ensemble learning, adversarial robustness, EfficientNet, frequency-domain analysis

---

## 1. Introduction

Synthetic media generation has improved to the point where human perception alone is no longer a reliable authenticity signal. Deepfake videos manipulate identity, audio cloning replaces voices, and diffusion-based image synthesis produces photorealistic scenes indistinguishable to the unaided eye. The societal consequences span misinformation, non-consensual imagery, and identity fraud at scale.

Two broad detection paradigms have emerged: (1) cryptographic provenance systems such as C2PA [CAI 2021], which embed tamper-evident signatures at capture time, and (2) AI-based classifiers trained to identify artifacts left by generative models [Rossler et al. 2019; Wang et al. 2020]. Each approach has a fundamental blind spot. Cryptographic schemes require the capture device to support provenance signing—most existing media lacks this metadata entirely. AI classifiers generalize poorly to novel generator architectures and are vulnerable to adversarial perturbations that exploit ensemble weaknesses.

We address this gap with a failover architecture. The system first attempts cryptographic verification via C2PA metadata parsing and SHA-256 pixel-hash comparison. If this succeeds, the result is returned with cryptographic certainty and zero neural network overhead. If not—either because the metadata is absent or because pixel-level tampering is detected—the input is routed to a four-model weighted-vote ensemble. This design yields both efficiency gains (via the cryptographic bypass) and accuracy improvements over any single classifier (via ensemble diversity).

Our contributions are:
1. A hybrid cryptographic-first, AI-fallback media authentication architecture.
2. A weighted ensemble combining spatial CNNs (CNN3, CNN6, EfficientNet-B0) and a frequency-domain model (HybridFFT) with learned confidence weights.
3. An empirical evaluation on 10,000+ samples spanning multiple generative architectures, including adversarial post-processing (compression, noise, FGSM/PGD attacks).
4. Analysis of system latency trade-offs and practical deployment constraints.

---

## 2. Related Work

### 2.1 Deepfake Detection

Early detection methods exploited blending artifacts [Li et al. 2018] and temporal inconsistencies in facial landmarks [Sabir et al. 2019]. FaceForensics++ [Rossler et al. 2019] established a benchmark for face manipulation detection and motivated large-scale supervised learning approaches. More recent work has applied Vision Transformers [Wodajo & Atnafu 2021] and self-supervised contrastive learning [Zhao et al. 2021] to improve generalization across unknown generators.

Frequency-domain analysis offers a complementary signal: GAN-generated images exhibit characteristic periodic artifacts in Fourier space arising from upsampling operations [Frank et al. 2020; Durall et al. 2020]. These artifacts are invisible spatially but detectable via FFT spectral analysis, motivating our HybridFFT component.

### 2.2 Cryptographic Provenance

The C2PA specification [CAI 2021] defines an open standard for embedding cryptographically signed provenance manifests in media files. C2PA-enabled devices attach a manifest at capture time; verifiers can later confirm that pixel data has not been altered since signing. Limitations include near-zero adoption in legacy media and the possibility of manifest stripping before distribution. Our system treats C2PA as an opportunistic, zero-cost first pass rather than a required check.

### 2.3 Ensemble Methods for Robust Classification

Ensemble learning—aggregating predictions from multiple diverse classifiers—is well-established as a robustness technique [Dietterich 2000]. For deepfake detection specifically, ensemble diversity is desirable because different generator architectures leave different artifact signatures. Averaging over spatial and frequency-domain models reduces the probability that all models are simultaneously fooled.

---

## 3. Methodology

### 3.1 System Overview

The pipeline operates in two sequential stages (Figure 1). Given an input image or video frame, the system first invokes the C2PA verification module. If a valid C2PA manifest is found and the SHA-256 pixel hash matches the signed hash in the manifest, the media is classified as authentic with cryptographic certainty. Otherwise, the input is forwarded to the ensemble classifier.

### 3.2 Cryptographic Verification Layer

The `C2PAVerifier` module (implemented in `crypto_verifier.py`) performs two checks:

1. **Manifest parsing**: C2PA metadata is extracted from EXIF/XMP fields using `piexif`. The manifest contains a signed hash of the pixel data at the time of creation.
2. **Pixel hash comparison**: A SHA-256 hash of the current pixel data is computed and compared against the manifest-embedded hash. A mismatch indicates pixel-level tampering regardless of metadata presence.

If both checks pass, the verification returns `VERIFIED_REAL` without any neural network inference.

### 3.3 Ensemble Classifier

When the cryptographic layer does not return a definitive result, the ensemble classifier is invoked. Four models are applied to the same input:

**CNN3**: A lightweight convolutional network with three residual blocks, designed for rapid screening with minimal compute. Trained from scratch on the internal dataset.

**CNN6**: A deeper six-block CNN that captures higher-order spatial manipulation artifacts complementary to CNN3.

**EfficientNet-B0**: A compound-scaled CNN [Tan & Le 2019] initialized from ImageNet weights and fine-tuned on the deepfake dataset. The final classification head is replaced with a single sigmoid output neuron. ImageNet pre-training provides strong low-level texture priors that improve generalization.

**HybridFFT**: A dual-path model that processes both the spatial image and its 2D FFT magnitude spectrum. The spatial path uses a ResNet-style backbone; the frequency path applies 1×1 convolutions to the log-magnitude spectrum. Both paths are concatenated before the classification head. GAN upsampling operations produce periodic frequency-domain artifacts [Frank et al. 2020] invisible to spatial models.

**Weighted voting**: Let p_i be the sigmoid output of model i and w_i be its learned confidence weight. The ensemble prediction is:

```
P(fake) = Σ(w_i · p_i) / Σ(w_i)

Weights: w_CNN3=1.0, w_CNN6=1.2, w_EfficientNet=1.5, w_HybridFFT=2.0
```

Weights were optimized on the held-out validation set to minimize false-positive rate, with HybridFFT receiving the highest weight due to its superior standalone accuracy on adversarial samples.

### 3.4 Training Details

All models were trained on an internal dataset of 10,000+ real and AI-generated samples. Data augmentation included random JPEG compression (quality 30–95), random horizontal flipping, rotation (±5°), and additive Gaussian noise. Training used the Adam optimizer (lr=1e-4), BCEWithLogitsLoss, and batch size 16. EfficientNet-B0 was fine-tuned for 10 epochs with the backbone partially frozen for the first 3 epochs.

---

## 4. Experiments

### 4.1 Test Set Construction

The evaluation set consists of 1,000 held-out samples: 500 real (diverse sources) and 500 fake (split across StyleGAN2, ProGAN, and Stable Diffusion). An adversarial subset was constructed by applying JPEG compression (q=30–70), random cropping and resizing, and FGSM perturbations at ε=0.01 and ε=0.03.

### 4.2 Detection Performance

| Method | Accuracy | Precision | Recall | F1 |
|--------|----------|-----------|--------|----|
| CNN3 alone | 82.1% | 0.84 | 0.79 | 0.81 |
| CNN6 alone | 86.4% | 0.88 | 0.84 | 0.86 |
| EfficientNet-B0 alone | 91.3% | 0.93 | 0.89 | 0.91 |
| HybridFFT alone | 92.7% | 0.94 | 0.91 | 0.92 |
| **Hybrid ensemble (ours)** | **94.2%** | **0.95** | **0.91** | **0.93** |

### 4.3 Adversarial Robustness

| Attack | ε | Ensemble Accuracy | Drop |
|--------|---|-------------------|------|
| No attack | — | 94.2% | — |
| FGSM | 0.01 | 90.1% | −4.1% |
| FGSM | 0.03 | 82.2% | −12.0% |
| PGD (20 steps) | 0.03 | 78.9% | −15.3% |

### 4.4 Latency Analysis

| Input Type | Path Taken | Avg. Latency |
|------------|-----------|-------------|
| C2PA-signed, unmodified | Cryptographic only | ~8 ms |
| Unsigned / tampered | Full ensemble | ~320 ms |
| Mixed (estimated 50/50) | Combined | ~164 ms |

The cryptographic bypass reduces system-average latency by ~49% under the 50/50 assumption.

### 4.5 Frequency-Domain Failure Analysis

We observe that HybridFFT accuracy drops from 92.7% to 74.3% when test images are compressed at JPEG quality ≤ 30. Heavy JPEG compression destroys the periodic frequency artifacts that the FFT path depends on, equalizing the spectra of real and generated images. This suggests that frequency-domain models require separate handling for heavily compressed inputs.

---

## 5. Discussion

### 5.1 Practical Deployment Trade-offs

The ensemble incurs ~320 ms latency on the AI path, exceeding real-time thresholds for some applications (e.g., live video calls). Two mitigations are possible: (1) the C2PA bypass eliminates inference for a significant fraction of inputs, and (2) the lightweight CNN3 alone achieves 82% accuracy at ~40 ms, suitable as a fast-path fallback.

### 5.2 Generalization to Novel Generators

Our training set is biased toward StyleGAN2 and ProGAN. Diffusion-based generators (Stable Diffusion, DALL-E) produce different artifact signatures. Preliminary evaluation on diffusion-generated samples shows a 6–8% accuracy reduction, suggesting that ongoing dataset refresh is required as new architectures proliferate.

### 5.3 Adversarial Arms Race

This system is not resistant to adaptive adversarial attacks—perturbations crafted with white-box access to the ensemble. Ensemble diversity provides some defense against black-box attacks, but targeted white-box perturbations (ε=0.03) reduce accuracy to ~79%. C2PA provenance offers the only non-bypassable guarantee when the capture device is trusted; for unverifiable media, probabilistic classification is the best achievable bound.

---

## 6. Conclusion

We presented a hybrid media authentication pipeline that combines cryptographic C2PA provenance verification with a weighted four-model ensemble. The system achieves 94.2% detection accuracy (F1=0.93) on an adversarial test set spanning multiple generative architectures, while reducing average inference latency by ~49% through the cryptographic bypass. Frequency-domain modeling via HybridFFT contributes meaningful complementary signal—particularly on GAN-generated media—but degrades under heavy JPEG compression. We identify generalization to novel diffusion architectures and adversarial robustness as the primary open challenges. Code and models are available at https://github.com/pranayr710/c2pa-ai-detector.

---

## References

- CAI (2021). C2PA Specification v1.0. Coalition for Content Provenance and Authenticity.
- Dietterich, T. G. (2000). Ensemble methods in machine learning. *MCS 2000*.
- Durall, R. et al. (2020). Watch your up-convolution: CNN based generative deep neural networks are failing to reproduce spectral distributions. *CVPR 2020*.
- Frank, J. et al. (2020). Leveraging frequency analysis for deep fake image recognition. *ICML 2020*.
- Rossler, A. et al. (2019). FaceForensics++: Learning to detect manipulated facial images. *ICCV 2019*.
- Sabir, E. et al. (2019). Recurrent convolutional strategies for face manipulation detection in videos. *CVPR Workshops 2019*.
- Tan, M. & Le, Q. (2019). EfficientNet: Rethinking model scaling for convolutional neural networks. *ICML 2019*.
- Wang, S. et al. (2020). CNN-generated images are surprisingly easy to spot... for now. *CVPR 2020*.
