import styled from "styled-components";
import { theme } from "../theme";
import prague from "../assets/images/prague.png";
import kanagawa from "../assets/images/kanagawa.png";
import nara from "../assets/images/nara.png";

const Section = styled.section`
  padding: ${theme.spacing.lg} ${theme.spacing.lg} ${theme.spacing.xl};
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: ${theme.spacing.md};
  }
`;

const Title = styled.h1`
  font-size: ${theme.typography.h2.fontSize};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.md};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  flex: 1;
`;

const RightColumn = styled(ImageColumn)`
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: ${theme.borderRadius.md};
  transition: ${theme.transitions.default};
  opacity: 0.9;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);

  &:hover {
    opacity: 1;
    transform: scale(1.02);
  }
`;

const TextContent = styled.div`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.body.fontSize};
  line-height: 1.8;
`;

const About = () => {
  return (
    <Section>
      <Title>About</Title>
      <ContentGrid>
        <ImagesContainer>
          <ImageColumn>
            <StyledImage src={prague} alt="Dean in Prague" />
            <StyledImage src={kanagawa} alt="Dean in Kanagawa" />
          </ImageColumn>
          <RightColumn>
            <StyledImage src={nara} alt="Dean in Nara" />
          </RightColumn>
        </ImagesContainer>
        <TextContent>
          <p>
            My name is Dean Spooner and I am an app and frontend web developer. Currently I am part of a small dev team building and maintaing large app for an education company in the UK; previously I was a mid-level frontend developer for a multinational digital agency, building various web projects for large international clients. Prior to this, I trained on a software development bootcamp, while working in my previous career as a primary school teacher.
          </p>
          <p>
            Outside of work, I enjoy studying Japanese, travelling around Japan, cooking, reading, and spending time with my friends. I also enjoy learning 3D modelling in Blender and three.js, and using Python to develop scripts to automate lots of work and tasks in my work and home life.
          </p>
          <p>
            よろしくお願いします！ (Pleased to meet you!)
          </p>
        </TextContent>
      </ContentGrid>
    </Section>
  );
};

export default About;
