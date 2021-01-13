import React from 'react';
import Button from "../components/button";


export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  children:'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  children:'Secondary'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  children:'large'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  children:'small'
};
