import styled from 'styled-components';
import Particles from 'react-tsparticles';
import { lightParticleConfig, darkParticleConfig } from '../config';

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
`;

type Props = {
  theme: 'light' | 'dark';
};

const Particle = ({ theme }: Props) => {
  return (
    <Container>
      <Particles
        style={{ position: 'absolute', top: 0 }}
        params={theme === 'light' ? lightParticleConfig : darkParticleConfig}
      />
    </Container>
  );
};

export default Particle;
