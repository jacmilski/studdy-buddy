import React from 'react';
import StudentDetails from 'components/Molecules/StudentDetails/StudentDetails';
import Modal from './Modal';

export default {
  title: 'components/Organisms/Modal',
  component: Modal,
};

const Template = (args) => (
  <Modal {...args}>
    <StudentDetails
      student={{
        id: '1',
        name: 'Adam Romański',
        attendance: '39%',
        average: '2.3',
        group: 'A',
      }}
    />
  </Modal>
);

export const Default = Template.bind({});
