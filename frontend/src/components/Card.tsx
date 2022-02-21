import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Project } from '../types';
import { Github } from './svgs';

type Props = {
  project: Project;
};

const Box = styled(motion.div)`
  width: 25rem;
  height: 35vh;
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
  z-index: 3;
  min-height: 25rem;
  &:hover {
    transition: all 0.5s ease-in-out;
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

const Git = styled.a`
  color: inherit;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  text-decoration: none;
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  width: 100%;
  display: flex;
  align-items: center;
  ${Box}:hover & {
    fill: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
  }
  p {
    margin-left: 1rem;
  }
`;

// framer config
const animation = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
};

const Card = ({ project }: Props) => {
  const { name, url, topics, description = '' } = project;

  return (
    <Box variants={animation}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {topics.map((topic) => (
          <Tag key={topic}>#{topic}</Tag>
        ))}
      </Tags>
      <Footer>
        <Git href={url} target="_black">
          <Github width={30} height={30} fill="currentColor" />
          <p>Check it out at GitHub</p>
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
