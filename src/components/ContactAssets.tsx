import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: 67vh;
  align-items: center;
  @media screen and (max-width: 1084px) {
    flex-direction: column;
  }
`;

const ContactChild = styled.div`
  flex: 1;
  text-align: center;
`;

const ContactIcon = styled.img<{ isHover: boolean }>`
  border-radius: 50%;
  border-width: 20px;
  border-style: solid;
  background-image: ${(props) =>
    props.isHover
      ? "linear-gradient(330deg,#fde3ff 0%,#f3bcfc 25%,#fe87ce 50%,#ff9191 75%,#ff5d96 100%)"
      : "linear-gradient(330deg, #e7e3ff 0%,#bcfcd9 25%,#87fed8 50%,#5dfffc 75%,#91c3ff 100%)"};
  background-size: 400% 400%;
  animation: buttonhighlight 2s ease infinite;
  height: 30vh;
`;

export { ContactChild, ContactContainer, ContactIcon };
