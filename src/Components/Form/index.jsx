import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { RequestContext } from "../../Providers/Request";

const FormRequest = () => {
  const [days, setDays] = useState(false);
  const { returns, requestApi } = useContext(RequestContext);

  useEffect(() => {}, [returns]);
  const useDays = () => {
    setDays(!days);
  };
  const schema = yup.object().shape({
    amount: yup
      .number()
      .typeError("Este campo deve ser um número")
      .required("Campo obrigatório!"),
    installments: yup
      .number()
      .typeError("Este campo deve ser um número")
      .required("Campo obrigatório!"),
    mdr: yup
      .number()
      .typeError("Este campo deve ser um número")
      .required("Campo obrigatório!"),
    days: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handlePatch = (data) => {
    let daysToFormater = "";
    if (data.days) {
      daysToFormater = data.days.split(" ");
    }
    let days = [];
    if (daysToFormater) {
      for (let i = 0; i < daysToFormater.length; i++) {
        days.push(Number(daysToFormater[i]));
      }
    }

    if (data.days) {
      const infos = {
        amount: data.amount,
        installments: data.installments,
        mdr: data.mdr,
        days: days,
      };

      requestApi(infos);
      console.log(infos);
    } else {
      const infos = {
        amount: data.amount,
        installments: data.installments,
        mdr: data.mdr,
      };

      requestApi(infos);
    }
  };

  return (
    <>
      <Container>
        <form
          onSubmit={handleSubmit(handlePatch)}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3>Simule sua Antecipação</h3>
          <div className="inputElement">
            <label>Informe o valor da venda *</label>
            <input
              label={"Amount"}
              name={"amount"}
              {...register("amount")}
              placeholder="ex: 1000 "
            />
            <span>{errors.amount?.message}</span>
          </div>

          <div className="inputElement">
            <label>Em quantas parcelas *</label>
            <input
              label={"Installments"}
              name={"installments"}
              {...register("installments")}
              placeholder="ex: 10"
            />
            <span>{errors.installments?.message}</span>
            <p>Máximo de 12 parcelas</p>
          </div>
          <div className="inputElement">
            <label>Informe o percentual de MDR *</label>
            <input
              label={"MDR"}
              name={"mdr"}
              {...register("mdr")}
              placeholder="ex: 5"
            />
            <span>{errors.mdr?.message}</span>
          </div>

          {days === true ? (
            <div className="inputElement">
              <label>Dias a serem calculados</label>
              <input
                label={"Days"}
                name={"days"}
                {...register("days")}
                placeholder="Dias a serem calculados"
              />
              <span>{errors.days?.message}</span>
            </div>
          ) : (
            <></>
          )}

          <div className="buttons">
            <button onClick={useDays}>Adicionar dias</button>
            <button type="submit">Simular</button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default FormRequest;
