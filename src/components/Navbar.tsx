import styled from "styled-components";
import "./Navbar.css";
import HamburgerIcon from "../assets/hamburger.svg";
import CloseIcon from "../assets/close.svg";
import { Dispatch, SetStateAction, useState } from "react";

const Bar = styled.div`
  background-color: rgba(100, 100, 100, 30%);
  height: 50px;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  z-index: 2;
  @media screen and (max-width: 1084px) {
    flex-direction: column;
    height: 100vh;
    background: rgb(1, 25, 22);
    background: linear-gradient(
      180deg,
      rgba(1, 25, 22, 1) 0%,
      rgba(1, 59, 50, 1) 72%
    );
  }
`;

const Hamburger = styled.div`
  background-color: #e97624;
  border-radius: 12px;
  width: 36px;
  height: 36px;
  padding: 10px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 3;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 1085px) {
    display: none;
  }
`;

const LinkBox = styled.div<{ isScreen: boolean }>`
  transition: all 0.5s ease 0s;
  -webkit-transition: all 0.5s ease 0s;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  background-color: ${(props) => (props.isScreen ? "#016556" : "transparent")};
  border-radius: 0 0 20px 20px;
  &:hover {
    background-color: #0b7767;
    cursor: pointer;
  }
  @media screen and (max-width: 1084px) {
    border-radius: 20px;
  }
`;


const Link = styled.h2`
  margin: 0;
`;

const InvisibleLink = styled.div`
  @media screen and (min-width: 1085px) {
    display: none;
  }
`;

interface NavbarProps {
  /**
   * Currently-selected screen to show.
   */
  screen: string;
  /**
   * setState function for which screen to show.
   */
  setScreen: (screen: string) => void;
  menuDown: boolean;
  setMenuDown: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ screen, setScreen, menuDown, setMenuDown }: NavbarProps) => {
  let isClicked = false;

  const [hamburgerIcon, setHamburgerIcon] = useState(true);

  return (
    <>
      <Hamburger
        onClick={() => {
          document?.querySelector(".menu")?.classList.toggle("isClicked");

          setHamburgerIcon(!hamburgerIcon);

          setMenuDown(!menuDown);

          isClicked =
            document?.querySelector(".menu")?.classList.contains("isClicked") ??
            false;

          document
            ?.querySelector(".menu")
            ?.classList?.toggle("isNotClicked", !isClicked);
        }}
      >
        <img src={hamburgerIcon ? HamburgerIcon : CloseIcon} />
      </Hamburger>
      <div className={`menu`}>
        <Bar>
          <LinkBox
            onClick={() => setScreen("home")}
            isScreen={screen === "home"}
          >
            <Link>Home</Link>
          </LinkBox>
          <LinkBox
            onClick={() => setScreen("about")}
            isScreen={screen === "about"}
          >
            <Link>About Dean</Link>
          </LinkBox>
          <LinkBox
            onClick={() => setScreen("professional")}
            isScreen={screen === "professional"}
          >
            <Link>Professional Experience</Link>
          </LinkBox>
          <LinkBox
            onClick={() => setScreen("personal")}
            isScreen={screen === "personal"}
          >
            <Link>Personal Projects</Link>
          </LinkBox>
          <LinkBox
            onClick={() => setScreen("education")}
            isScreen={screen === "education"}
          >
            <Link>Education</Link>
          </LinkBox>
          <InvisibleLink />
          <InvisibleLink />
          <InvisibleLink />
        </Bar>
      </div>
    </>
  );
};

export default Navbar;
