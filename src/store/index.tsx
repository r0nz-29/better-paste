import {createContext, ReactNode, useState} from "react";

type TAppContext = {
  loading: boolean;
  setLoading: (s:boolean) => void;
  error: ReactNode;
  setError: (r: ReactNode) => void;
}

export const AppContext = createContext<TAppContext>({
  loading: false,
  error: null,
  setLoading: () => {},
  setError: () => {},
});

export default function AppContextProvider({children}:{children: ReactNode}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ReactNode>(null);

  const appContextValue = {
    loading,
    setLoading,
    error,
    setError,
  }

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  )
}