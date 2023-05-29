import styled from 'styled-components';
import { Label as Lab } from 'components/Atoms/Label/Label';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 180px;
`;

export const Label = styled(Lab)`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: #555;
`;

export const SubjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 50px;
`;

export const Subject = styled.h3`
  font-size: calc(${({ theme }) => theme.fontSize.xl} - 3px);
  font-weight: normal;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
