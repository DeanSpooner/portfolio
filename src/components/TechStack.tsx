import styled from "styled-components";
import { theme } from "../theme";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: ${theme.spacing.md};
`;

const Tag = styled.span`
  display: inline-block;
  background-color: var(--tag-bg);
  color: #ffffff;
  padding: 4px 12px;
  border-radius: ${theme.borderRadius.full};
  font-size: 0.85rem;
  white-space: nowrap;
`;

interface TechStackProps {
  technologies: string[];
  className?: string;
}

const TechStack = ({ technologies, className }: TechStackProps) => {
  return (
    <Container className={className}>
      {technologies.map((tech) => (
        <Tag key={tech}>{tech}</Tag>
      ))}
    </Container>
  );
};

export default TechStack;
