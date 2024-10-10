import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import MyButton from "../Button"; // Assuming MyButton is exported as default from Button.tsx

const meta = {
  title: "Components/MyButton",
  component: MyButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Adjust the stories to use only the `text` prop
export const Primary: Story = {
  args: {
    text: "Cool",
  },
};

export const Secondary: Story = {
  args: {
    text: "Button",
  },
};

export const Large: Story = {
  args: {
    text: "Large Button", // Adjust as needed, but no `size` prop in your component
  },
};

export const Small: Story = {
  args: {
    text: "Small Button", // Adjust as needed, but no `size` prop in your component
  },
};

export const TestStory: Story = {
  args: {
    text: "Test Button", // Adjust as needed, but no `primary` prop in your component
  },
};
