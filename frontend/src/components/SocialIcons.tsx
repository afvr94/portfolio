import styled from 'styled-components';
import { Email, Facebook, Github, LinkedIn } from './svgs';
import { SocialUrl } from '../constants';

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
  background-color: ${(props) => props.theme.black};
`;

const SocialIcons = () => {
  return (
    <Icons>
      <a href={SocialUrl.LINKED_IN} target="_blank" rel="noreferrer">
        <LinkedIn width={25} height={25} fill="currentColor" />
      </a>
      <a href={SocialUrl.GITHUB} target="_blank" rel="noreferrer">
        <Github width={25} height={25} fill="currentColor" />
      </a>

      <a href={SocialUrl.FACEBOOK} target="_blank" rel="noreferrer">
        <Facebook width={25} height={25} fill="currentColor" />
      </a>
      <a href={`mailto:${SocialUrl.EMAIL}`} target="_blank" rel="noreferrer">
        <Email width={25} height={25} fill="currentColor" />
      </a>
      <Line />
    </Icons>
  );
};

export default SocialIcons;
