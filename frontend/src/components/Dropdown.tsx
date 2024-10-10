import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface DropdownProps {
    label: string;
    options: string[];
    onSelect?: (selected: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => {
    const [selected, setSelected] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option: string) => {
        setSelected(option);
        setIsOpen(false);
        if (onSelect) onSelect(option);
    };

    return (
        <div className="space-y-2 relative">
            <label className="text-cyberAqua text-lg font-semibold glow">{label}</label>
            <div
                className="bg-midnightAbyss text-neonSunset border-2 border-cyberAqua rounded-md px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-electricDream hover:text-midnightAbyss transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selected || '-- Please choose an option --'}</span>
                <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            {isOpen && (
                <ul className="absolute z-10 w-full mt-1 bg-midnightAbyss border-2 border-cyberAqua rounded-md overflow-hidden">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 cursor-pointer transition-all duration-300 text-neonSunset hover:bg-cyberAqua hover:text-midnightAbyss"
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;