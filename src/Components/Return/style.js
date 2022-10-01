import styled from "styled-components";

export const Container = styled.div`
  font-family: var(--body-font);
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--return-color);
  font-style: italic;
  font-weight: 700;

  .lists {
    display: flex;
    padding: none;

    ul {
      list-style: none;
    }
    .ulDays {
      text-align: left;
    }
    .ulValues {
      display: flex;
      text-align: left;
      padding: 0px 0px 0px 8px;
      flex-direction: column;
      align-self: flex-start;
    }
  }
`;
