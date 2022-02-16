import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MediaQuery from 'react-responsive';
import Intro from '../components/Intro';
import { LogoComponent, SocialIcons } from '../components';
import { PageUrl, SocialUrl } from '../constants';

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h2,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 3;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 10;
  & > * {
    margin: 1rem 0;
  }
`;

const TopBarLink = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 3;
`;

const DarkDiv = styled(motion.div)`
  position: absolute;
  top: 0;
  background-color: ${(props) => props.theme.orange};
  bottom: 0;
  right: 50%;
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
  @media screen and (max-width: 640px) {
    right: 0px;
    transition-duration: 0.5s, 1s;
    transition-timing-function: ease, ease;
    transition-delay: initial, 0.5s;
    transition-property: width, height;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent themeType="light" />
        <TopBar>
          <Contact target="_blank" href={`mailto:${SocialUrl.EMAIL}`}>
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                y: -500,
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1.2 },
              }}
            >
              Say hi..
            </motion.h2>
          </Contact>
          <TopBarLink to={PageUrl.SKILLS}>
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                y: -500,
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1.1 },
              }}
            >
              Skills
            </motion.h2>
          </TopBarLink>
          <TopBarLink to={PageUrl.HOBBIES}>
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                y: -500,
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
            >
              Hobbies
            </motion.h2>
          </TopBarLink>
          <TopBarLink to={PageUrl.WORK}>
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                y: -500,
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 0.9 },
              }}
            >
              Work
            </motion.h2>
          </TopBarLink>
          <TopBarLink to={PageUrl.ABOUT}>
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{
                y: -500,
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 0.8 },
              }}
            >
              About
            </motion.h2>
          </TopBarLink>
        </TopBar>
        <SocialIcons theme="light" />
        <MediaQuery maxWidth={640}>
          <DarkDiv
            initial={{
              width: 0,
              height: 0,
            }}
            animate={{
              width: '100%',
              height: '50%',
            }}
          />
        </MediaQuery>
        <MediaQuery minWidth={641}>
          <DarkDiv
            initial={{
              width: 0,
              height: 0,
            }}
            animate={{
              width: '50%',
              height: '100%',
            }}
          />
        </MediaQuery>
      </Container>
      <Intro />
    </MainContainer>
  );
};

export default Main;
