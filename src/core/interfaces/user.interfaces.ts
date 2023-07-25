export interface IUserDetails {
  firstName: string,
  lastName: string,
  email: string;
};

export interface IAddressDetails {
  street: string;
  city: string;
  state: string;
  zipCode: string;
};

export interface IAccountDetails {
  userName: string;
  password: string;
};

export interface IUserInterface extends IUserDetails, IAddressDetails, IAccountDetails {};
