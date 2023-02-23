import { createContext } from "react";
import useFetch from "../useFetch";

const ShoesContext = createContext();

function ShoesProvider(props) {
  const url = "https://node-env.eba-fuimik5e.us-east-1.elasticbeanstalk.com/";
  const { data, loading, error } = useFetch(
    "https://node-env.eba-fuimik5e.us-east-1.elasticbeanstalk.com/api/v1/shoes"
  );
  return (
    <ShoesContext.Provider value={[data, url, loading, error]}>
      {props.children}
    </ShoesContext.Provider>
  );
}

export { ShoesProvider, ShoesContext };
