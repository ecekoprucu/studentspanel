import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const Main = () => {
  return (
    <div
      style={{
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
      }}
    >
      <Sidebar />
      <div
        style={{
          width: '85vw',
        }}
      >
        <Header />
      </div>
    </div>
  );
};
