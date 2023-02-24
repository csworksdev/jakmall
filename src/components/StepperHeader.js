import styled from "styled-components";

export const StyledStepperHeaderItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  .step-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  .step-name {
    color: #ff8a00;
    font-weight: bold;
  }

  .step-counter {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33px;
    height: 33px;
    padding: 10px;
    margin-bottom: 6px;
    background: #ff8a00;
    border-radius: 50%;
    opacity: 0.2;
    color: #ffffff;
    font-weight: bold;
  }

  &.completed {
    .step-counter {
      background: #ff8a00;
      border-radius: 50%;
      color: #fff;
      opacity: 1;
    }
  }

  &:first-child {
    &::before {
      content: none;
    }
  }

  &:last-child {
    &::after {
      content: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const StyledStepperHeader = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
