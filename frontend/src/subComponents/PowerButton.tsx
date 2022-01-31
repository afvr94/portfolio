import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PowerButton as PowerBtnSvg } from '../components/svgs';

const Power = styled.button`
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
    background-color: rgb(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgb(0, 255, 0, 0.2);
  }
`;

const PowerButton = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <Power onClick={handleOnClick}>
      <PowerBtnSvg width={30} height={30} fill="currentColor" />
    </Power>
  );
};

export default PowerButton;
