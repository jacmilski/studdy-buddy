import React from 'react';
import { Input } from 'components/Atoms/Input/Input';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styles';

function SearchBar() {
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as: </p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <Input />
    </SearchBarWrapper>
  );
}

export default SearchBar;
