import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url, headers) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    setLoading(true);
    axios
      .get(url, {headers})
      .then(function (response) {
        setData(response.data.data.shoes);
      })
      .catch(function (error) {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, headers]);

  return { data, loading, error };
}

export default useFetch;
