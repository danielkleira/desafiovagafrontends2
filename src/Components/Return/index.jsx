import { Container } from "./style";
import { RequestContext } from "../../Providers/Request";
import { useContext, useEffect, useState } from "react";

const Return = () => {
  const { returns, requestApi } = useContext(RequestContext);
  const [keys, setKeys] = useState([]);
  const [values, setValues] = useState([]);
  const [numOne, setNumONe] = useState(false);
  useEffect(() => {
    let list = Object.keys(returns);
    setKeys(list);
    setValues(Object.values(returns));
  }, [returns]);

  return (
    <Container>
      <h3> VOCÊ RECEBERÁ:</h3>
      <div className="lists">
        <ul className="ulDays">
          {keys.length > 0
            ? keys.map((key, index) =>
                key === "1" ? <li>Amanhã:</li> : <li>Em {key} dias:</li>
              )
            : ""}
        </ul>
        <ul className="ulValues">
          {values.length > 0
            ? values.map((key, index) => (
                <li key={index}>
                  {Number(key).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </li>
              ))
            : ""}
        </ul>
      </div>
    </Container>
  );
};

export default Return;
