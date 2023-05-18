/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams, useNavigate } from 'react-router-dom';
import UsersList from 'components/Organisms/UsersList/UsersList';
import axios from 'axios';
import { ViewsWrapper } from 'components/Organisms/ViewsWrapperStyles/ViewsWrapper.styles';
import { Title } from 'components/Atoms/Title/Title';

const Wrapper = styled(ViewsWrapper)``;

const NavWrapper = styled.nav`
  display: flex;
  max-width: 100%;
  margin: 20px auto 20px 25px;
`;

const Select = styled.select`
  padding: 5px 8px;
  background-color: ${({ theme }) => theme.colors.grey};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 8px;
  margin-left: 30px;
`;

function Dashboard() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => {
        setStudents(data.students);
      })
      .catch((err) => console.log(err.message));
  }, [id, groups]);

  const handleGroupChange = (e) => {
    navigate(`/group/${e.target.value}`);
  };

  return (
    <Wrapper>
      <NavWrapper>
        <Title>Group: {id || groups[0]}</Title>
        <form>
          <Select onChange={handleGroupChange}>
            <option value={`${groups[0]}`} className="option">
              choose a group
            </option>
            {groups.map((item) => (
              <option key={item} value={item} className="option">
                group {item}
              </option>
            ))}
          </Select>
        </form>
      </NavWrapper>
      <UsersList students={students} />
    </Wrapper>
  );
}

export default Dashboard;
