import styled from "styled-components";
import { theme } from "../theme";
import shikoku from "../assets/images/shikoku.png";

const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.lg};
  background: radial-gradient(circle at 50% 50%, #2a2a2a 0%, #0a0a0a 100%);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: ${theme.spacing.md};
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
    gap: ${theme.spacing.lg};
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
  margin-bottom: ${theme.spacing.xs};
`;

const MainHeading = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  background: linear-gradient(135deg, ${theme.colors.text.primary} 0%, ${theme.colors.text.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${theme.spacing.md};
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const SubText = styled.p`
  color: ${theme.colors.text.primary};
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: ${theme.spacing.lg};
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

const Home = () => {
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
    </HeroSection>
  );
};

export default Home;
