import { createContext, useState } from "react";
import RegisterPage from "./pages/register/ui";
import LoginPage from "./pages/login/ui";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export interface IUserTokenContext {
  token: string | null;
  setToken: (token: string) => void;
}

const defaultValueContext = { setToken: () => {}, token: null };
export const UserTokenContext =
  createContext<IUserTokenContext>(defaultValueContext);

const App = () => {
  const [token, setToken] = useState<null | string>(null);

  return (
    <UserTokenContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </UserTokenContext.Provider>
  );
};

export default App;
