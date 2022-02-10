import React from 'react';
import { SidebarContainer, LogoContainer } from './Sidebar.styled';
import { ReactComponent as Icon } from '../images/icon.svg';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <span>
          <Icon />
        </span>
        <h2>Analytics</h2>
      </LogoContainer>
      <p>Home</p>
      <p>Dashboard</p>
      <p>Activity</p>
      <p>Settings</p>
      <p>Logout</p>
    </SidebarContainer>
  );
};

export default Sidebar;
