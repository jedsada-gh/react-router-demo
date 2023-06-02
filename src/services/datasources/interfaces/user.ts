export interface UserServiceAble {
  // Interface for user service
  reqSignIn(credential: ICredential): Promise<IUser>;
}

export interface ICredential {
  // Interface for user credential
  email: string;
  password: string;
}

export interface UserRepositoryAble {
  //Interface for user repository
  signIn: (credential: ICredential) => Promise<IUser>;
}

export interface IUser {
  //interface for user response
  username: string;
  email: string;
  token: string;
}
