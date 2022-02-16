import styled from 'styled-components';

type Props = {
  top?: string;
  left?: string;
  right?: string;
  text: string;
};

const Text = styled.h1<{
  top?: string;
  left?: string;
  right?: string;
}>`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => props.theme.gray};
  font-size: calc(5rem + 5vw);
  z-index: 0;
`;

const BigTitle = ({ top, left, right, text }: Props) => {
  return (
    <Text top={top} left={left} right={right}>
      {text}
    </Text>
  );
};

BigTitle.defaultProps = {
  left: '',
  top: '',
  right: '',
};

export default BigTitle;
