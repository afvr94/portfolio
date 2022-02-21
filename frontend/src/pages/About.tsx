import styled, { keyframes, ThemeProvider } from 'styled-components';
import { theme } from '../themes';
import { BigTitle } from '../components';
import Particle from '../components/Particle';
import astronaut from '../assets/images/astronaut.png';

const Container = styled.div`
  background-color: ${(props) => props.theme.black};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
  0% {transform: translateY(-10px)}
  50% {transform: translateY(15px) translateX(15px)}
  100% {transform: translateY(-10px)}
`;

const Spaceman = styled.div`
  position: absolute;
  top: 20%;
  right: 10%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Box = styled.div`
  border: 2px solid ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 12rem;
  overflow: auto;
  p {
    position: relative;
    font-family: 'Ubuntu Mono', monospace;
    font-style: italic;
  }
  & > p:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Particle theme="dark" />
        <Spaceman>
          <img src={astronaut} alt="Spaceman" />
        </Spaceman>
        <Box>
          <p>
            I&apos;m a fullstack engineer and I graduated from the University of Puerto Rico in
            Mayagüez with a degree in Computer Engineer. I love to create projects that makes an
            impact to society.
          </p>
          <p>
            I&apos;m interested in the whole frontend stack like React + Redux, etc. To build
            amazing projects and bring designs to life. Also, I&apos;m interested in the Python +
            NodeJS stacks for the backend.
          </p>
          <p>
            I&apos;m a fitness freak, I like to weight lift and do cycling. I love to explore and
            learn new topics in engineering.
          </p>
        </Box>
        <BigTitle text="About" left="5%" top="8%" />
      </Container>
    </ThemeProvider>
  );
};

export default About;
