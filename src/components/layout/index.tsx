import React from 'react';

import { Sidebar } from '../../components/sidebar';
import { Header } from '../../components/header';

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
