import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <OuterSpinner />
      <MiddleSpinner />
      <InnerSpinner />
    </SpinnerContainer>
  );
};

export default Spinner;

const spinnerCycle = keyframes`
    0% {
      rotate: 0;
    }
    100% {
      rotate: 360deg;
    }
  `;

const SpinnerContainer = styled.div`
  z-index: -1;
  width: 100vw;
  height: 100vh;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const SharedSpinnerStyles = styled.div`
  background: none;
  border: 5px white dashed;
  border-radius: 50%;
  position: absolute;
  animation: ${spinnerCycle} 120s linear infinite;
`;

const InnerSpinner = styled(SharedSpinnerStyles)`
  width: 300px;
  height: 300px;
  opacity: 2%;
  bottom: -10px;
  right: -10px;
`;

const MiddleSpinner = styled(SharedSpinnerStyles)`
  width: 400px;
  height: 400px;
  opacity: 4%;
  animation-direction: reverse;
  bottom: -60px;
  right: -60px;
`;

const OuterSpinner = styled(SharedSpinnerStyles)`
  width: 500px;
  height: 500px;
  opacity: 6%;
  bottom: -110px;
  right: -110px;
`;
