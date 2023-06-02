import { useContext } from "react";
import { AuthContext } from "../auth/auth.provider";

export const useAuth = () => {
  //Call provider (useContext)
  return useContext(AuthContext);
};
