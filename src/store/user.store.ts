/* eslint-disable @typescript-eslint/no-empty-function */
import { create } from 'zustand';

export const useUserStore = create(set => ({
  user: {
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
    }
  },
  addUserDetails: () => set({}),
  addAddressDetails: () => {},
  addAccountDetails: () => {}
}));
