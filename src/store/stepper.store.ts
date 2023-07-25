import { create } from 'zustand';

export interface IStepperState {
  currentStep: number,
  nextStep: () => void;
  previousStep: () => void;
  resetStep: () => void;
}

export const useStepperStore = create<IStepperState>(set => ({
  currentStep: 0,
  nextStep: () => set(state => ({ currentStep: state.currentStep + 1 })),
  previousStep: () => set(state => ({ currentStep: state.currentStep - 1 })),
  resetStep: () => set(() => ({ currentStep: 0 }))
}));
