import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useShouldBeLightTheme } from '../hooks';

const Logo = styled.div<{ shouldBeLight: boolean }>`
  display: inline-block;
  color: ${(props) => (props.shouldBeLight ? props.theme.white : props.theme.black)};
  font-family: 'Pacifico', cursive;
  cursor: pointer;
  position: fixed;
  left: 2rem;
  top: 2rem;
  font-size: 1.5rem;
  z-index: 3;
  text-decoration: none;
  @media screen and (max-width: 640px) {
    left: 1rem;
  }
`;

const LogoComponent = () => {
  const navigate = useNavigate();
  const shouldBeLight = useShouldBeLightTheme();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <Logo onClick={handleOnClick} shouldBeLight={shouldBeLight}>
      Abdiel Vega
    </Logo>
  );
};

export default LogoComponent;
