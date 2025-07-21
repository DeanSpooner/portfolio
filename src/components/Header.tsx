import styled from "styled-components";

type Props = {
  /**
   * Text to appear in the header string.
   */
  text: string;
};

const Header = ({ text }: Props) => {
  return <HeaderText>{text}</HeaderText>;
};

const HeaderText = styled.h1`
  margin: 16px;
  text-align: center;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 700;
`;

export default Header;
