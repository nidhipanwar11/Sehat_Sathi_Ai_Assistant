import { useState, useEffect } from "react";

const TypingEffect: React.FC = () => {
    const text = "Sehat Sathi!";
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, 150); // Typing speed
            return () => clearTimeout(timeout);
        } else {
            // Restart effect after 6s
            const restartTimeout = setTimeout(() => {
                setDisplayText("");
                setIndex(0);
            }, 6000);

            return () => clearTimeout(restartTimeout);
        }
    }, [index, text]);

    // Cursor blinking effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500); // Cursor blink speed

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <p className="text-gray-400 mt-2 text-lg font-mono">
            {displayText}
            {showCursor && <span className="text-white">|</span>}
        </p>
    );
};

export default TypingEffect;
