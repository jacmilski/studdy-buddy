import React from 'react';
import PropTypes from 'prop-types';
import Navigation from 'components/Organisms/Navigation/Navigation';
import SearchBar from 'components/Organisms/SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';
import { Wrapper } from './MainTemplate.styles';

function MainTemplate({ children }) {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
