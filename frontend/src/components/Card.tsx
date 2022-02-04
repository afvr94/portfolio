import styled from 'styled-components';
import { Project } from '../types';
import { Github } from './svgs';

type Props = {
  project: Project;
};

const Box = styled.div`
  width: 25rem;
  height: 40vh;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  padding: 1.5rem 2rem;
  margin: 2rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.white};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.white};
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Description = styled.p`
  font-size: calc(0.8em + 0.5vw);
  font-family: 'Karla', sans-serif;
  font-weight: 500;
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.black};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.white};
  }
`;

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);
  ${Box}:hover & {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
  }
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  ${Box}:hover & {
    fill: ${(props) => props.theme.white};
  }
`;

const Card = ({ project }: Props) => {
  const { name, url, topics, homepage, description = '' } = project;

  return (
    <Box>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {topics.map((topic) => (
          <Tag key={topic}>#{topic}</Tag>
        ))}
      </Tags>
      <Footer>
        <Link href={homepage} target="_black">
          Visit
        </Link>
        <Git href={url} target="_black">
          <Github width={30} height={30} fill="currentColor" />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
