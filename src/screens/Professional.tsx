import { useState } from 'react';
import Header from '../components/Header';
import {
  ChevronIcon,
  TableContainer,
  TableHeader,
  TableLi,
  TableOuterContainer,
  TableRoleContainer,
  TableSection,
  TableTechStackContainer,
  TableText,
  TableUl,
} from '../components/Table';
import Text from '../components/Text';
import Chevron from '../assets/chevron.svg';

const Professional = () => {
  const [pane, setPane] = useState('');
  return (
    <>
      <Header text={'Professional Experience'} />
      <Text>
        Below are some of my most recent jobs in software development and
        teaching. <br /> Please click a heading to expand its details:
      </Text>
      <TableSection>
        <TableHeader
          onClick={() => setPane(pane === 'wre' ? '' : 'wre')}
          isSelected={pane === 'wre'}
        >
          Senior App and Frontend Web Developer - White Rose Education
          <ChevronIcon src={Chevron} isSelected={pane === 'wre'} />
        </TableHeader>
        <TableOuterContainer isOpen={pane === 'wre'}>
          <TableText>
            November 2022 - Present
            <br />
            (Midーlevel - November 2022 - August 2025, Senior - September 2025 -
            present)
          </TableText>
          <TableContainer>
            <TableTechStackContainer>
              <TableText>Tech Stack:</TableText>
              <TableUl>
                <TableLi>TypeScript;</TableLi>
                <TableLi>Python;</TableLi>
                <TableLi>React;</TableLi>
                <TableLi>React Native;</TableLi>
                <TableLi>Next;</TableLi>
                <TableLi>Expo;</TableLi>
                <TableLi>Zustand;</TableLi>
                <TableLi>i18n Internationalization;</TableLi>
                <TableLi>Jest;</TableLi>
                <TableLi>Cypress;</TableLi>
                <TableLi>Storybook;</TableLi>
                <TableLi>iOS XCode;</TableLi>
                <TableLi>Android Studio;</TableLi>
                <TableLi>AWS (S3 and CloudFront);</TableLi>
                <TableLi>Bitbucket.</TableLi>
              </TableUl>
            </TableTechStackContainer>
            <TableRoleContainer>
              <TableText>Job role and duties:</TableText>
              <TableUl>
                <TableLi>
                  Lead developer on
                  <a
                    target='_blank'
                    href='https://whiteroseeducation.com/infinity'
                  >
                    Infinity
                  </a>
                  , a new, large-scale educational app rolled out in schools
                  throughout the United Kingdom in June 2024 - to date, we have
                  achieved over a quarter of a million downloads, and over 15
                  million questions answered through Infinity. I collaborate
                  with other developers and architects, both app and web-based,
                  as well as business leaders, product owners, educational
                  specialists, UI/UX designers, and external design agencies, to
                  build, enhance and maintain Infinity;
                </TableLi>
                <TableLi>
                  As the lead developer, I am responsible for the deployment of
                  the Infinity app through our testing and production release
                  pipelines, via Expo, Apple and Google Play Stores, as well as
                  any and all necessary package and security updates to Expo,
                  React, React Native, Next, and other associated packages;
                </TableLi>
                <TableLi>
                  Creating new components to enhance school pupils'
                  understanding and learning of mathematics;
                </TableLi>
                <TableLi>
                  Using TypeScript and Zustand to create new mathematical
                  question generators, adhering to strict mathematical
                  boundaries and conditions;
                </TableLi>
                <TableLi>
                  Creation of new teacher-based features, such as quiz and class
                  statistics, on the website, using Next, Chart.js, Storybook,
                  Jest and Cypress;
                </TableLi>
                <TableLi>
                  Creation of Python scripts to automate repetitive tasks and
                  processes;
                </TableLi>
                <TableLi>
                  Performing code reviews on PRs submitted by other developers;
                </TableLi>
                <TableLi>
                  Mentoring other developers in their roles and
                  responsibilities, and supporting them in their development
                  work in paired-programming sessions.
                </TableLi>
                <TableLi>
                  Participation in and leading meetings, standups, company-wide
                  presentations and technical demonstrations.
                </TableLi>
              </TableUl>
            </TableRoleContainer>
          </TableContainer>
        </TableOuterContainer>
      </TableSection>
      <TableSection>
        <TableHeader
          onClick={() => setPane(pane === 'dept' ? '' : 'dept')}
          isSelected={pane === 'dept'}
          evenRow
        >
          Frontend Developer - DEPT UK
          <ChevronIcon src={Chevron} isSelected={pane === 'dept'} />
        </TableHeader>
        <TableOuterContainer isOpen={pane === 'dept'}>
          <TableText>November 2021 - November 2022</TableText>
          <TableContainer>
            <TableTechStackContainer>
              <TableText>Tech Stack:</TableText>
              <TableUl>
                <TableLi>HTML;</TableLi>
                <TableLi>CSS, SCSS/Sass, Styled Components;</TableLi>
                <TableLi>JavaScript/TypeScript;</TableLi>
                <TableLi>React;</TableLi>
                <TableLi>Next.js;</TableLi>
                <TableLi>Jest, React Testing Library, Percy;</TableLi>
                <TableLi>Headless CMSs such as Strapi and Contentful;</TableLi>
                <TableLi>Node.js and NPM;</TableLi>
                <TableLi>Docker;</TableLi>
                <TableLi>Bitbucket, Azure, Octopus Deployments.</TableLi>
              </TableUl>
            </TableTechStackContainer>
            <TableRoleContainer>
              <TableText>Job role and duties:</TableText>
              <TableUl>
                <TableLi>
                  Collaborating with other frontend and backend developers and
                  architects, clients, product owners, UI/UX designers to build
                  and maintain various large websites and web apps for clients;
                </TableLi>
                <TableLi>
                  Creating new frontend features, tests and bug-fixes on large
                  projects for clients, using tooling and frameworks such as
                  React, Next.js, TypeScript, Storybook and Jest;
                </TableLi>
                <TableLi>
                  Utilising headless CMS systems, such as Strapi, to build up
                  backend API services;
                </TableLi>
                <TableLi>
                  Creating builds and deployments on TeamCity, Octopus Deploy
                  and Azure Pipelines for various client projects;
                </TableLi>
                <TableLi>
                  Triaging, estimating and investigating tickets on Jira;
                </TableLi>
                <TableLi>
                  Providing non-development support and documentation for
                  clients;
                </TableLi>
                <TableLi>
                  Performing code reviews on the PRs of other developers;
                </TableLi>
                <TableLi>
                  Mentoring new, junior developers in their roles and
                  responsibilities, and supporting them in their development
                  work in paired-programming sessions.
                </TableLi>
              </TableUl>
            </TableRoleContainer>
          </TableContainer>
        </TableOuterContainer>
      </TableSection>
      <TableSection>
        <TableHeader
          onClick={() => setPane(pane === 'tm' ? '' : 'tm')}
          isSelected={pane === 'tm'}
        >
          Foundation Software Developer - Thinkmoney
          <ChevronIcon src={Chevron} isSelected={pane === 'tm'} />
        </TableHeader>
        <TableOuterContainer isOpen={pane === 'tm'}>
          <TableText>September 2021 - November 2021</TableText>
          <TableContainer>
            <TableTechStackContainer>
              <TableText>Tech Stack:</TableText>
              <TableUl>
                <TableLi>HTML;</TableLi>
                <TableLi>CSS, SCSS/Sass;</TableLi>
                <TableLi>JavaScript;</TableLi>
                <TableLi>A/B Testing;</TableLi>
                <TableLi>OutSystems.</TableLi>
              </TableUl>
            </TableTechStackContainer>
            <TableRoleContainer>
              <TableText>Job role and duties:</TableText>
              <TableUl>
                <TableLi>
                  Collaborating with other software developers and architects,
                  product owners, UI/UX designers to maintain services on the
                  Thinkmoney website and app;
                </TableLi>
                <TableLi>
                  Studied and used OutSystems to build new app and website
                  features, as well as maintain and refactor exists features;
                </TableLi>
                <TableLi>
                  Implemented A/B testing to test new variations of components,
                  to track improved user engagement and interactions;
                </TableLi>
                <TableLi>
                  Worked in an Agile environment with many business stakeholders
                  to ensure swift, timely releases were met.
                </TableLi>
              </TableUl>
            </TableRoleContainer>
          </TableContainer>
        </TableOuterContainer>
      </TableSection>
      <TableSection>
        <TableHeader
          onClick={() => setPane(pane === 'teaching' ? '' : 'teaching')}
          isSelected={pane === 'teaching'}
          evenRow
        >
          Various Teaching Positions - UK
          <ChevronIcon src={Chevron} isSelected={pane === 'teaching'} />
        </TableHeader>
        <TableOuterContainer isOpen={pane === 'teaching'}>
          <TableText>September 2013 - August 2021</TableText>
          <TableContainer>
            <TableRoleContainer>
              <TableText>Job role and duties:</TableText>
              <TableUl>
                <TableLi>
                  Taught in various primary schools across Manchester and
                  Newcastle-upon-Tyne, UK, across all year groups;
                </TableLi>
                <TableLi>
                  Responsible for the planning, teaching and assessment of the
                  entire curriculum and all subjects for my classes;
                </TableLi>
                <TableLi>
                  Collaborated with other teachers and school professionals to
                  ensure educational provision was always to a high-standard,
                  with the needs of pupils and parents always met;
                </TableLi>
                <TableLi>
                  Communicated regularly with school stakeholders, governors,
                  parents, external pedagogical and healthcare professionals on
                  a wide variety of topics and issues;
                </TableLi>
                <TableLi>
                  Assessed classes for a variety of national assessments for
                  various year gruops, such as Phonics testing in Year 1, Key
                  Stage 1 SATs in Year 2, and Key Stage 2 SATs in Year 6;
                </TableLi>
                <TableLi>
                  Both participated in and delivered training on a wide variety
                  of teaching topics, such as mathematical training and
                  safeguarding training, to ensure the training and awareness of
                  safeguarding of myself and my colleagues were always
                  up-to-date.
                </TableLi>
              </TableUl>
            </TableRoleContainer>
          </TableContainer>
        </TableOuterContainer>
      </TableSection>
    </>
  );
};

export default Professional;
