import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from './Button';
import { Icons } from '../icon/icon';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    isLink: { table: { disable: true } },
    primary: { table: { disable: true } },
    secondary: { table: { disable: true } },
    tertiary: { table: { disable: true } },
    gray: { table: { disable: true } },
    inForm: { table: { disable: true } },
    small: { table: { disable: true } },
    outline: { table: { disable: true } },
    containsIcon: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base = {
  args: { children: 'Button' },
};

export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="tertiary">Tertiary</Button>
    </div>
  ),
};

export const Active: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Button type="primary" active>
        Primary
      </Button>
      <Button type="secondary" active>
        Secondary
      </Button>
      <Button type="tertiary" active>
        Tertiary
      </Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Button type="primary" icon={<Icons icon="bell" />}>
        Primary
      </Button>
      <Button type="secondary" icon={<Icons icon="bell" />}>
        Secondary
      </Button>
      <Button type="tertiary" icon={<Icons icon="bell" />}>
        Tertiary
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Button size="small" icon={<Icons icon="bell" />}>
        Small Button
      </Button>
      <Button size="small" icon={<Icons icon="bell" />} iconOnly>
        Small Button
      </Button>
      <Button size="medium" icon={<Icons icon="bell" />}>
        Medium Button
      </Button>
      <Button size="medium" icon={<Icons icon="bell" />} iconOnly>
        Medium Button
      </Button>
    </div>
  ),
};

export const IconOnly: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This is a story that shows how to use the `iconOnly` prop.',
      },
      source: {
        type: 'dynamic',
      },
    },
  },
  render: () => (
    <>
      <Button size="small" type="primary" iconOnly icon={<Icons icon="bell" />}>
        Primary
      </Button>
      <Button size="small" type="secondary" iconOnly icon={<Icons icon="bell" />}>
        Secondary
      </Button>
      <Button size="small" type="tertiary" iconOnly icon={<Icons icon="bell" />}>
        Tertiary
      </Button>
      <Button size="medium" type="primary" iconOnly icon={<Icons icon="bell" />}>
        Primary
      </Button>
      <Button size="medium" type="secondary" iconOnly icon={<Icons icon="bell" />}>
        Secondary
      </Button>
      <Button size="medium" type="tertiary" iconOnly icon={<Icons icon="bell" />}>
        Tertiary
      </Button>
    </>
  ),
  decorators: [
    (Story) => <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>{Story()}</div>,
  ],
};

export const IconOnlyActive: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Button size="small" type="primary" iconOnly icon={<Icons icon="bell" />} active>
        Primary
      </Button>
      <Button size="small" type="secondary" iconOnly icon={<Icons icon="bell" />} active>
        Secondary
      </Button>
      <Button size="small" type="tertiary" iconOnly icon={<Icons icon="bell" />} active>
        Tertiary
      </Button>
      <Button size="medium" type="primary" iconOnly icon={<Icons icon="bell" />} active>
        Primary
      </Button>
      <Button size="medium" type="secondary" iconOnly icon={<Icons icon="bell" />} active>
        Secondary
      </Button>
      <Button size="medium" type="tertiary" iconOnly icon={<Icons icon="bell" />} active>
        Tertiary
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const WithHref: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Button onClick={() => console.log('Hello')}>I am a button using onClick</Button>
      <Button href="https://storybook.js.org/">I am an anchor using Href</Button>
    </div>
  ),
};
