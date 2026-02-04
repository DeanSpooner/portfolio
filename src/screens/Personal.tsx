import styled from "styled-components";
import { theme } from "../theme";
import TechStack from "../components/TechStack";

const Section = styled.section`
  padding: ${theme.spacing.lg} ${theme.spacing.lg};
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

const IntroText = styled.p`
  text-align: center;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing.md};
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-color: ${theme.colors.primary};
  }
`;

const CardHeader = styled.div`
  padding: ${theme.spacing.md};
  background: var(--card-header-bg);
  border-bottom: none;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xs};
`;

const ProjectSubtitle = styled.p`
  color: ${theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
`;

const CardBody = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: ${theme.spacing.sm};
`;

const Description = styled.div`
  color: ${theme.colors.text.primary};
  line-height: 1.6;
  flex: 1;

  ul {
    padding-left: 1.2rem;
    margin-top: 0.5rem;
  }
  
  li {
    margin-bottom: 0.25rem;
  }
  
  a {
    color: ${theme.colors.text.accent};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
  }
`;

const Personal = () => {
  return (
    <Section>
      <Title>Personal Projects</Title>
      <IntroText>
        Below is a selection of some personal projects from my GitHub repositories.
      </IntroText>

      <ProjectGrid>

        <ProjectCard>
          <CardHeader>
            <ProjectTitle>Tokyo Metro Information</ProjectTitle>
            <ProjectSubtitle>Full Stack (Built June 2025 - Present)</ProjectSubtitle>
          </CardHeader>
          <CardBody>
            <TechStack technologies={["HTML", "TypeScript", "React", "Next.js", "Tailwind", "Vercel", "i18n", "External APIs"]} />
            <Description>
              <ul>
                <li>
                  Using data provided by the <a target="_blank" href="https://www.odpt.org/">Public Transportation Open Data Center 公共交通オープンデータセンター</a>, this project aims to provide information about every line and every station on the Tokyo Metro, including timetables and routes. Full language support for English, Japanese, Chinese (Simplified) and Korean;
                </li>
                <li><a href="https://github.com/DeanSpooner/metro-joho" target="_blank">GitHub repo available here</a>.</li>
                <li><a href="https://metro-joho.vercel.app/" target="_blank">Live page available here</a>.</li>
              </ul>
            </Description>
          </CardBody>
        </ProjectCard>

        <ProjectCard>
          <CardHeader>
            <ProjectTitle>Next.js Pokédex</ProjectTitle>
            <ProjectSubtitle>Frontend (Built August 2022)</ProjectSubtitle>
          </CardHeader>
          <CardBody>
            <TechStack technologies={["HTML", "CSS", "TypeScript", "Next.js", "Storybook", "Styled Components", "NPM", "Axios", "Jest", "React Testing Library", "External APIs"]} />
            <Description>
              <ul>
                <li>A Pokémon information portal, demonstrating examples of static-site generated (SSG) and server-side rendered (SSR) pages. Built in TypeScript using Next.js and React, as part of my successful review for promotion to Mid-Level Frontend Developer at DEPT, built in my free time over the space of a week;</li>
                <li><a href="https://github.com/DeanSpooner/pokedex" target="_blank">GitHub repo available here</a>.</li>
              </ul>
            </Description>
          </CardBody>
        </ProjectCard>

        <ProjectCard>
          <CardHeader>
            <ProjectTitle>Ukana Japanese Language Learning App</ProjectTitle>
            <ProjectSubtitle>Full Stack (Built October - November 2021)</ProjectSubtitle>
          </CardHeader>
          <CardBody>
            <TechStack technologies={["HTML", "CSS", "JavaScript", "React", "Axios", "MySQL", "Docker", "Express", "Heroku", "APIs"]} />
            <Description>
              <ul>
                <li>A React web app for learners of Japanese. Hiragana, Katakana and Kanji are all available to learn, as well as a search engine implemented for the user to search for specific words. Backend login/admin system created and set up, ready to add in customised grammar lessons;</li>
                <li><a href="https://github.com/DeanSpooner/ukana" target="_blank">GitHub repo available here</a>;</li>
                <li><a href="https://deanspooner.github.io/ukana" target="_blank">Live page available here</a>.</li>
              </ul>
            </Description>
          </CardBody>
        </ProjectCard>

        <ProjectCard>
          <CardHeader>
            <ProjectTitle>Cool Dinners</ProjectTitle>
            <ProjectSubtitle>Final Bootcamp Project - Full Stack (Built July - September 2021)</ProjectSubtitle>
          </CardHeader>
          <CardBody>
            <TechStack technologies={["HTML", "CSS", "JavaScript", "React", "Node.js", "Moment.js", "Axios", "MySQL", "Docker", "Express", "Heroku", "Jest", "APIs"]} />
            <Description>
              <ul>
                <li>A React web app that allows school staff to create and edit food orders for their students. Created as a final paired project with my friend and coursemate Matt Holmes;</li>
                <li><a href="https://github.com/MattHolmes2909/Cool-Dinners-Frontend" target="_blank">GitHub repo available here</a>;</li>
                <li><a href="https://www.youtube.com/watch?v=cEsCZTyqzLY" target="_blank">Video demo and presentation available here</a>.</li>
              </ul>
            </Description>
          </CardBody>
        </ProjectCard>

        <ProjectCard>
          <CardHeader>
            <ProjectTitle>Surreal Estate Properties</ProjectTitle>
            <ProjectSubtitle>Frontend (Built June - August 2021)</ProjectSubtitle>
          </CardHeader>
          <CardBody>
            <TechStack technologies={["HTML", "CSS", "JavaScript", "React", "Facebook Developer Tools", "Axios", "Jest", "External APIs"]} />
            <Description>
              <ul>
                <li>A React web app that allows users to browse and search through different properties linked to an external API;</li>
                <li><a href="https://github.com/DeanSpooner/surreal-estate" target="_blank">GitHub repo available here</a>.</li>
              </ul>
            </Description>
          </CardBody>
        </ProjectCard>

        <ProjectCard>
          <CardHeader>
            <ProjectTitle>NASA Image Search Engine</ProjectTitle>
            <ProjectSubtitle>Frontend (Built June - August 2021)</ProjectSubtitle>
          </CardHeader>
          <CardBody>
            <TechStack technologies={["HTML", "CSS", "JavaScript", "React", "Axios", "Jest", "External APIs"]} />
            <Description>
              <ul>
                <li>An image search engine that takes in a search term from a user, and returns images from a NASA API endpoint;</li>
                <li><a href="https://github.com/DeanSpooner/nasa-search-engine" target="_blank">GitHub repo available here</a>;</li>
                <li><a href="https://deanspooner.github.io/nasa-search-engine/" target="_blank">Live page available here</a>.</li>
              </ul>
            </Description>
          </CardBody>
        </ProjectCard>

        <ProjectCard>
          <CardHeader>
            <ProjectTitle>UK Weather Forecast App</ProjectTitle>
            <ProjectSubtitle>Frontend (Built June - July 2021)</ProjectSubtitle>
          </CardHeader>
          <CardBody>
            <TechStack technologies={["HTML", "CSS", "JavaScript", "React", "Axios", "Jest", "External APIs"]} />
            <Description>
              <ul>
                <li>A real, working weather app that takes a UK location and returns the forecast for the next five days. Allows the user to see extra details for a particular day;</li>
                <li><a href="https://github.com/DeanSpooner/weather-app" target="_blank">GitHub repo available here</a>.</li>
              </ul>
            </Description>
          </CardBody>
        </ProjectCard>

        <ProjectCard>
          <CardHeader>
            <ProjectTitle>Book Library</ProjectTitle>
            <ProjectSubtitle>Backend (Built May 2021)</ProjectSubtitle>
          </CardHeader>
          <CardBody>
            <TechStack technologies={["Node.js", "MySQL", "APIs", "Sequelize", "Express", "Mocha", "Chai", "Heroku", "Swagger"]} />
            <Description>
              <ul>
                <li>A backend book library. Takes CRUD requests on readers, books, authors and genres. Makes use of foreign keys to apply genres/authors to books, let readers borrow books and so on. Swagger applied as a frontend UI for users to use easily;</li>
                <li><a href="https://github.com/DeanSpooner/book-library" target="_blank">GitHub repo available here</a>.</li>
              </ul>
            </Description>
          </CardBody>
        </ProjectCard>

        <ProjectCard>
          <CardHeader>
            <ProjectTitle>Music Library</ProjectTitle>
            <ProjectSubtitle>Backend (Built May 2021)</ProjectSubtitle>
          </CardHeader>
          <CardBody>
            <TechStack technologies={["Node.js", "MySQL", "APIs", "Express", "Mocha", "Chai", "Heroku"]} />
            <Description>
              <ul>
                <li>A backend music library. Allows the use of a third-party application such as Postman to make CRUD requests, such as reading/adding/editing/deleting artists, albums or songs;</li>
                <li><a href="https://github.com/DeanSpooner/music-library" target="_blank">GitHub repo available here</a>.</li>
              </ul>
            </Description>
          </CardBody>
        </ProjectCard>

        <ProjectCard>
          <CardHeader>
            <ProjectTitle>Tokyo Metro Tozai Simulator</ProjectTitle>
            <ProjectSubtitle>Frontend (Built April 2021)</ProjectSubtitle>
          </CardHeader>
          <CardBody>
            <TechStack technologies={["HTML", "CSS", "JavaScript", "Jest"]} />
            <Description>
              <ul>
                <li>A simulator based on the Tozai line of the Tokyo Metro. An enhancement of my previous Cruise Ship Sim project built during my bootcamp;</li>
                <li><a href="https://github.com/DeanSpooner/tozai" target="_blank">GitHub repo available here</a>;</li>
                <li><a href="https://deanspooner.github.io/tozai/" target="_blank">Live page available here</a>.</li>
              </ul>
            </Description>
          </CardBody>
        </ProjectCard>

      </ProjectGrid>
    </Section>
  );
};

export default Personal;
