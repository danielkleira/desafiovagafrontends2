import styled from "styled-components";

export const Container = styled.div`
  font-family: var(--body-font);

  font-size: 16px;
  background-color: var(--background-color);
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  border-radius: 40px;

  .center {
    display: flex;
    gap: 15vw;

    border: solid 1px var(--border-input);
    padding: 35px 44px 56px 41px;
  }
`;
