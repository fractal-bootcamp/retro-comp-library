Semantic Description of Tranforming Triangle Button

Give me code that defines React component called TransformingButton (two files are needed: TransformingButton.tsx and TransformingButton.stories.ts) made up of two triangular or trapezoidal shapes. It accepts two optional string props, leftInput and rightInput. Depending on the length of the input strings, it adjusts the size and shape(from triangle to trapezoid) of the left and right parts of the button.

TransformingButton Component:

It is a React functional component that takes in props defined by the TransformingButtonProps interface.
The component is structured with two symmetrical shapes (either triangles or trapezoids) displayed side-by-side, separated by a small gap.
The shape on the left corresponds to the leftInput prop, and the shape on the right corresponds to the rightInput prop.
If a prop is an empty string, its corresponding shape will still be visible, but no text will be overlaid.
TextOverlay Component:

It is a smaller helper component that displays a text label (text) inside each triangle or trapezoid.
It positions the text either at the bottom-left or top-right corner depending on whether the isLeft boolean prop is true or false.

Shape Adjustments Based on Text Length:

The size of each shape is dynamically calculated using the length of the leftInput and rightInput strings.
If the text length is small, it forms a perfect equilateral triangle with a base width of 48px.
For longer texts, the shape becomes a trapezoid to accommodate the extra space needed.
Styles and Interactivity:

The component uses Tailwind CSS classes for styling and responsive design.
Hovering over the shapes triggers a color change, thanks to the hover: prefixed classes.
The transition-all and duration-300 classes add smooth transitions to hover effects.
Rendering Structure:

The component uses a flex container (flex items-center justify-center h-12) to horizontally align the left and right shapes with a small gap in between (<div className="w-2" />).
Each shape has its own background color and hover style, dynamically adjusted by the getTrapezoidStyle helper function.
Semantic Description of the TransformingButton Component:
1. Component Overview:
Name: TransformingButton
Type: React Functional Component
Purpose: Renders a button with two dynamic shapes (triangles or trapezoids) that adjust their size based on provided input strings.
Behavior: When input text is short, the shapes are triangles. For longer text, the shapes are trapezoids. The component displays optional text overlays that transition into view based on hover events.
2. Component Hierarchy and Structure:
Parent Component: TransformingButton

Props:
leftInput: Optional string for the left shape. Default is an empty string ("").
rightInput: Optional string for the right shape. Default is an empty string ("").
Child Component 1: TextOverlay

Props:
text: Text to be displayed inside the shape.
isLeft: Boolean indicating if the text belongs to the left shape (true) or the right shape (false).
3. Component State and Props:
State Management: This component does not manage any internal state.
Props:
leftInput and rightInput strings define what text, if any, appears inside each shape.
If text is empty, the shape remains visible but without a text overlay.
4. Rendering Logic:
The component dynamically calculates the width of each shape based on the length of the text string.
For texts with a single character or no text, the shape is an equilateral triangle (base width of 48px).
For longer texts, the shape becomes a trapezoid, with the top side being narrower than the base side to maintain a consistent height.
5. Styling and Layout:
CSS Classes and Tailwind Styles:
Tailwind classes like border-l-[24px] border-r-[24px] border-b-neonSunset define the border sizes and colors.
The color changes on hover are achieved using hover:border-b-electricDream for the left shape and hover:border-t-electricDream for the right.
Hover and Transition Effects:
The transition-all and duration-300 classes apply smooth transition animations to the hover states.
6. Conditional Rendering:
The TextOverlay component is only rendered if the corresponding leftInput or rightInput is not empty.
The text is placed in specific positions (left-0 bottom-0 for the left shape and right-0 top-0 for the right shape).
7. Main Visual Elements:
Left Shape:
Depending on the length of leftInput, it is rendered as a triangle or trapezoid.
Has a border-bottom style (border-b) with hover effects changing the border color.
Displays a text overlay if leftInput is not empty.
Gap: A small gap (w-2) separates the left and right shapes.
Right Shape:
Similar to the left shape, it can be either a triangle or a trapezoid based on rightInput.
Has a border-top style (border-t) with corresponding hover effects.

use tailwind CSS for the stlying. It should be minimalist, competent, and powerful.