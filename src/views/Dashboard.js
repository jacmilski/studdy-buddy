import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StudentsList from 'components/Organisms/StudentsList/StudentsList';
import { Title } from 'components/Atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';
import useModal from 'components/Organisms/Modal/useModal';
import StudentDetails from 'components/Molecules/StudentDetails/StudentDetails';
import { Wrapper, NavWrapper, Select } from './Dashboard.styles';

function Dashboard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState([]);

  const { getGroups, getStudentById } = useStudents();

  const { isOpen, handleOpenModal, handleCloseModal, Modal } = useModal();

  useEffect(() => {
    (async () => {
      try {
        const data = await getGroups();
        setGroups(data);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [getGroups]);

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

  if (!id && groups.length > 0) {
    navigate(`/group/${groups[0]}`);
  }

  return (
    <Wrapper>
      <NavWrapper>
        <Title>Group: {id}</Title>
        <form>
          <Select onChange={handleGroupChange}>
            <option value={`${groups[0]}`} className="option">
              choose a group
            </option>
            {groups &&
              groups.map((item) => (
                <option key={item} value={item} className="option">
                  group {item}
                </option>
              ))}
          </Select>
        </form>
      </NavWrapper>
      <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
      {isOpen && currentStudent ? (
        <Modal handleClose={handleCloseModal}>
          <StudentDetails student={currentStudent} />
        </Modal>
      ) : null}
    </Wrapper>
  );
}

export default Dashboard;
