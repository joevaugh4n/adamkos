import type { Meta, StoryObj } from "@storybook/react";

import App from "./App";

const meta = {
  title: "Adam Koszary/Page",
  component: App,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Primary: Story = {
  args: {
    title: "Adam Koszary",
    label: "Adam Koszary",
  },
};
