import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  themeType: Theme;
};

const Logo = styled.div<{ themeType: Theme }>`
  display: inline-block;
  color: ${(props) => (props.themeType === 'light' ? props.theme.black : props.theme.white)};
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

const LogoComponent = ({ themeType }: Props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <Logo onClick={handleOnClick} themeType={themeType}>
      Abdiel Vega
    </Logo>
  );
};

export default LogoComponent;
