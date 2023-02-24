import { createContext } from "react";
import useFetch from "../useFetch";

const ShoesContext = createContext();

function ShoesProvider(props) {
  const url = "https://rebound-shoes-api.adaptable.app/";
  const { data, loading, error } = useFetch(
    "https://rebound-shoes-api.adaptable.app/api/v1/shoes"
  );
  return (
    <ShoesContext.Provider value={[data, url, loading, error]}>
      {props.children}
    </ShoesContext.Provider>
  );
}

export { ShoesProvider, ShoesContext };
