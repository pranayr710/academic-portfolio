
import { useEffect, useState } from 'react';
import './Fireflies.css'; // We'll create this CSS next

const Fireflies = () => {
    const [fireflies, setFireflies] = useState([]);

    useEffect(() => {
        // Generate static fireflies to avoid re-rendering issues
        const flies = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            animationDuration: Math.random() * 5 + 5 + 's',
            animationDelay: Math.random() * 5 + 's',
        }));
        setFireflies(flies);
    }, []);

    return (
        <div className="fireflies-container">
            {fireflies.map((fly) => (
                <div
                    key={fly.id}
                    className="firefly"
                    style={{
                        left: `${fly.left}%`,
                        top: `${fly.top}%`,
                        animationDuration: fly.animationDuration,
                        animationDelay: fly.animationDelay,
                    }}
                />
            ))}
        </div>
    );
};

export default Fireflies;
