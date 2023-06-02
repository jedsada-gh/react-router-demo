import RemoteA from "../../remote.a";
import { ICredential, IUser, UserServiceAble } from "../interfaces/user";

export class UserService extends RemoteA implements UserServiceAble {
  reqSignIn(credential: ICredential): Promise<IUser> {
    return new Promise<IUser>((resolve, reject) => {
      this.getInstance()
        .post<IUser>("/singin", credential)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }
}
