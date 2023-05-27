import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ isBig }) => (isBig ? '64px' : '34px')};
  height: ${({ isBig }) => (isBig ? '64px' : '34px')};
  border-radius: 50px;
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.xl : theme.fontSize.m)};
  font-weight: ${({ isBig }) => (isBig ? 'bold' : 'normal')};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, average }) => {
    if (average > 4) return theme.colors.success;
    if (average > 3) return theme.colors.warning;
    if (average > 1) return theme.colors.error;
  }};
`;
