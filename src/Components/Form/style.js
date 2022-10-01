import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--background-color);
  box-sizing: border-box;
  color: var(--header-color);

  .inputElement {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 26px;
    background-color: var(--background-color);

    span {
      color: var(--error-message);
      font-size: 11px;
      margin: none;
    }
    input {
      width: 251px;
      height: 37px;
      border-radius: 4px;
      border: 1px solid var(--border-input);
      background-color: var(--background-color);
    }
    p {
      color: var(--span-color);
    }
  }

  .buttons {
    gap: 15px;
    color: red;

    button {
      border: 1px solid var(--border-input);
      border-radius: 8px;
      margin: 18px 18px;
      color: var(--header-color);
      :hover {
        background-color: var(--button-background);
        filter: brightness(1.3);
        background-color: var(--border-input);
        color: black;
        cursor: pointer;
      }
    }
  }
`;
