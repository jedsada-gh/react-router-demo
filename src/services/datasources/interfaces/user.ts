export interface UserServiceAble {
  reqSignIn(credential: ICredential): Promise<IUser>;
}

export interface ICredential {
  email: string;
  password: string;
}

export interface UserRepositoryAble {
  signIn: (credential: ICredential) => Promise<IUser>;
}

export interface IUser {
  username: string;
  email: string;
  token: string;
}
