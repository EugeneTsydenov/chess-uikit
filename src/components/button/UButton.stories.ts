import type { Meta, StoryObj } from '@storybook/vue3';

import UButton from './UButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Button',
  component: UButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['button', 'reset', 'submit'] },
  },
} satisfies Meta<typeof UButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
};

export const Fds: Story = {
  args: {
    label: 'fdsfdsfsdfdsfdsfdsfdsfds',
  },
};
