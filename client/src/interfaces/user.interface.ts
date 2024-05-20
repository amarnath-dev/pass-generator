export interface Requirements {
  uppercase: string;
  lowercase: string;
  numbers: string;
  specialCharacters: string;
}

export interface PasswordsTypes {
  _id: string;
  password: string;
  userID: string;
  description: string;
  createdAt: string;
}

export interface Credential {
  email: string;
  password: string;
}
