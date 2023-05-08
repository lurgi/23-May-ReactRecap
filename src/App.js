import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const rotationAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }50%{
    transform: rotate(180deg);
    border-radius: 100px;
  }100%{
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 80px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😊</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
