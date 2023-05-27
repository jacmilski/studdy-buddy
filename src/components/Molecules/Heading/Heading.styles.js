import styled from 'styled-components';
import { Title } from 'components/Atoms/Title/Title';

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  margin-bottom: 50px;

  ${Title} {
    margin-bottom: 0;
  }
`;
