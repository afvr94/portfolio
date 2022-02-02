import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WorkPage = () => {
  return (
    <Container>
      <h2>Work in progress... 👷🏾‍♂️</h2>
    </Container>
  );
};

export default WorkPage;
