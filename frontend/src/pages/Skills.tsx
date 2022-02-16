import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../themes';
import { Develop } from '../components/svgs';
import { BigTitle, HomeButton, SocialIcons, LogoComponent } from '../components';
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
  @media screen and (max-width: 640px) {
    flex-direction: column;
    overflow: auto;
    justify-content: space-between;
    .first-box {
      margin-top: 5rem;
    }
    .second-box {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
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
  @media screen and (max-width: 640px) {
    align-items: center;
    justify-self: center;
    height: 100%;
    width: 50%;
    z-index: 10;
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
        <LogoComponent themeType="light" />
        <HomeButton />
        <SocialIcons theme="light" />
        <Particle theme="light" />
        <Box className="first-box">
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
        <Box className="second-box">
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
        <BigTitle text="Skills" right="30%" top="80%" />
      </Container>
    </ThemeProvider>
  );
};

export default Skills;
