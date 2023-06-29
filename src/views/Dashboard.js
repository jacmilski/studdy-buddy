import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StudentsList from 'components/Organisms/StudentsList/StudentsList';
import { Title } from 'components/Atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';
import useModal from 'components/Organisms/Modal/useModal';
import StudentDetails from 'components/Molecules/StudentDetails/StudentDetails';
import Modal from 'components/Organisms/Modal/Modal';
import { useGetGroupsQuery } from 'store/api/groups';
import { Wrapper, NavWrapper, Select } from './Dashboard.styles';

function Dashboard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentStudent, setCurrentStudent] = useState([]);
  const { getStudentById } = useStudents();
  const { data, isLoading } = useGetGroupsQuery();

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleGroupChange = (e) => {
    navigate(`/group/${e.target.value}`);
  };

  const handleOpenStudentDetails = async (studentId) => {
    try {
      const student = await getStudentById(studentId);
      setCurrentStudent(student);
    } catch (err) {
      console.log(err.message);
    }
    handleOpenModal();
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!id && data.groups.length > 0) {
    navigate(`/group/${data?.groups[0]}`);
  }

  return (
    <Wrapper>
      <NavWrapper>
        <Title>Group: {id}</Title>
        <form>
          <Select onChange={handleGroupChange}>
            <option value={`${data.groups[0]}`} className="option">
              choose a group
            </option>
            {data &&
              data.groups.map((item) => (
                <option key={item} value={item} className="option">
                  group {item}
                </option>
              ))}
          </Select>
        </form>
      </NavWrapper>
      <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <StudentDetails student={currentStudent} />
      </Modal>
    </Wrapper>
  );
}

export default Dashboard;
