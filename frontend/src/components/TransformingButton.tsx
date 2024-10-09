import React from 'react';

interface TransformingButtonProps {
  leftInput?: string;
  rightInput?: string;
}

const TextOverlay: React.FC<{ text: string; isLeft: boolean }> = ({ text, isLeft }) => {
  const baseClasses = "absolute text-white text-xs whitespace-nowrap transition-all duration-300";
  const positionClasses = isLeft
    ? "left-0 bottom-0"
    : "right-0 top-0";

  return (
    <div 
      className={`${baseClasses} ${positionClasses}`}
      style={{ 
        transform: 'translateY(200%)',
        zIndex: 1
      }}
    >
      {text}
    </div>
  );
};

const TransformingButton: React.FC<TransformingButtonProps> = ({ leftInput = '', rightInput = '' }) => {
  const baseWidth = 48; // Width of the equilateral triangle
  const height = 48; // Height of the triangle/trapezoid
  const getWidth = (input: string) => input.length <= 1 ? baseWidth : Math.max(baseWidth, input.length * 12);

  const leftWidth = getWidth(leftInput);
  const rightWidth = getWidth(rightInput);

  const getTrapezoidStyle = (width: number, isLeft: boolean) => {
    const isTriangle = width === baseWidth;
    const sideLength = isTriangle ? width / 2 : height / Math.sqrt(3);
    const topWidth = isTriangle ? 0 : width - 2 * sideLength;
    
    return {
      width: `${width}px`,
      height: `${height}px`, // Add explicit height
      borderLeftWidth: `${sideLength}px`,
      borderRightWidth: `${sideLength}px`,
      borderTopWidth: isLeft ? '0' : `${height}px`,
      borderBottomWidth: isLeft ? `${height}px` : '0',
      ...(isTriangle ? {} : { '::before': { width: `${topWidth}px` } }),
    };
  };

  return (
    <div className="flex items-center justify-center h-12">
      {/* Left Triangle/Trapezoid */}
      <div 
        className={`
          relative border-l-[24px] border-r-[24px] 
          border-solid border-transparent border-b-neonSunset
          hover:border-b-electricDream transition-all duration-300
          before:content-[''] before:absolute before:bottom-0 before:left-[-24px] 
          before:h-0 before:border-b-[48px] before:border-l-0 before:border-r-0 
          before:border-solid before:border-transparent before:border-b-neonSunset
          hover:before:border-b-electricDream before:transition-all before:duration-300
        `}
        style={getTrapezoidStyle(leftWidth, true)}
      >
        {leftInput && <TextOverlay text={leftInput} isLeft={true} />}
      </div>

      {/* Gap */}
      <div className="w-2" />

      {/* Right Triangle/Trapezoid */}
      <div 
        className={`
          relative border-l-[24px] border-r-[24px] 
          border-solid border-transparent border-t-neonSunset
          hover:border-t-electricDream transition-all duration-300
          before:content-[''] before:absolute before:top-0 before:left-[-24px] 
          before:h-0 before:border-t-[48px] before:border-l-0 before:border-r-0 
          before:border-solid before:border-transparent before:border-t-neonSunset
          hover:before:border-t-electricDream before:transition-all before:duration-300
        `}
        style={getTrapezoidStyle(rightWidth, false)}
      >
        {rightInput && <TextOverlay text={rightInput} isLeft={false} />}
      </div>
    </div>
  );
};

export default TransformingButton;