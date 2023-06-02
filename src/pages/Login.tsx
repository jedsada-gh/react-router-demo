import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { PROTECTED_PATH } from "../constants/path.route";
import { useMemo } from "react";
import { UserRepository } from "../services/user";
import { UserService } from "../services/datasources/remotes/user";
import { UserRepositoryAble } from "../services/datasources/interfaces/user";
import UserServiceMock from "../services/datasources/mocks/user";

export const LoginPage = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const userService: UserRepositoryAble = useMemo(() => {
    // return new UserRepository(new UserService());
    return new UserRepository(new UserServiceMock());
  }, []);

  return (
    <button
      //Click to sign in and then redirect to home page
      onClick={() => {
        userService
          .signIn({ email: "admin@gmail.com", password: "qwerty123!" })
          .then((res) => {
            console.log("res: ", res);
            auth.setCredential(res);
            navigate(PROTECTED_PATH.HOME, { replace: true });
          })
          .catch((err) => {
            console.error("err: ", err);
          });
      }}
    >
      Sing in
    </button>
  );
};
