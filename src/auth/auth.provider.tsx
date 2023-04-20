import { createContext, useState } from "react";
import { IUser } from "../services/datasources/interfaces/user";

interface AuthContextType {
  user: IUser | null;
  setCredential: (user: IUser) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(
    JSON.parse(JSON.stringify(localStorage.getItem("user")))
  );

  function setCredential(user: IUser) {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <AuthContext.Provider value={{ user, setCredential }}>
      {children}
    </AuthContext.Provider>
  );
}
