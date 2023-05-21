import React from 'react';
import { Wrapper, Logo, StyledLink } from './Navigation.styles';

function Navigation() {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study <br /> Buddy
        </h1>
      </Logo>
      <StyledLink to="/group">Dashboard</StyledLink>
      {/* <StyledLink to="/add-student">Add student</StyledLink> */}
      {/* <StyledLink to="/settings">Settings</StyledLink>
      <StyledLink to="/logout">Logout</StyledLink> */}
    </Wrapper>
  );
}

export default Navigation;
