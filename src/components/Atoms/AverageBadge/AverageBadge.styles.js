import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ isBig }) => (isBig ? '64px' : '34px')};
  height: ${({ isBig }) => (isBig ? '64px' : '34px')};
  background-color: ${({ average }) => (average <= 1.5 ? '#CB8581' : average <= 3.5 ? '#E1D888' : '#8FCB81')};
  border-radius: 50px;
  font-size: ${({ theme, isBig }) => (isBig ? theme.fontSize.xl : theme.fontSize.m)};
  font-weight: ${({ isBig }) => (isBig ? 'bold' : 'normal')};
  color: ${({ theme }) => theme.colors.white};
`;
