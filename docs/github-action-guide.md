# GitHub Action Guide — 5 Steps to Fix Before Applying

## Step 1: Make your activity graph public

A screener clicks GitHub and sees "activity is private" — this is the #1 credibility issue.

1. Go to https://github.com/pranayr710
2. Click your profile photo → **Settings**
3. Scroll to **Contributions & Activity**
4. Uncheck **"Make profile private"** and **"Hide your activity"**
5. Under **Profile settings**, ensure **"Include private contributions on my profile"** is checked
6. Save

**Result:** Your contribution graph becomes visible. Also pin your 4 flagship repos:
- Go to your profile → click **Customize your pins** → add c2pa-ai-detector, IFDMS, GeoDroneAI, AttendAI

---

## Step 2: Rename two repos (typos)

### HospitalManahmentSystem → hospital-management-system
1. Go to https://github.com/pranayr710/HospitalManahmentSystem
2. Click **Settings** (top tab, not account settings)
3. Under **General** → **Repository name** → type `hospital-management-system`
4. Click **Rename**

### ast-interpreter_java- → microjava-interpreter
1. Go to https://github.com/pranayr710/ast-interpreter_java-
2. Settings → Repository name → type `microjava-interpreter`
3. Click **Rename**

---

## Step 3: Create and push the IFDMS repo

The README is already written and sitting at:
`C:\Users\himes\pranay\monotering system\README.md`

```bash
cd "C:\Users\himes\pranay\monotering system"
git init
git add README.md start_ifdms.bat backend/requirements.txt backend/main.py backend/network/ws_server.py backend/core/ backend/data/ backend/dashboard/ extension/ frontend/
git commit -m "Initial commit: IFDMS concurrent focus monitoring system"
```

Then on GitHub:
1. Go to https://github.com/new
2. Name it `ifdms` (keep it public)
3. **Do NOT** initialize with README (you already have one)
4. Copy the remote URL and run:
```bash
git remote add origin https://github.com/pranayr710/ifdms.git
git push -u origin main
```

---

## Step 4: Deploy the DSA Visualiser to GitHub Pages

1. Go to https://github.com/pranayr710/DataStructures-Visualiser
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source** → select **Deploy from a branch**
4. Branch: `main`, folder: `/ (root)`
5. Click **Save**
6. GitHub will give you a URL like `https://pranayr710.github.io/DataStructures-Visualiser/`

Then update your portfolio's projects.js to add a `demo` link for the DSA Visualiser.

---

## Step 5: Submit C2PA preprint to arXiv

The draft is ready at:
`C:\Users\himes\pranay\academic-portfolio\docs\arxiv-preprint-draft.md`

To submit:
1. Create an account at https://arxiv.org/register
2. Convert the markdown draft to LaTeX (use Overleaf — paste into a new blank project)
3. Go to https://arxiv.org/submit
4. Category: **cs.CV** (primary), **cs.CR** (secondary)
5. Upload the .tex + .pdf, submit

Once you have an arXiv ID (e.g., arXiv:2507.XXXXX), add this line to the Research page of your portfolio and the README.
