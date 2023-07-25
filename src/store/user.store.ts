import { create } from 'zustand';

/* eslint-disable @typescript-eslint/no-empty-function */
import { IAccountDetails, IAddressDetails, IUserDetails } from '../core';

export interface IUserState {
  userDetails: IUserDetails,
  addressDetails: IAddressDetails,
  accountDetails: IAccountDetails,
  addUserDetails: (details: IUserDetails) => void;
  addAddressDetails: (details: IAddressDetails) => void;
  addAccountDetails: () => void;
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
  addAccountDetails: () => {}
}));
