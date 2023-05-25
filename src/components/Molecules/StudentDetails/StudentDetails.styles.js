import styled from 'styled-components';
import { Title } from 'components/Atoms/Title/Title';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  ${Title} {
    margin-bottom: 0;
  }
`;
