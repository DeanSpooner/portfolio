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
  margin: 32px;
  text-align: center;
`;

export default Header;
