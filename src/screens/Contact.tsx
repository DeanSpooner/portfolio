import Header from "../components/Header";
import github from "../assets/images/github.png";
import email from "../assets/images/email.png";
import linkedin from "../assets/images/linkedin.png";
import {
  ContactChild,
  ContactContainer,
  ContactIcon,
} from "../components/ContactAssets";
import Text from "../components/Text";
import { useState } from "react";

const Contact = () => {
  const [hover, setHover] = useState("");
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100vw" }}>
      <Header text={"Contact"} />
      <ContactContainer>
        <a
          href="mailto:dean.spooner@live.co.uk"
          target="_blank"
          onMouseEnter={() => setHover("email")}
          onMouseLeave={() => setHover("")}
        >
          <ContactChild>
            <ContactIcon src={email} alt="Email" isHover={hover === "email"} />
            <Text>dean.spooner@live.co.uk</Text>
          </ContactChild>
        </a>
        <a
          href="https://github.com/DeanSpooner"
          target="_blank"
          onMouseEnter={() => setHover("github")}
          onMouseLeave={() => setHover("")}
        >
          <ContactChild>
            <ContactIcon
              src={github}
              alt="GitHub"
              isHover={hover === "github"}
            />
            <Text>github.com/DeanSpooner</Text>
          </ContactChild>
        </a>
        <a
          href="https://www.linkedin.com/in/deanspooner"
          target="_blank"
          onMouseEnter={() => setHover("linkedin")}
          onMouseLeave={() => setHover("")}
        >
          <ContactChild>
            <ContactIcon
              src={linkedin}
              alt="LinkedIn"
              isHover={hover === "linkedin"}
            />
            <Text>linkedin.com/in/deanspooner</Text>
          </ContactChild>
        </a>
      </ContactContainer>
    </div>
  );
};

export default Contact;
