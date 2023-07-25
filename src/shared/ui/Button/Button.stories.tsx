import type { Meta, StoryObj } from '@storybook/react';

import { ICON_OPTIONS } from '~/shared/assets/icons/storybook';

import type { ButtonProps } from './Button';
import { Button } from './Button';

const buttonProps: ButtonProps = {
  children: 'button',
  loading: false,
  variant: 'primary'
};

type Story = StoryObj<typeof Button>;
const ButtonTemplate: Story = { render: (args) => <Button {...args} /> };

export const Playground = { ...ButtonTemplate };
Playground.args = buttonProps;

export const BackgroundInverted = { ...ButtonTemplate };
BackgroundInverted.args = { ...buttonProps, variant: 'backgroundInverted' };

export const Primary = { ...ButtonTemplate };
Primary.args = { ...buttonProps, variant: 'primary' };

export default {
  argTypes: {
    startIcon: {
      control: {
        type: 'select'
      },
      options: ICON_OPTIONS
    }
  },
  component: Button,
  title: 'shared/Button'
} as Meta<typeof Button>;
