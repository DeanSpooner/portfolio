import styled from "styled-components";
import { theme } from "../theme";
import shikoku from "../assets/images/shikoku.png";
import TechStack from "../components/TechStack";

const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: ${theme.spacing.md} ${theme.spacing.md};
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing.xl};

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: ${theme.spacing.sm};
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Greeting = styled.h2`
  color: ${theme.colors.primary};
  font-size: ${theme.typography.h3.fontSize};
  font-weight: 500;
`;

const MainHeading = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  background: linear-gradient(135deg, ${theme.colors.text.primary} 0%, ${theme.colors.text.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const SubText = styled.p`
  color: ${theme.colors.text.primary};
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 600px;

  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;
  border: 4px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: scale(1.02);
    border-color: ${theme.colors.primary};
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const AnimationSection = styled.div`
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin: ${theme.spacing.lg} auto 0;
  position: relative;
  background: transparent;
  
  /* Use mask-image for smooth transparency at the ends */
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);

  @media (max-width: 768px) {
    width: 100vw;
    margin: ${theme.spacing.md} calc(-1 * ${theme.spacing.md}) 0;
    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  }
`;

const ScrollTrack = styled.div<{ $direction: "forward" | "backward" }>`
  display: flex;
  width: max-content;
  animation: ${props => props.$direction === "forward" ? "scrollForward" : "scrollBackward"} 60s linear infinite;
  gap: 8px;

  @keyframes scrollForward {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @keyframes scrollBackward {
    from { transform: translateX(-50%); }
    to { transform: translateX(0); }
  }
    
`;

const StyledTechStack = styled(TechStack)`
  margin-bottom: 0;
`;

const Home = () => {
  const group1 = ["React", "TypeScript", "Next.js", "React Native", "Expo", "Zustand", "Redux", "Tailwind", "CSS", "HTML", "JavaScript", "Styled Components", "ChatGPT", "Google Gemini", "Claude", "Blender", "Three.js"];
  const group2 = ["Node.js", "Python", "Express", "MySQL", "Docker", "AWS", "Google Cloud", "Vercel", "Jest", "Cypress", "Detox", "Storybook", "i18n", "Bitbucket", "Cursor", "Google Antigravity", "Adobe Illustrator", "Inkscape"];

  const repeatedGroup1 = [...group1, ...group1];
  const repeatedGroup2 = [...group2, ...group2];

  return (
    <HeroSection>
      <ContentWrapper>
        <TextContent>
          <Greeting>こんにちは、ディーンです！</Greeting>
          <MainHeading>Hi, I'm Dean!</MainHeading>
          <SubText>
            ...and I am an app and frontend web developer! I hope you enjoy having a look through my projects and finding out a little more about who I am.
            <br />
            よろしくお願いします！
          </SubText>
        </TextContent>
        <ImageWrapper>
          <ProfileImage src={shikoku} alt="Dean in Shirotori, Shikoku" />
        </ImageWrapper>
      </ContentWrapper>
      <AnimationSection>
        <ScrollTrack $direction="forward">
          <StyledTechStack technologies={repeatedGroup1} noWrap large />
          <StyledTechStack technologies={repeatedGroup1} noWrap large />
        </ScrollTrack>
        <ScrollTrack $direction="backward">
          <StyledTechStack technologies={repeatedGroup2} noWrap large />
          <StyledTechStack technologies={repeatedGroup2} noWrap large />
        </ScrollTrack>
      </AnimationSection>
    </HeroSection>
  );
};

export default Home;
