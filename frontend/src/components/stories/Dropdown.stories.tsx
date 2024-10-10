import React from "react";
import { Meta, Story } from "@storybook/react";
import Dropdown, { DropdownProps } from "../Dropdown"; // adjust the path as necessary

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    // Customize controls for props if needed
    onSelect: { action: "selected" },
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

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
