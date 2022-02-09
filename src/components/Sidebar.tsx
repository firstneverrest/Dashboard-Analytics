import React from 'react';
import { SidebarContainer, LogoContainer } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 38 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="23" width="8" height="24" fill="#fff" />
            <rect x="15" y="12" width="8" height="35" fill="#fff" />
            <rect x="30" width="8" height="47" fill="#fff" />
          </svg>
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
