import styled, { keyframes, ThemeProvider } from 'styled-components';
import { theme } from '../themes';
import { HomeButton, SocialIcons } from '../components';
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
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <HomeButton />
        <SocialIcons theme="dark" />
        <Particle theme="dark" />
        <Spaceman>
          <img src={astronaut} alt="Spaceman" />
        </Spaceman>
        <div style={{ width: '' }}>TEST</div>
      </Container>
    </ThemeProvider>
  );
};

export default About;
