import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageUrl, SocialUrl } from '../constants';

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

const NavigationMenu = () => {
  return (
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
  );
};

export default NavigationMenu;
