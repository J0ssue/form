import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL =
  "https://raw.githubusercontent.com/mledoze/countries/master/dist/countries.json";

const useAxios = (axiosParams: any) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<any>("");
  const [loading, setloading] = useState(true);

  const fetchData = async (params: any) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response, error, loading };
};

export default useAxios;
