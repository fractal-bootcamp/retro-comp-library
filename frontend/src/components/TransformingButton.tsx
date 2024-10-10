import React from "react";

interface TransformingButtonProps {
  leftInput?: string;
  rightInput?: string;
}

const TextOverlay: React.FC<{ text: string; isLeft: boolean; buttonHeight: number }> = ({
  text,
  isLeft,
  buttonHeight,
}) => {
  const baseClasses =
    "absolute text-black whitespace-nowrap transition-all duration-300 flex items-center justify-center inset-0 m-auto";
  const positionClasses = isLeft
    ? "left-0 bottom-0 w-full h-full"
    : "right-0 top-0 w-full h-full";

  const verticalOffset = (buttonHeight) / 2 * (isLeft ? 1 : -1);

  return (
    <div
      className={`${baseClasses} ${positionClasses}`}
      style={{
        transform: `translateY(${verticalOffset}px)`,
        zIndex: 1,
      }}
    >
      {text}
    </div>
  );
};

const TransformingButton: React.FC<TransformingButtonProps> = ({
  leftInput = "",
  rightInput = "",
}) => {
  const baseWidth = 2.5 * parseFloat(getComputedStyle(document.documentElement).fontSize); // Width of the equilateral triangle
  const height = baseWidth * Math.sqrt(3); // Height of the triangle/trapezoid

  const getWidth = (input: string) => {
    const paddedInput = input.length > 0 ? input.padStart(input.length + 4, ' ') : ' '.repeat(4);
    return paddedInput.length <= 1 ? baseWidth : Math.max(baseWidth, paddedInput.length * 12);
  };

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
      borderTopWidth: isLeft ? "0" : `${height}px`,
      borderBottomWidth: isLeft ? `${height}px` : "0",
      ...(isTriangle ? {} : { "::before": { width: `${topWidth}px` } }),
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
        {leftInput && <TextOverlay text={leftInput} isLeft={true} buttonHeight={height} />}
      </div>

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
        style={{
          ...getTrapezoidStyle(rightWidth, false),
          marginLeft: `-${height * 0.48}px`, // Offset to nest triangles/trapezoids
        }}s
      >
        {rightInput && <TextOverlay text={rightInput} isLeft={false} buttonHeight={height} />}
      </div>
    </div>
  );
};

export default TransformingButton;
