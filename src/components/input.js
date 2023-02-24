import styled, { css } from "styled-components";

export const Input = styled.input`
  flex: 1;
  // border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;

  &:valid {
    border-color: green;
  }
  &:invalid {
    border-color: orange;
  }
`;

export const Radio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #ccc;

  ${(props) => {
    switch (props.$selected) {
      case true:
        return css`
          border-color: green;
        `;
      default:
        return css`
          border-color: #ccc;
        `;
    }
  }}
`;

export const RadioImage = styled.div`

  ${(props) => {
    switch (props.$selected) {
      case true:
        return css`
          display: block;
        `;
      default:
        return css`
          display: none;
        `;
    }
  }}
`;

export const RadioText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;



export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  border-color: green;
`;

export const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
`;
