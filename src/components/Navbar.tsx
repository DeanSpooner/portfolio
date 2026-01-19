import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../theme";
import HamburgerIcon from "../assets/hamburger.svg";
import CloseIcon from "../assets/close.svg";

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 1000;
  border-bottom: 1px solid ${theme.colors.border};
`;

const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  text-decoration: none;
  display: flex;
  gap: 0.25rem;
  
  span {
    color: ${theme.colors.primary};
    transition: color 0.3s ease;
  }

  &:hover {
    color: ${theme.colors.primary};
    
    span {
      color: ${theme.colors.text.primary};
    }
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: ${theme.colors.background};
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${theme.colors.text.primary};
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem 0;
    min-height: 48px;
    display: flex;
    align-items: center;
  }

  &:hover,
  &.active {
    color: ${theme.colors.primary};
  }

  &.active {
    font-weight: 600;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${theme.colors.text.primary};

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 24px;
    height: 24px;
    filter: invert(1);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <NavContainer>
      <Logo to="/" onClick={closeMenu}>
        Dean <span>Spooner</span>
      </Logo>

      <Hamburger onClick={toggleMenu} aria-label="Toggle navigation">
        <img src={isOpen ? CloseIcon : HamburgerIcon} alt="Menu" />
      </Hamburger>

      <NavLinks isOpen={isOpen}>
        <StyledNavLink to="/" onClick={closeMenu}>
          Home
        </StyledNavLink>
        <StyledNavLink to="/about" onClick={closeMenu}>
          About
        </StyledNavLink>
        <StyledNavLink to="/professional" onClick={closeMenu}>
          Experience
        </StyledNavLink>
        <StyledNavLink to="/personal" onClick={closeMenu}>
          Projects
        </StyledNavLink>
        <StyledNavLink to="/contact" onClick={closeMenu}>
          Contact
        </StyledNavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
