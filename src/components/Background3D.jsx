
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useState, useRef } from 'react';

function generateSphere(count, radius) {
    const points = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const r = radius * Math.cbrt(Math.random());
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
        points[i * 3] = x;
        points[i * 3 + 1] = y;
        points[i * 3 + 2] = z;
    }
    return points;
}

const ParticleSphere = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => generateSphere(5000, 1.2));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00f2fe"
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={2} // AdditiveBlending for glow effect
                />
            </Points>
        </group>
    );
};

const Background3D = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: 'linear-gradient(to bottom, #060b13, #020205)', pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ParticleSphere />
            </Canvas>
        </div>
    );
};

export default Background3D;
