import React from 'react';

import * as Styled from './styled';

type Props = {
  searchText: string;
  setSearchText: (searchText: string) => void;
};

export const SearchBar = ({ searchText, setSearchText }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.InnerInput
        placeholder="Search..."
        type="text"
        value={searchText}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchText(event.target.value)
        }
      />
      <img src={process.env.PUBLIC_URL + '/assets/search.svg'} alt="search" />
    </Styled.Wrapper>
  );
};
