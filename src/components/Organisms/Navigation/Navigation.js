import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Wrapper, Logo, StyledLink } from './Navigation.styles';

function Navigation() {
  const { signOut } = useAuth();

  return (
    <Wrapper>
      <Logo>
        <h1>
          Study <br /> Buddy
        </h1>
      </Logo>
      <StyledLink to="/group">Dashboard</StyledLink>
      <StyledLink to="/Notes">Notes</StyledLink>
      <StyledLink as="a" onClick={signOut}>
        Logout
      </StyledLink>
      {/* <StyledLink to="/add-student">Add student</StyledLink> */}
      {/* <StyledLink to="/settings">Settings</StyledLink>
      <StyledLink to="/logout">Logout</StyledLink> */}
    </Wrapper>
  );
}

export default Navigation;
