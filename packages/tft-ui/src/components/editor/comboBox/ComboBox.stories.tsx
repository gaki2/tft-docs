import { ComboBox } from './ComboBox';
import { Meta } from '@storybook/react';

const meta = {
  title: 'Editor/ComboBox',
  component: ComboBox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ComboBox>;

export default meta;

export const Basic = {
  args: {},
};
