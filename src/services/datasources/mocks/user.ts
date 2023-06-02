import { ICredential, IUser, UserServiceAble } from "../interfaces/user";

class UserServiceMock implements UserServiceAble {
  reqSignIn(credential: ICredential): Promise<IUser> {
    return new Promise<IUser>((resolve, _reject) => {
      // return resolve data with user object mock
      resolve({
        email: credential.email,
        username: "admin mock",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxx",
      });
    });
  }
}

export default UserServiceMock;
