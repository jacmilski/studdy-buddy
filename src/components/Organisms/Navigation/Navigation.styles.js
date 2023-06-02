import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 30px 0;
  grid-row: 1 / 3;
  grid-column: 1 / 1;
`;

export const Logo = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.darkGrey};

  h1 {
    font-size: 15px;
    text-align: right;
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledLink = styled(NavLink)`
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;

  &.active {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 18px;
    height: 4px;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
