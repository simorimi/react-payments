import type { Meta, StoryObj } from '@storybook/react';
import MESSAGE from '../../constants/Message';
import Dropdown from '../../components/Dropdown/Dropdown';

const { TITLE, OPTION } = MESSAGE;

const meta = {
  title: 'Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DropdownDefault: Story = {
  args: {
    optionArray: OPTION.cardSelect,
    selectText: TITLE.cardSelect,
    selectedOptionState: { value: '', setValue: () => {} },
    optionChange: () => {},
  },
};
