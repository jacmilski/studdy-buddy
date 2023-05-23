import React from 'react';
import FormField from './FormField';

export default {
  title: 'components/Molecules/FormField',
  component: FormField,
};

const Template = (args) => <FormField {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'story',
  id: 'story',
  type: 'text',
  label: 'Login',
};
export const LongLabel = Template.bind({});
LongLabel.args = {
  name: 'story',
  id: 'story',
  type: 'text',
  label: 'Very long label to see how it looks',
};
