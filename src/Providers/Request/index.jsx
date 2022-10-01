import axios from "axios";
import { createContext, useState } from "react";
import { api } from "../../Services";

export const RequestContext = createContext({});

export const RequestProvider = ({ children }) => {
  const [returns, setReturns] = useState([]);
  const requestApi = (data) => {
    api
      .post("", data)
      .then((response) => {
        setReturns(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <RequestContext.Provider value={{ returns, requestApi }}>
      {children}
    </RequestContext.Provider>
  );
};
