import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Input } from 'components/Atoms/Input/Input';
import { SearchContext } from 'Providers/SearchProvider';
import { ViewsWrapper } from 'components/Organisms/ViewsWrapperStyles/ViewsWrapper.styles';
import { Wrapper } from 'components/Molecules/UsersListItem/UsersListItem.styles';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styles';

const SearchingBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchingListWrapper = styled(ViewsWrapper)`
  position: absolute;
  top: 40px;
  left: 320px;
  border-radius: 0 15px 15px 15px;
  max-width: 350px;
  padding: 20px 30px;
  z-index: 10;
`;

const SearchingListItem = styled(Wrapper)`
  height: 40px;
`;

function SearchBar() {
  const [sentence, setSentence] = useState('');

  const { filterUsers, filteredUsers } = useContext(SearchContext);

  const handleChange = (e) => {
    setSentence(e.target.value);
    filterUsers(e.target.value);
  };

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as: </p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchingBox>
        <Input value={sentence} onChange={handleChange} />
        {filteredUsers.length > 0 && sentence.length > 0 ? (
          <SearchingListWrapper>
            {filteredUsers.map((user) => (
              <SearchingListItem>{user.name}</SearchingListItem>
            ))}
          </SearchingListWrapper>
        ) : null}
      </SearchingBox>
    </SearchBarWrapper>
  );
}

export default SearchBar;
