import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TransformingButton from '../TransformingButton';

const meta: Meta<typeof TransformingButton> = {
  title: 'Components/TransformingButton',
  component: TransformingButton,
  tags: ['autodocs'],
  argTypes: {
    leftInput: { control: 'text' },
    rightInput: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof TransformingButton>;

export const Default: Story = {
  args: {
    leftInput: 'Left',
    rightInput: 'Right',
  },
};

export const ShortText: Story = {
  args: {
    leftInput: 'L',
    rightInput: 'R',
  },
};

export const LongText: Story = {
  args: {
    leftInput: 'Long Left Text',
    rightInput: 'Long Right Text',
  },
};

export const EmptyRight: Story = {
  args: {
    leftInput: 'Only Left',
    rightInput: '',
  },
};

export const EmptyLeft: Story = {
  args: {
    leftInput: '',
    rightInput: 'Only Right',
  },
};

export const EmptyBoth: Story = {
  args: {
    leftInput: '',
    rightInput: '',
  },
};