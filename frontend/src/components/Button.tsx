import React from 'react';

function MyButton() {
    return (
        <div className="relative inline-block">
            {/* Button content */}
            <button className="relative z-10 py-2 px-6 font-bold text-white bg-neonSunset transform skew-x-[30deg] hover:bg-electricDream hover:shadow-lg transition-all">
                <span className="inline-block transform -skew-x-[30deg]">Button</span>
            </button>
        </div>
    );
}

export default MyButton;
