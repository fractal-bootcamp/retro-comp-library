import React, { useState, useEffect } from "react";

// This is a more functional approach to the trapezoid problem
// There's room to optimize this, but the goal is this could make the code more modular and easy to work with

// Utility Functions
const getBaseWidth = (): number => {
  return 2.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

const getHeight = (baseWidth: number): number => {
  return baseWidth * Math.sqrt(3);
};

const calculateWidth = (input: string, baseWidth: number): number => {
  const paddedLength = Math.max(input.length + 4, 4);
  return Math.max(baseWidth, paddedLength * 12);
};

const getTrapezoidStyle = (
  width: number,
  isLeft: boolean,
  baseWidth: number,
  height: number
): React.CSSProperties => {
  const isTriangle = width === baseWidth;
  const sideLength = isTriangle ? width / 2 : height / Math.sqrt(3);

  return {
    width: `${width}px`,
    height: `${height}px`,
    borderLeftWidth: `${sideLength}px`,
    borderRightWidth: `${sideLength}px`,
    borderTopWidth: isLeft ? "0" : `${height}px`,
    borderBottomWidth: isLeft ? `${height}px` : "0",
  };
};

// TextOverlay Component
interface TextOverlayProps {
  text: string;
  isLeft: boolean;
  buttonHeight: number;
}

const TextOverlay: React.FC<TextOverlayProps> = ({ text, isLeft, buttonHeight }) => {
  const baseClasses =
    "absolute text-black whitespace-nowrap transition-all duration-300 flex items-center justify-center inset-0 m-auto";
  const positionClasses = isLeft
    ? "left-0 bottom-0 w-full h-full"
    : "right-0 top-0 w-full h-full";

  const verticalOffset = (buttonHeight / 2) * (isLeft ? 1 : -1);

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

// Trapezoid Component
interface TrapezoidProps {
  width: number;
  isLeft: boolean;
  baseWidth: number;
  height: number;
  children?: React.ReactNode;
}

const Trapezoid: React.FC<TrapezoidProps> = ({ width, isLeft, baseWidth, height, children }) => {
  const style = getTrapezoidStyle(width, isLeft, baseWidth, height);

  const baseClasses = `
    relative border-l-[24px] border-r-[24px] 
    border-solid border-transparent 
    transition-all duration-300
    before:content-[''] 
    before:absolute 
    ${isLeft ? "before:bottom-0 before:border-b" : "before:top-0 before:border-t"}-[48px] 
    before:border-l-0 before:border-r-0 
    before:border-solid 
    before:border-transparent 
    ${isLeft ? "border-b-neonSunset before:border-b-neonSunset" : "border-t-neonSunset before:border-t-neonSunset"}
    hover:${isLeft ? "border-b-electricDream before:border-b-electricDream" : "border-t-electricDream before:border-t-electricDream"}
    before:transition-all before:duration-300
  `;

  const additionalStyle = isLeft
    ? {}
    : { marginLeft: `-${height * .5}px` };

  return (
    <div className={baseClasses} style={{ ...style, ...additionalStyle }}>
      {children}
    </div>
  );
};

// TransformingButton Component
interface TransformingButtonProps {
  leftInput?: string;
  rightInput?: string;
}

const TransformingButton: React.FC<TransformingButtonProps> = ({ leftInput = "", rightInput = "" }) => {
  const [baseWidth, setBaseWidth] = useState<number>(2.5 * 16); // default to 16px if not yet set
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const computedBaseWidth = getBaseWidth();
    setBaseWidth(computedBaseWidth);
    setHeight(getHeight(computedBaseWidth));
  }, []);

  const leftWidth = calculateWidth(leftInput, baseWidth);
  const rightWidth = calculateWidth(rightInput, baseWidth);

  return (
    <div className="flex items-center justify-center h-12">
      {/* Left Triangle/Trapezoid */}
      <Trapezoid width={leftWidth} isLeft={true} baseWidth={baseWidth} height={height}>
        {leftInput && <TextOverlay text={leftInput} isLeft={true} buttonHeight={height} />}
      </Trapezoid>

      {/* Right Triangle/Trapezoid */}
      <Trapezoid width={rightWidth} isLeft={false} baseWidth={baseWidth} height={height}>
        {rightInput && <TextOverlay text={rightInput} isLeft={false} buttonHeight={height} />}
      </Trapezoid>
    </div>
  );
};

export default TransformingButton;
