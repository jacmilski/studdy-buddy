import React from 'react';
import PropTypes from 'prop-types';
import Navigation from 'components/Organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';

function MainTemplate({ children }) {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
