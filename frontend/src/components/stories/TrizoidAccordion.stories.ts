import type { Meta, StoryObj } from "@storybook/react";
import TrizoidAccordion from "../TrizoidAccordion";

const meta = {
  title: "Components/TrizoidAccordion",
  component: TrizoidAccordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: { control: "object" },
  },
} satisfies Meta<typeof TrizoidAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { title: "Section 1", content: "Content for section 1" },
      { title: "Section 2", content: "Content for section 2" },
      { title: "Section 3", content: "Content for section 3" },
    ],
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      { title: "Section 1", content: "Content for section 1" },
      { title: "Section 2", content: "Content for section 2" },
      { title: "Section 3", content: "Content for section 3" },
      { title: "Section 4", content: "Content for section 4" },
      { title: "Section 5", content: "Content for section 5" },
    ],
  },
};
