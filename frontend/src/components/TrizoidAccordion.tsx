import React, { useState, useEffect } from 'react';
import TransformingButton from './TransformingButton';

interface AccordionItem {
  title: string;
  content: string;
}

interface TrizoidAccordionProps {
  items: AccordionItem[];
}

const TrizoidAccordion: React.FC<TrizoidAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [spacing, setSpacing] = useState<number>(0);

  useEffect(() => {
    // Calculate the spacing based on TransformingButton's geometry
    const baseWidth = 2.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    const height = baseWidth * Math.sqrt(3);
        console.log(height)
    
    // Calculate the visual spacing that matches the horizontal overlap
    // This is approximately *(.37) of the height, which creates a visual balance
    //this needs to be refactored to compute 
    const calculatedSpacing = height * 0.37;
    
    setSpacing(calculatedSpacing);
  }, []);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: `${spacing}px` }}>
          <div onClick={() => toggleItem(index)} className="cursor-pointer">
            <TransformingButton
              leftInput={item.title}
              rightInput={activeIndex === index ? '▲' : '▼'}
            />
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-gray-100 rounded-b-lg transition-all duration-300 ease-in-out">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TrizoidAccordion;
