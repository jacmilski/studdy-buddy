import React from 'react';
import StudentsListItem from './StudentsListItem';

export default {
  title: 'components/Molecules/StudentsListItem',
  component: StudentsListItem,
};

const Template = (args) => <StudentsListItem {...args} />;

export const Good = Template.bind({});
Good.args = {
  studentsData: {
    name: 'Jacek Placek',
    attendance: '50%',
    average: '4.3',
  },
};

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  studentsData: {
    name: 'Stefek Burczymucha',
    attendance: '72%',
    average: '3.3',
  },
};

export const BadGrades = Template.bind({});
BadGrades.args = {
  studentsData: {
    name: 'tomcio Paluch',
    attendance: '22%',
    average: '1.4',
  },
};
