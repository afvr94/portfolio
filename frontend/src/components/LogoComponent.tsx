import styled from 'styled-components';

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.black};
  font-family: 'Pacifico', cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoComponent = () => {
  return <Logo> AV </Logo>;
};

export default LogoComponent;