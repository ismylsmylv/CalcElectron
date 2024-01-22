import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface CounterState {
  value: string | number;
  first: number;
  second: number;
  number: string;
  number2: string;
  type: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: "",
  first: 0,
  second: 0,
  number: " ",
  number2: " ",
  type: " ",
};

export const calcReducer = createSlice({
  name: "calc",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    first: (state, action: PayloadAction<number>) => {
      state.first = action.payload;
    },
    second: (state, action: PayloadAction<number>) => {
      state.second = action.payload;
    },
    getNumber: (state, action: PayloadAction<string>) => {
      state.number += action.payload;
      state.value += action.payload;
    },
    addition: (state) => {
      state.number2 = state.number;
      state.number = "";
      state.type = "+";
      state.value = "";
    },
    subtraction: (state) => {
      state.number2 = state.number;
      state.number = "";
      state.type = "-";
      state.value = "";
    },
    multiplication: (state) => {
      state.number2 = state.number;
      state.number = "";
      state.type = "*";
      state.value = "";
    },
    division: (state) => {
      state.number2 = state.number;
      state.number = "";
      state.type = "/";
      state.value = "";
    },
    result: (state) => {
      state.value = "";

      if (state.type == "+") {
        state.value = Number(state.number) + Number(state.number2);
      } else if (state.type == "-") {
        state.value = Number(state.number2) - Number(state.number);
      } else if (state.type == "*") {
        state.value = Number(state.number2) * Number(state.number);
      } else if (state.type == "/") {
        state.value = Number(state.number2) / Number(state.number);
      }
      state.number = "";
      state.number2 = "";
      state.type = "";
    },
    reset: (state) => {
      state.number2 = "";
      state.number = "";
      state.type = "";
      state.value = "";
    },
  },
});

export const {
  first,
  second,
  getNumber,
  addition,
  subtraction,
  multiplication,
  division,
  result,
  reset,
} = calcReducer.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.calc.value;

export default calcReducer.reducer;
