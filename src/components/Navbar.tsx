import React from 'react';
import { NavbarContainer } from './Navbar.styled';

const Navbar = () => {
  return (
    <NavbarContainer>
      <h2>Analytics</h2>
      <p>Home</p>
      <p>Dashboard</p>
      <p>Activity</p>
      <p>Settings</p>
      <p>Logout</p>
    </NavbarContainer>
  );
};

export default Navbar;
