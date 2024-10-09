import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TextInput from "../TextInput";

const meta = {
  title: "Components/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithValue: Story = {
  args: {
    value: "Sample text",
    placeholder: "Enter text...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
  },
};

export const LargeInput: Story = {
  args: {
    size: "large",
    placeholder: "Large input...",
  },
};

export const SmallInput: Story = {
  args: {
    size: "small",
    placeholder: "Small input...",
  },
};
