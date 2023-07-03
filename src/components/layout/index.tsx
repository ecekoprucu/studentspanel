import React from 'react';

import { Header } from '../header';
import { Sidebar } from '../sidebar';

import * as Styled from './styled';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Styled.Container>
      <Sidebar />
      <div
        style={{
          width: '85vw',
        }}
      >
        <Header />
        {children}
      </div>
    </Styled.Container>
  );
};
