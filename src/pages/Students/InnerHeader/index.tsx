import React from 'react';
import { SearchBar } from 'src/components/searchbar';
import { CustomButton } from 'src/components/button';

import * as Styled from './styled';

type Props = {
  searchText: string;
  setSearchText: (searchText: string) => void;
};

export const InnerHeader = ({ searchText, setSearchText }: Props) => {
  return (
    <Styled.Container>
      <h2>Students List</h2>
      <Styled.RightWrapper>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <CustomButton buttonText="ADD NEW STUDENT" />
      </Styled.RightWrapper>
    </Styled.Container>
  );
};
