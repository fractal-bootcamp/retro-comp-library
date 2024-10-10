import { Meta, StoryFn } from "@storybook/react";
import Dropdown from "../Dropdown"; // adjust the path as necessary

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    // Customize controls for props if needed
    onSelect: { action: "selected" },
  },
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Select an option",
  options: ["Option 1", "Option 2", "Option 3"],
};

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  label: "Choose your favorite",
  options: ["Apple", "Banana", "Cherry"],
};