import { useState } from "react";
import axios from "axios";

export const useFetch = () => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<any>();

  const fetchDataWithParams = async (url: string, payload?: any) => {
    setIsLoading(true);
    try {
      const response: any = await axios.get(url, { params: payload });
      setIsLoading(false);
      return response.data;
    } catch (e) {
      setIsLoading(false);
      return e;
    }
  };

  return { data, isLoading, fetchDataWithParams, isError };
};
