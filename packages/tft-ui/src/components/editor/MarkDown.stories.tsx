import { Meta } from '@storybook/react';
import { MarkDownEditor, MarkDownViewer } from './MarkDownViewer';
import { parseMarkdown } from './parser';

const meta = {
  title: 'Editor',
  component: MarkDownEditor,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MarkDownEditor>;

export default meta;

export const Basic = {
  args: {},
};
