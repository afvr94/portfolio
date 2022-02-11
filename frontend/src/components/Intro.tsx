import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProfilePic from '../assets/images/profile-pic.png';

const Container = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 60vh;
  display: flex;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.white} 50%,
        ${(props) => props.theme.orange} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.white} 50%,
        ${(props) => props.theme.orange} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.white};
  border-right: 2px solid ${(props) => props.theme.orange};
  z-index: 1;
  @media screen and (max-width: 640px) {
    border-left: 0px;
    border-right: 0px;
    border-top: 2px solid ${({ theme }) => theme.white};
    border-bottom: 2px solid ${({ theme }) => theme.orange};
    background-image: linear-gradient(
        ${({ theme }) => theme.white} 50%,
        ${({ theme }) => theme.orange} 50%
      ),
      linear-gradient(${({ theme }) => theme.white} 50%, ${({ theme }) => theme.orange} 50%);
    background-size: 2px 100%;
    background-position-x: 0px, 100%;
    background-position-y: 0px, 0px;
    flex-direction: column;
  }
`;

const Box = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -0.5%);
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    height: 100%;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.white};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = () => {
  return (
    <Container
      initial={{ height: 0 }}
      animate={{ height: '60vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <Box>
        <Text>
          <h1>Hi,</h1>
          <h4>I&apos;m Abdiel Vega.</h4>
          <h6>I am a fullstack engineer.</h6>
        </Text>
      </Box>
      <Box>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <img className="pic" src={ProfilePic} alt="Profile Pic" />
        </motion.div>
      </Box>
    </Container>
  );
};

export default Intro;
