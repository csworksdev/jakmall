import styled, { css } from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .left {
    width: calc(80% - 81px);
    display: flex;
    flex-direction: column;
    border-right: orange 1px solid;
    padding: 20px;

    .left-title {
      display: flex;
      justify-content: space-between;
    }
  }
  .right {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px 20px;
  }
`;

export const PrevPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  cursor: pointer;
`;

export const Wrapper = styled.section`
  padding: 4em;
  background: white;
`;

export const SummaryTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content 
`;

export const SummaryBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SummaryBottomText = styled.div`
  ${(props) => {
    switch (props.$dropShip) {
      case false:
        return css`
          display: none;
        `;
      default:
        return css`
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        `;
    }
  }}
`;
