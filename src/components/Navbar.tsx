import styled from "styled-components";

const Bar = styled.div`
  background-color: rgba(100, 100, 100, 30%);
  height: 50px;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const LinkBox = styled.div<{ isScreen: boolean }>`
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
`;

const Link = styled.h2`
  margin: 0;
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
}

const Navbar = ({ screen, setScreen }: NavbarProps) => {
  return (
    <Bar>
      <LinkBox onClick={() => setScreen("home")} isScreen={screen === "home"}>
        <Link>Home</Link>
      </LinkBox>
      <LinkBox onClick={() => setScreen("about")} isScreen={screen === "about"}>
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
    </Bar>
  );
};

export default Navbar;
