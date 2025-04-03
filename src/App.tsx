import { createContext, useState } from "react"
import LoginPage from "./pages/login/ui"

export interface IUserTokenContext{
  token: string | null,
  setToken: (token: string) => void
}

const defaultValueContext = { setToken: () => {}, token: null}
export const UserTokenContext = createContext<IUserTokenContext>(defaultValueContext)

const App = () => {
  const [token, setToken] = useState<null | string>(null);

  return (
    <UserTokenContext.Provider value={{ token, setToken }}>
      <LoginPage />
    </UserTokenContext.Provider>
  )
}

export default App