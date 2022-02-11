import { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 10.5rem;
  top: 2rem;
  z-index: 10;
  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.6s;
  }
`;

const play = keyframes`
    0%{
        transform: scaleY(1);   
    }
    50%{
        transform: scaleY(2);   
    }
    100%{
        transform: scaleY(1);   
    }
`;

const Line = styled.span<{ isMusicPlaying: boolean }>`
  background-color: ${({ theme }) => theme.black};
  border: 1px solid ${({ theme }) => theme.black};

  animation: ${play} 1s ease infinite;
  animation-play-state: ${({ isMusicPlaying }) => (isMusicPlaying ? 'running' : 'paused')};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`;

const SoundBar = () => {
  const ref = useRef<HTMLAudioElement>(null);
  const [isMusicPlaying, setIsMusicPLaying] = useState(false);

  const handleOnClick = () => {
    if (!isMusicPlaying) {
      setIsMusicPLaying(true);
      ref.current?.play();
      return;
    }
    setIsMusicPLaying(false);
    ref.current?.pause();
  };

  return (
    <Container onClick={handleOnClick}>
      <Line isMusicPlaying={isMusicPlaying} />
      <Line isMusicPlaying={isMusicPlaying} />
      <Line isMusicPlaying={isMusicPlaying} />
      <Line isMusicPlaying={isMusicPlaying} />
      <Line isMusicPlaying={isMusicPlaying} />
      <audio
        src="https://mp3.downloadyt.com/wp-content/uploads/2020/02/Bad%20Bunny%20-%20Corazon.mp3"
        ref={ref}
      >
        <track kind="captions" />
      </audio>
    </Container>
  );
};

export default SoundBar;
