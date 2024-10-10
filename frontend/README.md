# Cyber UI Components

A collection of cyberpunk-themed React components for building futuristic user interfaces. These components are designed to give your application a unique, neon-lit aesthetic inspired by the cyberpunk genre.

## Installation

To install the Cyber UI Components package, run the following command:

```bash
npm install cyber-ui-components
```

or if you're using yarn:

```bash
yarn add cyber-ui-components
```

## Components

### 1. TrizoidAccordion

An accordion component with a unique trizoid (triangular-trapezoid) design.

**Usage:**
```jsx
import { TrizoidAccordion } from 'cyber-ui-components';

const items = [
  { title: 'Section 1', content: 'Content for section 1' },
  { title: 'Section 2', content: 'Content for section 2' },
];

function MyComponent() {
  return <TrizoidAccordion items={items} />;
}
```

**Props:**
- `items`: An array of AccordionItem objects, each containing a title and content.

### 2. TransformingButton

A button component that transforms between triangular and trapezoidal shapes, creating a dynamic and futuristic look.

**Usage:**
```jsx
import { TransformingButton } from 'cyber-ui-components';

function MyComponent() {
  return <TransformingButton leftInput="Click me" rightInput="▼" />;
}
```

**Props:**
- `leftInput`: The text to display on the left side of the button.
- `rightInput`: The text to display on the right side of the button.

### 3. Dropdown

A stylish dropdown component with a cyberpunk-inspired design, featuring neon colors and smooth transitions.

**Usage:**
```jsx
import { Dropdown } from 'cyber-ui-components';

const options = ['Option 1', 'Option 2', 'Option 3'];

function MyComponent() {
  return (
    <Dropdown
      label="Select an option"
      options={options}
      onSelect={(selected) => console.log(selected)}
    />
  );
}
```

**Props:**
- `label`: The label for the dropdown.
- `options`: An array of strings representing the selectable options.
- `onSelect`: A callback function that receives the selected option.

### 4. Button

A futuristic button component with a unique shape and hover effects, perfect for call-to-action elements.

**Usage:**
```jsx
import { Button } from 'cyber-ui-components';

function MyComponent() {
  return <Button text="Click me" />;
}
```

**Props:**
- `text`: The text to display on the button.

### 5. TextInput

A customizable text input component with a cyberpunk aesthetic, featuring dynamic resizing and a shaking animation effect.

**Usage:**
```jsx
import { TextInput } from 'cyber-ui-components';

function MyComponent() {
  return (
    <TextInput
      placeholder="Enter text"
      onChange={(value) => console.log(value)}
      size="large"
    />
  );
}
```

**Props:**
- `placeholder`: The placeholder text for the input.
- `value`: The current value of the input.
- `disabled`: Whether the input is disabled.
- `onChange`: A callback function that receives the new value when the input changes.
- `size`: The size of the input, either "small" or "large".

## Customization

All components use Tailwind CSS classes for styling. You can customize the appearance by overriding these classes or by providing your own CSS. The components use a cyberpunk-inspired color palette, including:

- `neonSunset`: A vibrant orange color
- `electricDream`: A bright blue color
- `cyberAqua`: A neon aqua color
- `midnightAbyss`: A deep, dark background color
- `digitalVoid`: A slightly lighter background color

You can override these colors in your Tailwind configuration to match your desired aesthetic.

## Browser Compatibility

Cyber UI Components are designed to work with modern browsers that support ES6+ and CSS3. For optimal visual effects, we recommend using the latest versions of Chrome, Firefox, Safari, or Edge.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

## Changelog

### Version 1.0.0
- Initial release with TrizoidAccordion, TransformingButton, Dropdown, Button, and TextInput components.