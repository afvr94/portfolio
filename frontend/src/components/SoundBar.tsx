import { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Pause, Play } from './svgs';
import { useShouldBeLightTheme } from '../hooks';

const Container = styled.div<{ shouldBeLight: boolean }>`
  display: flex;
  cursor: pointer;
  position: fixed;
  align-items: center;
  left: 10.5rem;
  top: 2rem;
  z-index: 10;
  & > *:nth-child(1) {
    margin-right: 0.5rem;
    fill: ${({ shouldBeLight, theme }) => (shouldBeLight ? theme.white : theme.black)};
  }
  & > *:nth-child(2) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(6) {
    animation-delay: 0.6s;
  }
  @media screen and (max-width: 640px) {
    left: 9.5rem;
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

const Line = styled.span<{ isMusicPlaying: boolean; shouldBeLight: boolean }>`
  background-color: ${({ theme, shouldBeLight }) => (shouldBeLight ? theme.white : theme.black)};
  border: 1px solid ${({ theme, shouldBeLight }) => (shouldBeLight ? theme.white : theme.black)};
  animation: ${play} 1s ease infinite;
  animation-play-state: ${({ isMusicPlaying }) => (isMusicPlaying ? 'running' : 'paused')};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`;

const SoundBar = () => {
  const ref = useRef<HTMLAudioElement>(null);
  const [isMusicPlaying, setIsMusicPLaying] = useState(false);

  const shouldBeLight = useShouldBeLightTheme();

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
    <Container onClick={handleOnClick} shouldBeLight={shouldBeLight}>
      {isMusicPlaying ? (
        <Pause width={25} height={25} fill="fillCurrent" />
      ) : (
        <Play width={25} height={25} fill="fillCurrent" />
      )}
      <Line isMusicPlaying={isMusicPlaying} shouldBeLight={shouldBeLight} />
      <Line isMusicPlaying={isMusicPlaying} shouldBeLight={shouldBeLight} />
      <Line isMusicPlaying={isMusicPlaying} shouldBeLight={shouldBeLight} />
      <Line isMusicPlaying={isMusicPlaying} shouldBeLight={shouldBeLight} />
      <Line isMusicPlaying={isMusicPlaying} shouldBeLight={shouldBeLight} />
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
