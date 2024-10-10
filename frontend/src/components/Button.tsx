
interface MyButtonProps {
    text?: string;
    onClick?: () => void;
}

function MyButton({ text = "Button", onClick }: MyButtonProps) {
    return (
        <div className="relative inline-block">
            {/* Button container */}
            <div className="relative inline-flex items-center group">
                {/* Left right triangle */}
                <div className="w-0 h-0 border-t-[40px] border-t-transparent border-b-0 border-r-[35px] border-r-neonSunset mr-[3px] group-hover:mr-[6px] transition-all duration-300"></div>

                {/* Middle rectangle */}
                <button
                    className="py-2 px-6 font-bold text-white bg-neonSunset hover:bg-electricDream hover:shadow-lg transition-all duration-300"
                    onClick={onClick}
                >
                    {text}
                </button>

                {/* Right right triangle */}
                <div className="w-0 h-0 border-b-[40px] border-b-transparent border-t-0 border-l-[35px] border-l-neonSunset ml-[3px] group-hover:ml-[6px] transition-all duration-300"></div>
            </div>
        </div>
    );
}

export default MyButton;