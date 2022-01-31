import styled from 'styled-components';
import { Email, Facebook, Github, LinkedIn } from '../components/svgs';

const Icons = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  left: 2rem;
  // TODO: CHECK THIS
  z-index: 3;
  // Adding margin to only the icons (excluding the line)
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
  // Changing the anchor tags to the original color
  & > a {
    color: inherit;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;

const SocialIcons = () => {
  return (
    <Icons>
      <a href="https://www.linkedin.com/in/afvr94/" target="_blank" rel="noreferrer">
        <LinkedIn width={25} height={25} fill="currentColor" />
      </a>
      <a href="https://github.com/afvr94" target="_blank" rel="noreferrer">
        <Github width={25} height={25} fill="currentColor" />
      </a>

      <a href="https://www.facebook.com/abdiel.vega.9/" target="_blank" rel="noreferrer">
        <Facebook width={25} height={25} fill="currentColor" />
      </a>
      <a href="mailto:me@abdielvega.com" target="_blank" rel="noreferrer">
        <Email width={25} height={25} fill="currentColor" />
      </a>
      <Line />
    </Icons>
  );
};

export default SocialIcons;
