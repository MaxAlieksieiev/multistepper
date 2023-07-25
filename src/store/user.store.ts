import { create } from 'zustand';

import { IAccountDetails, IAddressDetails, IUserDetails } from '../core';

export interface IUserState {
  userDetails: IUserDetails,
  addressDetails: IAddressDetails,
  accountDetails: IAccountDetails,
  addUserDetails: (details: IUserDetails) => void;
  addAddressDetails: (details: IAddressDetails) => void;
  addAccountDetails: (details: IAccountDetails) => void;
}

export const useUserStore = create<IUserState>(set => ({
  userDetails: {
    firstName: '',
    lastName: '',
    email: '',
  },
  addressDetails: {
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
  accountDetails: {
    userName: '',
    password: ''
  },
  addUserDetails: (details: IUserDetails) => set({ userDetails: { ...details } }),
  addAddressDetails: (details: IAddressDetails) => set({ addressDetails: { ...details } }),
  addAccountDetails: (details: IAccountDetails) => set({ accountDetails: { ...details } }),
}));
