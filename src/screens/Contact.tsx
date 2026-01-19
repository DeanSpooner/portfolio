import styled from "styled-components";
import { theme } from "../theme";
import emailIcon from "../assets/images/email.png";
import githubIcon from "../assets/images/github.png";
import linkedinIcon from "../assets/images/linkedin.png";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Changed from center to push content up slightly */
  min-height: calc(100vh - 80px); /* 80px is navbar height */
  padding: ${theme.spacing.lg} ${theme.spacing.lg};
`;

const Title = styled.h1`
  font-size: ${theme.typography.h2.fontSize};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xl};
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.full};
  }
`;

const ContactGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.lg};
  justify-content: center;
  max-width: 1000px;
  width: 100%;
`;

const ContactCard = styled.a`
  background-color: ${theme.colors.surface};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 280px;
  height: 280px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    transform: translateY(-10px) scale(1.05);
    background-color: #252525;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    border-color: ${theme.colors.primary};
    
    img {
      filter: invert(1) drop-shadow(0 0 10px ${theme.colors.primary});
      transform: scale(1.1);
    }
  }
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: ${theme.spacing.lg};
  margin-top: ${theme.spacing.md}; /* Spacing from top */
  transition: all 0.3s ease;
  filter: invert(1); /* Invert black icons to white */
  opacity: 0.9;
  display: block; /* Ensure no extra inline space */
  object-fit: contain; /* Ensure icon doesn't stretch */
`;

const Label = styled.p`
  color: ${theme.colors.text.primary};
  font-size: 1.5rem; /* Increased size since it's now the main label */
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

const SubText = styled.p`
  color: ${theme.colors.text.primary};
  font-size: 1rem;
  margin-top: ${theme.spacing.sm};
  text-align: center;
`;

const Contact = () => {
  return (
    <Section>
      <Title>Get In Touch</Title>
      <ContactGrid>
        <ContactCard href="mailto:dean.spooner@live.co.uk">
          <Icon src={emailIcon} alt="Email" />
          <Label>Email</Label>
          <SubText>dean.spooner@live.co.uk</SubText>
        </ContactCard>
        
        <ContactCard href="https://github.com/DeanSpooner" target="_blank" rel="noopener noreferrer">
          <Icon src={githubIcon} alt="GitHub" />
          <Label>GitHub</Label>
          <SubText>github.com/DeanSpooner</SubText>
        </ContactCard>
        
        <ContactCard href="https://www.linkedin.com/in/deanspooner" target="_blank" rel="noopener noreferrer">
          <Icon src={linkedinIcon} alt="LinkedIn" />
          <Label>LinkedIn</Label>
          <SubText>linkedin.com/in/deanspooner</SubText>
        </ContactCard>
      </ContactGrid>
    </Section>
  );
};

export default Contact;
