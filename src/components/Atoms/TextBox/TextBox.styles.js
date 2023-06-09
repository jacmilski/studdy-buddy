import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  margin: 0 20px;

  p {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p:first-child {
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 17px;
    font-weight: bold;
  }
  p:last-child {
    margin-top: 2px;
    font-size: 11px;
  }
`;
