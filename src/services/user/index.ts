import {
  ICredential,
  UserRepositoryAble,
  UserServiceAble,
} from "../datasources/interfaces/user";

export class UserRepository implements UserRepositoryAble {
  private service: UserServiceAble;
  constructor(service: UserServiceAble) {
    this.service = service;
  }

  signIn = (credential: ICredential) => {
    return this.service.reqSignIn(credential);
  };
}
