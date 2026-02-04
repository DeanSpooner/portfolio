import styled from "styled-components";
import { theme } from "../theme";

const Container = styled.div<{ $noWrap?: boolean }>`
  display: flex;
  flex-wrap: ${props => props.$noWrap ? 'nowrap' : 'wrap'};
  gap: 8px;
  margin-bottom: ${theme.spacing.md};
`;

const Tag = styled.span<{ $large?: boolean }>`
  display: inline-block;
  background-color: var(--tag-bg);
  color: #ffffff;
  padding: ${props => props.$large ? '8px 20px' : '4px 12px'};
  border-radius: ${theme.borderRadius.full};
  font-size: ${props => props.$large ? '1.1rem' : '0.85rem'};
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: ${props => props.$large ? '6px 14px' : '3px 10px'};
    font-size: ${props => props.$large ? '0.9rem' : '0.75rem'};
  }
`;

interface TechStackProps {
  technologies: string[];
  className?: string;
  noWrap?: boolean;
  large?: boolean;
}

const TechStack = ({ technologies, className, noWrap, large }: TechStackProps) => {
  return (
    <Container className={className} $noWrap={noWrap}>
      {technologies.map((tech) => (
        <Tag key={tech} $large={large}>{tech}</Tag>
      ))}
    </Container>
  );
};

export default TechStack;
