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
  background-color: var(--nav-bg);
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
    transition: ${theme.transitions.default};
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
  transition: ${theme.transitions.default};

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
    filter: var(--black-icon-filter);
  }
`;

const ThemeSwitch = styled.button`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.full};
  cursor: pointer;
  width: 50px;
  height: 26px;
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  margin-left: 1rem;

  &:hover {
    border-color: ${theme.colors.primary};
  }
`;

const SwitchSlider = styled.div<{ theme?: "dark" | "light" }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 4px;
  
  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background-color: ${theme.colors.primary};
    border-radius: 50%;
    transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
    transform: ${({ theme }) => (theme === "light" ? "translateX(24px)" : "translateX(0)")};
    z-index: 1;
  }
`;

const IconWrapper = styled.span`
  font-size: 12px;
  z-index: 0;
  user-select: none;
  line-height: 1;
`;

interface NavbarProps {
  theme?: "dark" | "light";
  toggleTheme?: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <NavContainer>
      <Logo to="/" onClick={closeMenu}>
        Dean <span>Spooner</span>
      </Logo>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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

        {toggleTheme && (
          <ThemeSwitch onClick={toggleTheme} aria-label="Toggle theme">
            <SwitchSlider theme={theme}>
              <IconWrapper>☀️</IconWrapper>
              <IconWrapper>🌙</IconWrapper>
            </SwitchSlider>
          </ThemeSwitch>
        )}

        <Hamburger onClick={toggleMenu} aria-label="Toggle navigation">
          <img src={isOpen ? CloseIcon : HamburgerIcon} alt="Menu" />
        </Hamburger>
      </div>
    </NavContainer>
  );
};

export default Navbar;
