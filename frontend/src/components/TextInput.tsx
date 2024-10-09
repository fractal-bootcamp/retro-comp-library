import React, { useState, useRef, useEffect } from 'react';

type TextInputProps = {
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
    size?: "small" | "large";
};

const TextInput: React.FC<TextInputProps> = ({
    placeholder = "",
    value = "",
    disabled = false,
    onChange,
    size,
}) => {
    const [inputValue, setInputValue] = useState(value);
    const [inputHeight, setInputHeight] = useState(40); // Default height
    const [isShaking, setIsShaking] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            const newHeight = Math.max(textareaRef.current.scrollHeight, 40); // Minimum height of 40px
            textareaRef.current.style.height = `${newHeight}px`;
            setInputHeight(newHeight);
        }
    }, [inputValue]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
        // Trigger shaking animation
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 30); // Animation duration
    };

    let inputClassName = "text-input min-w-[120px] max-w-[400px] resize-none overflow-hidden";
    if (size === "small") {
        inputClassName += " text-input--small text-sm";
    } else if (size === "large") {
        inputClassName += " text-input--large text-lg";
    }

    return (
        <div className="relative inline-block">
            <style>
                {`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-2px); }
                    75% { transform: translateX(2px); }
                }
                `}
            </style>
            <div className={`relative inline-flex items-center group ${isShaking ? 'animate-[shake_0.3s_ease-in-out]' : ''}`}>
                < div
                    className="border-t-transparent border-b-0 border-r-cyberAqua mr-[3px] group-hover:mr-[6px] transition-all duration-300"
                    style={{
                        width: 0,
                        height: 0,
                        borderRightWidth: `${inputHeight}px`,
                        borderTopWidth: `${inputHeight}px`,
                    }}
                />
                <textarea
                    ref={textareaRef}
                    className={`py-2 px-6 font-bold text-white bg-cyberAqua transition-all duration-300 placeholder-gray-600 ${inputClassName} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-digitalVoid hover:shadow-lg'}`}
                    placeholder={placeholder}
                    value={inputValue}
                    disabled={disabled}
                    onChange={handleChange}
                    rows={1}
                    style={{ height: `${inputHeight}px` }}
                />
                <div
                    className="border-b-transparent border-t-0 border-l-cyberAqua ml-[3px] group-hover:ml-[6px] transition-all duration-300"
                    style={{
                        width: 0,
                        height: 0,
                        borderLeftWidth: `${inputHeight}px`,
                        borderBottomWidth: `${inputHeight}px`,
                    }}
                />
            </div>
        </div >
    );
};

export default TextInput;