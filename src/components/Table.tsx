import styled from "styled-components";

const TableSection = styled.div``;

const TableOuterContainer = styled.div<{ isOpen: boolean }>`
  background: rgba(64, 64, 64, 0.5);
  overflow: hidden;
  max-height: ${props => (props.isOpen ? "2000px" : "0")};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: max-height 0.5s ease, opacity 0.5s ease;
  padding: ${props => (props.isOpen ? "16px" : "0 16px")};
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 90%;
  @media screen and (max-width: 1084px) {
    flex-direction: column;
  }
`;

const TableTechStackContainer = styled.div`
  width: 33%;
  @media screen and (max-width: 1084px) {
    width: 100%;
  }
`;

const TableRoleContainer = styled.div`
  flex-grow: 1;
`;

const TableHeader = styled.h2<{ isSelected: boolean; evenRow?: boolean }>`
  padding: 16px 0;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 700;
  cursor: pointer;
  background: ${props =>
    props.isSelected
      ? "rgba(64, 64, 64, 0.5)"
      : props.evenRow
      ? "rgba(0, 0, 0, 0.25)"
      : "rgba(0, 0, 0, 0.5)"};
  margin: 0;
`;

const TableText = styled.p`
  margin: 0;
  padding: 8px;
  font-size: x-large;
  text-align: center;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 700;
`;

const TableUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  max-width: 90%;
`;

const TableLi = styled.li`
  font-size: larger;
  font-weight: 500;
  list-style-type: none;
  text-align: start;
  &::before {
    content: "- ";
  }
`;

const ChevronIcon = styled.img<{ isSelected: boolean }>`
  transition: all 0.5s ease 0s;
  -webkit-transition: all 0.5s ease 0s;
  transform: ${props => (props.isSelected ? "rotate(90deg)" : "rotate(0deg)")};
`;

export {
  TableSection,
  TableOuterContainer,
  TableTechStackContainer,
  TableRoleContainer,
  TableContainer,
  TableHeader,
  TableText,
  TableUl,
  TableLi,
  ChevronIcon,
};
