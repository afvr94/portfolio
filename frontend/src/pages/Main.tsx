import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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
  z-index: 1;
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
  z-index: 1;
`;

const DarkDiv = styled(motion.div)`
  position: absolute;
  top: 0;
  // TODO: ADD TO THEME
  background-color: #e48826;
  bottom: 0;
  right: 50%;
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <TopBar>
          <Contact target="_blank" href={`mailto:${SocialUrl.EMAIL}`}>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Say hi..
            </motion.h2>
          </Contact>
          <TopBarLink to={PageUrl.SKILLS}>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Skills
            </motion.h2>
          </TopBarLink>
          <TopBarLink to={PageUrl.HOBBY}>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Hobbies
            </motion.h2>
          </TopBarLink>
          <TopBarLink to={PageUrl.WORK}>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Work
            </motion.h2>
          </TopBarLink>
          <TopBarLink to={PageUrl.ABOUT}>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About
            </motion.h2>
          </TopBarLink>
        </TopBar>
        <SocialIcons />
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
      </Container>
      <Intro />
    </MainContainer>
  );
};

export default Main;
