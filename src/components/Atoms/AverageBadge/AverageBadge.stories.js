import React from 'react';
import AverageBadge from './AverageBadge';

export default {
  title: 'components/Atoms/AverageBadge',
  component: AverageBadge,
};

const Template = (args) => <AverageBadge {...args}>score</AverageBadge>;

export const Default = Template.bind({});
Default.args = {
  isBig: false,
};
export const Big = Template.bind({});
Big.args = {
  isBig: true,
};
