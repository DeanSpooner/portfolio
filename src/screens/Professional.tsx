import { useState } from "react";
import styled from "styled-components";
import { theme } from "../theme";
import Chevron from "../assets/chevron.svg";
import TechStack from "../components/TechStack";

const Section = styled.section`
  padding: ${theme.spacing.lg} ${theme.spacing.lg};
  max-width: 1000px;
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

const Description = styled.p`
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.body.fontSize};
`;

const ExperienceCard = styled.div<{ isOpen: boolean }>`
  background-color: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing.md};
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid transparent; 

  ${({ isOpen }) =>
    isOpen &&
    `
    border-color: ${theme.colors.primary};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  `}

  &:hover {
    border-color: ${theme.colors.primary};
  }
`;

const CardHeader = styled.div`
  padding: ${theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: var(--card-header-bg);
  border-bottom: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--card-header-hover-bg);
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const RoleTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin: 0;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const HeaderDate = styled.span`
  font-size: 0.9rem;
  color: ${theme.colors.text.primary}; 
  font-style: italic;
  opacity: 0.9;
`;

const ChevronIcon = styled.img<{ isOpen: boolean }>`
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(0deg)")};
  filter: var(--icon-filter);
  opacity: 1;
`;

const CardContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "2000px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  padding: ${({ isOpen }) => (isOpen ? theme.spacing.md : "0 " + theme.spacing.md)};
`;

const SectionTitle = styled.h4`
  color: ${theme.colors.primary};
  font-size: 1.1rem;
  margin-bottom: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
  
  &:first-of-type {
    margin-top: 0;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
  padding-left: ${theme.spacing.md};
  position: relative;
  line-height: 1.6;

  &::before {
    content: "•";
    color: ${theme.colors.primary};
    position: absolute;
    left: 0;
    font-weight: bold;
  }

  a {
    color: ${theme.colors.text.accent};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Professional = () => {
  const [openCard, setOpenCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <Section>
      <Title>Professional Experience</Title>
      <Description>
        Below are some of my most recent jobs in software development and teaching.
        <br />
        Please click on a card to expand its details:
      </Description>
      
      <ExperienceCard isOpen={openCard === "wre"}>
        <CardHeader onClick={() => toggleCard("wre")}>
          <HeaderContent>
            <RoleTitle>App and Frontend Web Developer - White Rose Education</RoleTitle>
            <HeaderDate>November 2022 - Present</HeaderDate>
          </HeaderContent>
          <ChevronIcon src={Chevron} isOpen={openCard === "wre"} />
        </CardHeader>
        <CardContent isOpen={openCard === "wre"}>
          <SectionTitle>Tech Stack</SectionTitle>
          <TechStack technologies={["TypeScript", "Python", "React", "React Native", "Next", "Expo", "Zustand", "i18n Internationalization", "Jest", "Cypress", "Storybook", "iOS XCode", "Android Studio", "AWS (S3 and CloudFront)", "Bitbucket"]} />

          <SectionTitle>Job role and duties</SectionTitle>
          <List>
            <ListItem>
              Lead developer on <a target='_blank' href='https://whiteroseeducation.com/infinity'>Infinity</a>, a new, large-scale educational app rolled out in schools throughout the United Kingdom in June 2024 - to date, we have achieved over a quarter of a million downloads, and over 15 million questions answered through Infinity. I collaborate with other developers and architects, both app and web-based, as well as business leaders, product owners, educational specialists, UI/UX designers, and external design agencies, to build, enhance and maintain Infinity;
            </ListItem>
            <ListItem>
              As the lead developer, I am responsible for the deployment of the Infinity app through our testing and production release pipelines, via Expo, Apple and Google Play Stores, as well as any and all necessary package and security updates to Expo, React, React Native, Next, and other associated packages;
            </ListItem>
            <ListItem>Creating new components to enhance school pupils' understanding and learning of mathematics;</ListItem>
            <ListItem>Using TypeScript and Zustand to create new mathematical question generators, adhering to strict mathematical boundaries and conditions;</ListItem>
            <ListItem>Creation of new teacher-based features, such as quiz and class statistics, on the website, using Next, Chart.js, Storybook, Jest and Cypress;</ListItem>
            <ListItem>Creation of Python scripts to automate repetitive tasks and processes;</ListItem>
            <ListItem>Performing code reviews on PRs submitted by other developers;</ListItem>
            <ListItem>Mentoring other developers in their roles and responsibilities, and supporting them in their development work in paired-programming sessions.</ListItem>
            <ListItem>Participation in and leading meetings, standups, company-wide presentations and technical demonstrations.</ListItem>
          </List>
        </CardContent>
      </ExperienceCard>

      <ExperienceCard isOpen={openCard === "dept"}>
        <CardHeader onClick={() => toggleCard("dept")}>
          <HeaderContent>
             <RoleTitle>Frontend Developer - DEPT UK</RoleTitle>
             <HeaderDate>November 2021 - November 2022</HeaderDate>
          </HeaderContent>
          <ChevronIcon src={Chevron} isOpen={openCard === "dept"} />
        </CardHeader>
        <CardContent isOpen={openCard === "dept"}>
          
          <SectionTitle>Tech Stack</SectionTitle>
          <TechStack technologies={["HTML", "CSS", "SCSS/Sass", "Styled Components", "JavaScript/TypeScript", "React", "Next.js", "Jest", "React Testing Library", "Percy", "Headless CMSs (Strapi, Contentful)", "Node.js", "NPM", "Docker", "Bitbucket", "Azure", "Octopus Deployments"]} />

          <SectionTitle>Job role and duties</SectionTitle>
          <List>
            <ListItem>Collaborating with other frontend and backend developers and architects, clients, product owners, UI/UX designers to build and maintain various large websites and web apps for clients;</ListItem>
            <ListItem>Creating new frontend features, tests and bug-fixes on large projects for clients, using tooling and frameworks such as React, Next.js, TypeScript, Storybook and Jest;</ListItem>
            <ListItem>Utilising headless CMS systems, such as Strapi, to build up backend API services;</ListItem>
            <ListItem>Creating builds and deployments on TeamCity, Octopus Deploy and Azure Pipelines for various client projects;</ListItem>
            <ListItem>Triaging, estimating and investigating tickets on Jira;</ListItem>
            <ListItem>Providing non-development support and documentation for clients;</ListItem>
            <ListItem>Performing code reviews on the PRs of other developers;</ListItem>
            <ListItem>Mentoring new, junior developers in their roles and responsibilities, and supporting them in their development work in paired-programming sessions.</ListItem>
          </List>
        </CardContent>
      </ExperienceCard>

      <ExperienceCard isOpen={openCard === "tm"}>
        <CardHeader onClick={() => toggleCard("tm")}>
          <HeaderContent>
             <RoleTitle>Foundation Software Developer - Thinkmoney</RoleTitle>
             <HeaderDate>September 2021 - November 2021</HeaderDate>
          </HeaderContent>
          <ChevronIcon src={Chevron} isOpen={openCard === "tm"} />
        </CardHeader>
        <CardContent isOpen={openCard === "tm"}>
          
          <SectionTitle>Tech Stack</SectionTitle>
          <TechStack technologies={["HTML", "CSS", "SCSS/Sass", "JavaScript", "A/B Testing", "OutSystems"]} />
          
          <SectionTitle>Job role and duties</SectionTitle>
          <List>
             <ListItem>Collaborating with other software developers and architects, product owners, UI/UX designers to maintain services on the Thinkmoney website and app;</ListItem>
             <ListItem>Studied and used OutSystems to build new app and website features, as well as maintain and refactor exists features;</ListItem>
             <ListItem>Implemented A/B testing to test new variations of components, to track improved user engagement and interactions;</ListItem>
             <ListItem>Worked in an Agile environment with many business stakeholders to ensure swift, timely releases were met.</ListItem>
          </List>
        </CardContent>
      </ExperienceCard>

       <ExperienceCard isOpen={openCard === "teaching"}>
        <CardHeader onClick={() => toggleCard("teaching")}>
          <HeaderContent>
            <RoleTitle>Various Teaching Positions - UK</RoleTitle>
            <HeaderDate>September 2013 - August 2021</HeaderDate>
          </HeaderContent>
          <ChevronIcon src={Chevron} isOpen={openCard === "teaching"} />
        </CardHeader>
        <CardContent isOpen={openCard === "teaching"}>
          
          <SectionTitle>Job role and duties</SectionTitle>
          <List>
            <ListItem>Taught in various primary schools across Manchester and Newcastle-upon-Tyne, UK, across all year groups;</ListItem>
            <ListItem>Responsible for the planning, teaching and assessment of the entire curriculum and all subjects for my classes;</ListItem>
            <ListItem>Collaborated with other teachers and school professionals to ensure educational provision was always to a high-standard, with the needs of pupils and parents always met;</ListItem>
            <ListItem>Communicated regularly with school stakeholders, governors, parents, external pedagogical and healthcare professionals on a wide variety of topics and issues;</ListItem>
            <ListItem>Assessed classes for a variety of national assessments for various year gruops, such as Phonics testing in Year 1, Key Stage 1 SATs in Year 2, and Key Stage 2 SATs in Year 6;</ListItem>
            <ListItem>Both participated in and delivered training on a wide variety of teaching topics, such as mathematical training and safeguarding training, to ensure the training and awareness of safeguarding of myself and my colleagues were always up-to-date.</ListItem>
          </List>
        </CardContent>
      </ExperienceCard>

    </Section>
  );
};

export default Professional;
