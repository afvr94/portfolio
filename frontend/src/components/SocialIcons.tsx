import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Email, Facebook, Github, LinkedIn } from './svgs';
import { SocialUrl } from '../constants';
import { useShouldBeLightTheme } from '../hooks';

const Icons = styled.div<{ shouldBeLight: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  // Adding margin to only the icons (excluding the line)
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
  // Changing the anchor tags to the original color
  & > a {
    color: ${(props) => (props.shouldBeLight ? props.theme.white : props.theme.black)};
  }
  & > span {
    background-color: ${(props) => (props.shouldBeLight ? props.theme.white : props.theme.black)};
  }

  @media screen and (max-width: 640px) {
    left: 1rem;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
`;

const SocialIcons = () => {
  const shouldBeLight = useShouldBeLightTheme();

  return (
    <Icons shouldBeLight={shouldBeLight}>
      <motion.a
        href={SocialUrl.LINKED_IN}
        target="_blank"
        rel="noreferrer"
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}
      >
        <LinkedIn width={25} height={25} fill="currentColor" />
      </motion.a>
      <motion.a
        href={SocialUrl.GITHUB}
        target="_blank"
        rel="noreferrer"
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
      >
        <Github width={25} height={25} fill="currentColor" />
      </motion.a>

      <motion.a
        href={SocialUrl.FACEBOOK}
        target="_blank"
        rel="noreferrer"
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.4 }}
      >
        <Facebook width={25} height={25} fill="currentColor" />
      </motion.a>
      <motion.a
        href={`mailto:${SocialUrl.EMAIL}`}
        target="_blank"
        rel="noreferrer"
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.6 }}
      >
        <Email width={25} height={25} fill="currentColor" />
      </motion.a>
      <Line
        initial={{
          height: 0,
        }}
        animate={{ height: '8rem' }}
        transition={{ type: 'spring', duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

export default SocialIcons;
