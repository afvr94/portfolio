import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PageUrl } from '../constants';
import { Home } from './svgs';

const Container = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 3;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  @media screen and (max-width: 640px) {
    left: 90%;
    top: 1.5rem;
  }
`;

const HomeButton = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  if (pathname === PageUrl.MAIN) {
    return null;
  }
  return (
    <Container onClick={handleOnClick}>
      <Home width={30} height={30} />
    </Container>
  );
};

export default HomeButton;
