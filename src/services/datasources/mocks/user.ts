import { ICredential, IUser, UserServiceAble } from "../interfaces/user";

class UserServiceMock implements UserServiceAble {
  reqSignIn(credential: ICredential): Promise<IUser> {
    return new Promise<IUser>((resolve, _reject) => {
      resolve({
        email: credential.email,
        username: "admin mock",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxx",
      });
    });
  }
}

export default UserServiceMock;
