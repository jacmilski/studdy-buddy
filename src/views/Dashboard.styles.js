import styled from 'styled-components';
import { ViewsWrapper } from 'components/Organisms/ViewsWrapperStyles/ViewsWrapper.styles';

export const Wrapper = styled(ViewsWrapper)``;

export const NavWrapper = styled.nav`
  display: flex;
  max-width: 100%;
  margin: 20px auto 20px 25px;
`;

export const Select = styled.select`
  padding: 5px 8px;
  background-color: ${({ theme }) => theme.colors.grey};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 8px;
  margin-left: 30px;
`;
