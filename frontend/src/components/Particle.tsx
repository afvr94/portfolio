import styled from 'styled-components';
import Particles from 'react-tsparticles';
import { particlesConfig } from '../config';

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
`;

const Particle = () => {
  return (
    <Container>
      <Particles style={{ position: 'absolute', top: 0 }} params={particlesConfig} />
    </Container>
  );
};

export default Particle;
