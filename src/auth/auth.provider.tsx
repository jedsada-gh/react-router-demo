import { createContext, useState } from "react";
import { IUser } from "../services/datasources/interfaces/user";

// Create context type (return type)
interface AuthContextType {
  user: IUser | null;
  setCredential: (user: IUser) => void;
}

//Create Context
export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // get (get from local storage) & set to state var.
  const [user, setUser] = useState<IUser | null>(
    JSON.parse(JSON.stringify(localStorage.getItem("user")))
  );

  function setCredential(user: IUser) {
    // set (insert to local storage) & set to state var.
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    //return user var & insert function to Provider (wrap children)
    <AuthContext.Provider value={{ user, setCredential }}>
      {children}
    </AuthContext.Provider>
  );
}
