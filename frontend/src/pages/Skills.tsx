import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../themes';
import { Develop } from '../components/svgs';
import { HomeButton, SocialIcons } from '../components';
import Particle from '../components/Particle';

const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Box = styled.div`
  border: 2px solid ${(props) => props.theme.orange};
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.white};
  padding: 2rem;
  width: 30vw;
  height: 50vh;
  z-index: 3;
  line-height: 1.5;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  line-height: 1.5;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.orange};
    border: 2px solid ${(props) => props.theme.white};
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(1em + 1vw);
  & > :first-child {
    margin-right: 1rem;
  }

  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.white};
    }
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.black};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  p {
    margin-left: 2rem;
  }
  ${Box}:hover & {
    & > * {
      color: ${(props) => props.theme.white};
      fill: ${(props) => props.theme.white};
    }
    color: ${(props) => props.theme.white};
  }
`;

const Skills = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <HomeButton />
        <SocialIcons theme="light" />
        <Particle theme="light" />
        <Box>
          <Title>
            <Develop width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
            I love front-end because it enables me to transform a beautiful design into an
            interactive and responsive page.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>HTML, CSS, Javascript, React, Redux, TailwindCSS, etc</p>
          </Description>
        </Box>
        <Box>
          <Title>
            <Develop width={40} height={40} /> Backend Developer
          </Title>
          <Description>
            I value Back-end&apos;s strength in its utility; you can store and query data, connect
            with apis, automate anything, etc.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Python, NodeJS, Django, MongoDB, MySQL, PostgresSQL, etc</p>
          </Description>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Skills;
