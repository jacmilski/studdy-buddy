import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StudentsList from 'components/Organisms/StudentsList/StudentsList';
import { Title } from 'components/Atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';
import { Wrapper, NavWrapper, Select } from './Dashboard.styles';

function Dashboard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [groups, setGroups] = useState([]);

  const { getGroups } = useStudents();

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
      <StudentsList />
    </Wrapper>
  );
}

export default Dashboard;
