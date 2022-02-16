import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../themes';
import { HomeButton, SocialIcons, Card, BigTitle, LogoComponent } from '../components';
import { getProjects } from '../api';
import { Project } from '../types';

const Container = styled.div`
  background-color: ${(props) => props.theme.black};
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

const LoadingText = styled.h2`
  color: ${(props) => props.theme.white};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  position: relative;
  overflow: hidden;
  margin-top: calc(1rem + 8vw);
  margin-bottom: calc(1rem + 8vw);
  margin-left: calc(1rem + 8vw);
  margin-right: calc(1rem + 2vw);
  display: flex;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: ${(props) => props.theme.white};
`;

// framer config
const animation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

enum State {
  'LOADING' = 0,
  'SUCCESS' = 1,
  'ERROR' = 2,
}

const Work = () => {
  const [state, setState] = useState(State.LOADING);
  const [projects, setProjects] = useState<Project[]>([]);

  const isLoading = state === State.LOADING;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProjects();
        setState(State.SUCCESS);
        setProjects(data);
      } catch {
        setState(State.ERROR);
      }
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <LogoComponent themeType="dark" />
        <HomeButton />
        <SocialIcons theme="dark" />
        {isLoading ? (
          <LoadingText>Loading...</LoadingText>
        ) : (
          <Box variants={animation} initial="hidden" animate="show">
            {projects.map((project) => (
              <Card project={project} key={project.id} />
            ))}
          </Box>
        )}
        <BigTitle text="Work" top="5%" right="20%" />
      </Container>
    </ThemeProvider>
  );
};

export default Work;
