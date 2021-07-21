import { createSlice } from "@reduxjs/toolkit";
import create from "zustand";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
    },
    loginFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

interface LoginState {
  bears: number;
  name: string;
  increasePopulation: (by: number) => void;
  removeAllBears: () => void;
  isLoading: boolean;
  isAuth: boolean;
  error: string;
}

export const useLoginStore = create<LoginState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  name: "login",
  isLoading: false,
  isAuth: false,
  error: "",
  setLoginPending: () =>
    set((state) => ({
      isLoading: true,
    })),
  setLoginSuccess: () =>
    set((state) => ({
      isLoading: false,
      isAuth: true,
      error: "",
    })),
  setLoginFail: (payload: string) =>
    set((state) => {
      state.isLoading = false;
      state.error = payload;
    }),
}));

const { reducer, actions } = loginSlice;

export const { loginPending, loginSuccess, loginFail } = actions;

export default reducer;
