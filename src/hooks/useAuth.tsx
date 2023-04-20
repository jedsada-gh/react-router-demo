import { useContext } from "react";
import { AuthContext } from "../auth/auth.provider";

export const useAuth = () => {
  return useContext(AuthContext);
};
