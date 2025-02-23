import { create } from 'zustand';

interface HeaderState {
    whiteHeader: boolean;
    setWhiteHeader: (value: boolean) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
    whiteHeader: false,
    setWhiteHeader: (value: boolean) => set({ whiteHeader: value }),
}));