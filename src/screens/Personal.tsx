import { useState } from "react";
import Header from "../components/Header";
import {
  TableSection,
  TableHeader,
  ChevronIcon,
  TableOuterContainer,
  TableText,
  TableContainer,
  TableTechStackContainer,
  TableUl,
  TableLi,
  TableRoleContainer,
} from "../components/Table";
import Text from "../components/Text";
import Chevron from "../assets/chevron.svg";

const Personal = () => {
  const [pane, setPane] = useState<string>("");
  return (
    <>
      <Header text={"Personal Projects"} />
      <Text>
        Below is a selection of some personal projects from my GitHub
        repositories. <br /> Please click a heading to expand its details:
      </Text>
      <TableSection>
        <TableHeader
          onClick={() => setPane(pane === "metro-joho" ? "" : "metro-joho")}
          isSelected={pane === "metro-joho"}
        >
          Tokyo Metro Information - Full Stack
          <ChevronIcon src={Chevron} isSelected={pane === "metro-joho"} />
        </TableHeader>
        {pane === "metro-joho" && (
          <TableOuterContainer>
            <TableText>Currently being built (June 2025 - Present)</TableText>
            <TableContainer>
              <TableTechStackContainer>
                <TableText>Tech Stack:</TableText>
                <TableUl>
                  <TableLi>HTML;</TableLi>
                  <TableLi>TypeScript;</TableLi>
                  <TableLi>React;</TableLi>
                  <TableLi>Next.js;</TableLi>
                  <TableLi>Tailwind;</TableLi>
                  <TableLi>External APIs.</TableLi>
                </TableUl>
              </TableTechStackContainer>
              <TableRoleContainer>
                <TableText>Description:</TableText>
                <TableUl>
                  <TableLi>
                    Using data provided by the{" "}
                    <a target="_blank" href="https://www.odpt.org/">
                      Public Transportation Open Data Center
                      公共交通オープンデータセンター
                    </a>
                    , this project aims to provide information about every line
                    and every station on the Tokyo Metro, including timetables
                    and routes;
                  </TableLi>
                  <TableLi>
                    <a
                      href="https://github.com/DeanSpooner/metro-joho"
                      target="_blank"
                    >
                      GitHub repo available here
                    </a>
                    .
                  </TableLi>
                </TableUl>
              </TableRoleContainer>
            </TableContainer>
          </TableOuterContainer>
        )}
      </TableSection>
      <TableSection>
        <TableHeader
          onClick={() => setPane(pane === "pokedex" ? "" : "pokedex")}
          isSelected={pane === "pokedex"}
        >
          Next.js Pokédex - Frontend
          <ChevronIcon src={Chevron} isSelected={pane === "pokedex"} />
        </TableHeader>
        {pane === "pokedex" && (
          <TableOuterContainer>
            <TableText>Built August 2022</TableText>
            <TableContainer>
              <TableTechStackContainer>
                <TableText>Tech Stack:</TableText>
                <TableUl>
                  <TableLi>HTML;</TableLi>
                  <TableLi>CSS;</TableLi>
                  <TableLi>TypeScript;</TableLi>
                  <TableLi>Next.js;</TableLi>
                  <TableLi>Storybook;</TableLi>
                  <TableLi>Styled Components;</TableLi>
                  <TableLi>NPM;</TableLi>
                  <TableLi>Axios;</TableLi>
                  <TableLi>Jest;</TableLi>
                  <TableLi>React Testing Library;</TableLi>
                  <TableLi>External APIs.</TableLi>
                </TableUl>
              </TableTechStackContainer>
              <TableRoleContainer>
                <TableText>Description:</TableText>
                <TableUl>
                  <TableLi>
                    A Pokémon information portal, demonstrating examples of
                    static-site generated (SSG) and server-side rendered (SSR)
                    pages. Built in TypeScript using Next.js and React, as part
                    of my successful review for promotion to Mid-Level Frontend
                    Developer at DEPT, built in my free time over the space of a
                    week;
                  </TableLi>
                  <TableLi>
                    <a
                      href="https://github.com/DeanSpooner/pokedex"
                      target="_blank"
                    >
                      GitHub repo available here
                    </a>
                    .
                  </TableLi>
                </TableUl>
              </TableRoleContainer>
            </TableContainer>
          </TableOuterContainer>
        )}
      </TableSection>
      <TableSection>
        <TableHeader
          onClick={() => setPane(pane === "ukana" ? "" : "ukana")}
          isSelected={pane === "ukana"}
        >
          Ukana Japanese Language Learning App - Full Stack
          <ChevronIcon src={Chevron} isSelected={pane === "ukana"} />
        </TableHeader>
        {pane === "ukana" && (
          <TableOuterContainer>
            <TableText>Built October-November 2021</TableText>
            <TableContainer>
              <TableTechStackContainer>
                <TableText>Tech Stack:</TableText>
                <TableUl>
                  <TableLi>HTML;</TableLi>
                  <TableLi>CSS;</TableLi>
                  <TableLi>JavaScript;</TableLi>
                  <TableLi>React;</TableLi>
                  <TableLi>Axios;</TableLi>
                  <TableLi>MySQL;</TableLi>
                  <TableLi>Docker;</TableLi>
                  <TableLi>Express;</TableLi>
                  <TableLi>Heroku;</TableLi>
                  <TableLi>APIs.</TableLi>
                </TableUl>
              </TableTechStackContainer>
              <TableRoleContainer>
                <TableText>Description:</TableText>
                <TableUl>
                  <TableLi>
                    A React web app for learners of Japanese. Hiragana, Katakana
                    and Kanji are all available to learn, as well as a search
                    engine implemented for the user to search for specific
                    words. Backend login/admin system created and set up, ready
                    to add in customised grammar lessons;
                  </TableLi>
                  <TableLi>
                    <a
                      href="https://github.com/DeanSpooner/ukana"
                      target="_blank"
                    >
                      GitHub repo available here
                    </a>
                    ;
                  </TableLi>
                  <TableLi>
                    <a
                      href="https://deanspooner.github.io/ukana"
                      target="_blank"
                    >
                      Live page available here
                    </a>
                    .
                  </TableLi>
                </TableUl>
              </TableRoleContainer>
            </TableContainer>
          </TableOuterContainer>
        )}
      </TableSection>
      <TableSection>
        <TableHeader
          onClick={() => setPane(pane === "cooldinners" ? "" : "cooldinners")}
          isSelected={pane === "cooldinners"}
        >
          Cool Dinners - Final Bootcamp Project - Full Stack
          <ChevronIcon src={Chevron} isSelected={pane === "cooldinners"} />
        </TableHeader>
        {pane === "cooldinners" && (
          <TableOuterContainer>
            <TableText>Built July-September 2021</TableText>
            <TableContainer>
              <TableTechStackContainer>
                <TableText>Tech Stack:</TableText>
                <TableUl>
                  <TableLi>HTML;</TableLi>
                  <TableLi>CSS;</TableLi>
                  <TableLi>JavaScript;</TableLi>
                  <TableLi>React;</TableLi>
                  <TableLi>Node.js;</TableLi>
                  <TableLi>Moment.js;</TableLi>
                  <TableLi>Axios;</TableLi>
                  <TableLi>MySQL;</TableLi>
                  <TableLi>Docker;</TableLi>
                  <TableLi>Express;</TableLi>
                  <TableLi>Heroku;</TableLi>
                  <TableLi>Jest;</TableLi>
                  <TableLi>APIs.</TableLi>
                </TableUl>
              </TableTechStackContainer>
              <TableRoleContainer>
                <TableText>Description:</TableText>
                <TableUl>
                  <TableLi>
                    A React web app that allows school staff to create and edit
                    food orders for their students. Created as a final paired
                    project with my friend and coursemate Matt Holmes;
                  </TableLi>
                  <TableLi>
                    <a
                      href="https://github.com/MattHolmes2909/Cool-Dinners-Frontend"
                      target="_blank"
                    >
                      GitHub repo available here
                    </a>
                    ;
                  </TableLi>
                  <TableLi>
                    <a
                      href="https://www.youtube.com/watch?v=cEsCZTyqzLY"
                      target="_blank"
                    >
                      Video demo and presentation available here
                    </a>
                    .
                  </TableLi>
                </TableUl>
              </TableRoleContainer>
            </TableContainer>
          </TableOuterContainer>
        )}
      </TableSection>
      <TableSection>
        <TableHeader
          onClick={() => setPane(pane === "surreal" ? "" : "surreal")}
          isSelected={pane === "surreal"}
        >
          Surreal Estate Properties - Frontend
          <ChevronIcon src={Chevron} isSelected={pane === "surreal"} />
        </TableHeader>
        {pane === "surreal" && (
          <TableOuterContainer>
            <TableText>Built June-August 2021</TableText>
            <TableContainer>
              <TableTechStackContainer>
                <TableText>Tech Stack:</TableText>
                <TableUl>
                  <TableLi>HTML;</TableLi>
                  <TableLi>CSS;</TableLi>
                  <TableLi>JavaScript;</TableLi>
                  <TableLi>React;</TableLi>
                  <TableLi>Facebook Developer Tools;</TableLi>
                  <TableLi>Axios;</TableLi>
                  <TableLi>Jest;</TableLi>
                  <TableLi>External APIs.</TableLi>
                </TableUl>
              </TableTechStackContainer>
              <TableRoleContainer>
                <TableText>Description:</TableText>
                <TableUl>
                  <TableLi>
                    A React web app that allows users to browse and search
                    through different properties linked to an external API;
                  </TableLi>
                  <TableLi>
                    <a
                      href="https://github.com/DeanSpooner/surreal-estate"
                      target="_blank"
                    >
                      GitHub repo available here
                    </a>
                    .
                  </TableLi>
                </TableUl>
              </TableRoleContainer>
            </TableContainer>
          </TableOuterContainer>
        )}
      </TableSection>
      <TableSection>
        <TableHeader
          onClick={() => setPane(pane === "nasa" ? "" : "nasa")}
          isSelected={pane === "nasa"}
        >
          NASA Image Search Engine - Frontend
          <ChevronIcon src={Chevron} isSelected={pane === "nasa"} />
        </TableHeader>
        {pane === "nasa" && (
          <TableOuterContainer>
            <TableText>Built June-August 2021</TableText>
            <TableContainer>
              <TableTechStackContainer>
                <TableText>Tech Stack:</TableText>
                <TableUl>
                  <TableLi>HTML;</TableLi>
                  <TableLi>CSS;</TableLi>
                  <TableLi>JavaScript;</TableLi>
                  <TableLi>React;</TableLi>
                  <TableLi>Axios;</TableLi>
                  <TableLi>Jest;</TableLi>
                  <TableLi>External APIs.</TableLi>
                </TableUl>
              </TableTechStackContainer>
              <TableRoleContainer>
                <TableText>Description:</TableText>
                <TableUl>
                  <TableLi>
                    An image search engine that takes in a search term from a
                    user, and returns images from a NASA API endpoint;
                  </TableLi>
                  <TableLi>
                    <a
                      href="https://github.com/DeanSpooner/nasa-search-engine"
                      target="_blank"
                    >
                      GitHub repo available here
                    </a>
                    ;
                  </TableLi>
                  <TableLi>
                    <a
                      href="https://deanspooner.github.io/nasa-search-engine/"
                      target="_blank"
                    >
                      Live page available here
                    </a>
                    .
                  </TableLi>
                </TableUl>
              </TableRoleContainer>
            </TableContainer>
          </TableOuterContainer>
        )}
      </TableSection>
      <TableSection>
        <TableHeader
          onClick={() => setPane(pane === "weather" ? "" : "weather")}
          isSelected={pane === "weather"}
        >
          UK Weather Forecast App - Frontend
          <ChevronIcon src={Chevron} isSelected={pane === "weather"} />
        </TableHeader>
        {pane === "weather" && (
          <TableOuterContainer>
            <TableText>Built June-July 2021</TableText>
            <TableContainer>
              <TableTechStackContainer>
                <TableText>Tech Stack:</TableText>
                <TableUl>
                  <TableLi>HTML;</TableLi>
                  <TableLi>CSS;</TableLi>
                  <TableLi>JavaScript;</TableLi>
                  <TableLi>React;</TableLi>
                  <TableLi>Axios;</TableLi>
                  <TableLi>Jest;</TableLi>
                  <TableLi>External APIs.</TableLi>
                </TableUl>
              </TableTechStackContainer>
              <TableRoleContainer>
                <TableText>Description:</TableText>
                <TableUl>
                  <TableLi>
                    A real, working weather app that takes a UK location and
                    returns the forecast for the next five days. Allows the user
                    to see extra details for a particular day;
                  </TableLi>
                  <TableLi>
                    <a
                      href="https://github.com/DeanSpooner/weather-app"
                      target="_blank"
                    >
                      GitHub repo available here
                    </a>
                    .
                  </TableLi>
                </TableUl>
              </TableRoleContainer>
            </TableContainer>
          </TableOuterContainer>
        )}
      </TableSection>
      <TableSection>
        <TableHeader
          onClick={() => setPane(pane === "book" ? "" : "book")}
          isSelected={pane === "book"}
        >
          Book Library - Backend
          <ChevronIcon src={Chevron} isSelected={pane === "book"} />
        </TableHeader>
        {pane === "book" && (
          <TableOuterContainer>
            <TableText>Built May 2021</TableText>
            <TableContainer>
              <TableTechStackContainer>
                <TableText>Tech Stack:</TableText>
                <TableUl>
                  <TableLi>Node.js;</TableLi>
                  <TableLi>MySQL;</TableLi>
                  <TableLi>APIs;</TableLi>
                  <TableLi>Sequelize;</TableLi>
                  <TableLi>Express;</TableLi>
                  <TableLi>Mocha;</TableLi>
                  <TableLi>Chai;</TableLi>
                  <TableLi>Heroku;</TableLi>
                  <TableLi>Swagger.</TableLi>
                </TableUl>
              </TableTechStackContainer>
              <TableRoleContainer>
                <TableText>Description:</TableText>
                <TableUl>
                  <TableLi>
                    A backend book library. Takes CRUD requests on readers,
                    books, authors and genres. Makes use of foreign keys to
                    apply genres/authors to books, let readers borrow books and
                    so on. Swagger applied as a frontend UI for users to use
                    easily;
                  </TableLi>
                  <TableLi>
                    <a
                      href="https://github.com/DeanSpooner/book-library"
                      target="_blank"
                    >
                      GitHub repo available here
                    </a>
                    .
                  </TableLi>
                </TableUl>
              </TableRoleContainer>
            </TableContainer>
          </TableOuterContainer>
        )}
      </TableSection>
      <TableSection>
        <TableHeader
          onClick={() => setPane(pane === "music" ? "" : "music")}
          isSelected={pane === "music"}
        >
          Music Library - Backend
          <ChevronIcon src={Chevron} isSelected={pane === "music"} />
        </TableHeader>
        {pane === "music" && (
          <TableOuterContainer>
            <TableText>Built May 2021</TableText>
            <TableContainer>
              <TableTechStackContainer>
                <TableText>Tech Stack:</TableText>
                <TableUl>
                  <TableLi>Node.js;</TableLi>
                  <TableLi>MySQL;</TableLi>
                  <TableLi>APIs;</TableLi>
                  <TableLi>Express;</TableLi>
                  <TableLi>Mocha;</TableLi>
                  <TableLi>Chai;</TableLi>
                  <TableLi>Heroku.</TableLi>
                </TableUl>
              </TableTechStackContainer>
              <TableRoleContainer>
                <TableText>Description:</TableText>
                <TableUl>
                  <TableLi>
                    A backend music library. Allows the use of a third-party
                    application such as Postman to make CRUD requests, such as
                    reading/adding/editing/deleting artists, albums or songs;
                  </TableLi>
                  <TableLi>
                    <a
                      href="https://github.com/DeanSpooner/music-library"
                      target="_blank"
                    >
                      GitHub repo available here
                    </a>
                    .
                  </TableLi>
                </TableUl>
              </TableRoleContainer>
            </TableContainer>
          </TableOuterContainer>
        )}
      </TableSection>
      <TableSection>
        <TableHeader
          onClick={() => setPane(pane === "tozai" ? "" : "tozai")}
          isSelected={pane === "tozai"}
          style={{ paddingBottom: "16px" }}
        >
          Tokyo Metro Tozai Simulator - Frontend
          <ChevronIcon src={Chevron} isSelected={pane === "tozai"} />
        </TableHeader>
        {pane === "tozai" && (
          <TableOuterContainer>
            <TableText>Built April 2021</TableText>
            <TableContainer>
              <TableTechStackContainer>
                <TableText>Tech Stack:</TableText>
                <TableUl>
                  <TableLi>HTML;</TableLi>
                  <TableLi>CSS;</TableLi>
                  <TableLi>JavaScript;</TableLi>
                  <TableLi>Jest.</TableLi>
                </TableUl>
              </TableTechStackContainer>
              <TableRoleContainer>
                <TableText>Description:</TableText>
                <TableUl>
                  <TableLi>
                    A simulator based on the Tozai line of the Tokyo Metro. An
                    enhancement of my previous Cruise Ship Sim project built
                    during my bootcamp;
                  </TableLi>
                  <TableLi>
                    <a
                      href="https://github.com/DeanSpooner/tozai"
                      target="_blank"
                    >
                      GitHub repo available here
                    </a>
                    ;
                  </TableLi>
                  <TableLi>
                    <a
                      href="https://deanspooner.github.io/tozai/"
                      target="_blank"
                    >
                      Live page available here
                    </a>
                    .
                  </TableLi>
                </TableUl>
              </TableRoleContainer>
            </TableContainer>
          </TableOuterContainer>
        )}
      </TableSection>
    </>
  );
};

export default Personal;
