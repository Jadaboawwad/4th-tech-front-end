import React from 'react';
import NavbarStyles from 'components/Molecules/Navbar/Navbar.module.css';

interface NavListProps {
  children: React.ReactNode;
}

const NavList: React.FC<NavListProps> = ({ children }) => (
  <ul className={NavbarStyles.navbarList} data-testid="navbarList">
    {children}
  </ul>
);

export default NavList;
