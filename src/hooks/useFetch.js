import { useState, useEffect } from "react";

const useFetch = (url, body, method, token) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        headers: {
          "Content-Type": "Application/json",
          ...(token && {
            authorization: token,
          }),
        },
        method: method,
        ...(body && {
          body: JSON.stringify(body),
        }),
      });
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message);
      }
      setError(null);
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return { isLoading, error, data, fetchData };
};

export default useFetch;
