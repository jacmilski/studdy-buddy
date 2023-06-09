import styled from 'styled-components';
import { Title } from 'components/Atoms/Title/Title';
import { Label as Lab } from 'components/Atoms/Label/Label';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 400px;
`;

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

export const Label = styled(Lab)`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: #555;
`;

export const Course = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-top: 0;
`;
