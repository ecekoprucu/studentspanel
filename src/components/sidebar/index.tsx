import React from 'react';
import { Tab } from './Tab';

import * as Styled from './styled';

const tabs = [
  {
    icon: process.env.PUBLIC_URL + '/assets/home.svg',
    text: 'Home',
  },
  {
    icon: process.env.PUBLIC_URL + '/assets/bookmark.svg',
    text: 'Course',
  },
  {
    icon: process.env.PUBLIC_URL + '/assets/students.svg',
    text: 'Students',
  },
  {
    icon: process.env.PUBLIC_URL + '/assets/payment.svg',
    text: 'Payment',
  },
  {
    icon: process.env.PUBLIC_URL + '/assets/report.svg',
    text: 'Report',
  },
  {
    icon: process.env.PUBLIC_URL + '/assets/settings.svg',
    text: 'Settings',
  },
];

export const Sidebar = () => {
  return (
    <Styled.Container>
      <Styled.HeaderTitle>MANAGE COURSES</Styled.HeaderTitle>
      <div
        style={{
          minWidth: '60%',
        }}
      >
        <Styled.AvatarImg
          src={process.env.PUBLIC_URL + '/avatar.png'}
          alt="Profile"
        />
        <Styled.Name style={{ textAlign: 'center' }}>John Doe</Styled.Name>
        <Styled.Role>Admin</Styled.Role>
      </div>
      <div>
        {tabs.map((tab, index) => (
          <Tab key={'tab-' + index} icon={tab.icon} text={tab.text} />
        ))}
      </div>
      <Styled.LogoutButton to="/">
        <span>Logout</span>
        <img src={process.env.PUBLIC_URL + '/assets/logout.svg'} alt="Logout" />
      </Styled.LogoutButton>
    </Styled.Container>
  );
};
