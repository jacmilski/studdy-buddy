import styled from 'styled-components';
import { ViewsWrapper } from '../ViewsWrapperStyles/ViewsWrapper.styles';

export const Wrapper = styled(ViewsWrapper)`
  margin: 25px;
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
