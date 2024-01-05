import axios, {AxiosError} from "axios";
import {useContext} from "react";
import {AppContext} from "./index.tsx";

export function useQuery() {
  const {setLoading, setError} = useContext(AppContext);

  function _get<T>(url: string): Promise<T | void> {
    return Promise.resolve()
      .then(() => setLoading(true))
      .then(() => axios.get<T>(url))
      .then(({data}) => data as T)
      .catch((err: Error) => {
        console.log(err)
        setError(
          <div>
            <p>{err.name}</p>
            <p>{err.message}</p>
            {err instanceof AxiosError && <p>{err.response?.data.message}</p>}
          </div>
        );
      })
      .finally(() => setLoading(false));
  }

  function _post<T>(url: string, payload: object): Promise<T | void> {
    return Promise.resolve()
      .then(() => setLoading(true))
      .then(() => axios.post<T>(url, payload))
      .then(({data}) => data as T)
      .catch((err: Error) => {
        console.log(err)
        setError(
          <div>
            <p>{err.name}</p>
            <p>{err.message}</p>
            {err instanceof AxiosError && <p>{err.response?.data.message}</p>}
          </div>
        );
      })
      .finally(() => setLoading(false));
  }

  function _put<T>(url: string, payload: object): Promise<T | void> {
    return Promise.resolve()
      .then(() => setLoading(true))
      .then(() => axios.put<T>(url, payload))
      .then(({data}) => data as T)
      .catch((err: Error) => {
        console.log(err)
        setError(
          <div>
            <p>{err.name}</p>
            <p>{err.message}</p>
            {err instanceof AxiosError && <p>{err.response?.data.message}</p>}
          </div>
        );
      })
      .finally(() => setLoading(false));
  }

  return {
    _get, _post,
    _put
  };
}