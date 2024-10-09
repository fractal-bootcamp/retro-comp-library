import React from 'react';

function MyButton({
    text = "Button",
    disabled = false,
    isLoading = false
}: {
    text: string,
    disabled?: boolean,
    isLoading?: boolean
}) {
    return (
        <div className="relative inline-block">
            {/* Button container */}
            <div className={`relative inline-flex items-center group ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                {/* Left right triangle */}
                <div
                    className={`w-0 h-0 border-t-[40px] border-t-transparent border-b-0 border-r-[35px] border-r-neonSunset mr-[3px] transition-all duration-300 ${!disabled && 'group-hover:mr-[6px]'}`}
                ></div>

                {/* Middle rectangle */}
                <button
                    className={`py-2 px-6 font-bold text-white bg-neonSunset hover:bg-electricDream hover:shadow-lg transition-all duration-300 relative flex items-center justify-center ${disabled ? 'cursor-not-allowed' : ''}`}
                    disabled={disabled}
                >
                    {isLoading ? (
                        <div className="w-5 h-5 border-4 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
                    ) : (
                        text
                    )}
                </button>

                {/* Right right triangle */}
                <div
                    className={`w-0 h-0 border-b-[40px] border-b-transparent border-t-0 border-l-[35px] border-l-neonSunset ml-[3px] transition-all duration-300 ${!disabled && 'group-hover:ml-[6px]'}`}
                ></div>
            </div>
        </div>
    );
}

export default MyButton;
