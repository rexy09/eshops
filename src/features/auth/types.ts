export interface UserCredentials {
  username: string;
  password: string;
}

export interface ISignupUserForm {
  full_name: string;
  username: string;
  password: string;
}


export interface UserData {
  id: string;
  email: string;
  username: string | null;
  name: string | null;
  phone: string | null;
  profile_image: string | null;
  bio: string | null;
}


export interface ILoginResponse {
  tokens: string;
  phone: string;
}

export interface IUserData {
  full_name: string;
  role: string;
  phone: string;
}