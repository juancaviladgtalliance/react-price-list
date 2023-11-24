import { createSlice } from "@reduxjs/toolkit";
import { MesageData } from "../../../types";
import { dataInitialState } from "../../../constants";

const initialState = dataInitialState;
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    addMessageOption: (state, action) => {
      console.log(action.payload);
      const newOption: MesageData["options"] = [
        ...state.message.options,
        action.payload,
      ];
      state.message.options = newOption;
    },
    addMessageIncludes: (state, action) => {
      const newIncludes: MesageData["includes"] = [
        ...state.message.includes,
        action.payload,
      ];
      state.message.includes = newIncludes;
    },
    setMessageAnotherProperties: (state, action) => {
      state.message.another_properties = action.payload;
    },
    removeMessageOption: (state, action) => {
      state.message.options = state.message.options.filter(
        (option) => option !== action.payload
      );
    },
    removeMessageIncludes: (state, action) => {
      state.message.includes = state.message.includes.filter(
        (include) => include !== action.payload
      );
    },
    setResponse: (state, action) => {
      state.response = action.payload;
    },
    resetForm: (state) => {
      state = dataInitialState;
      return state;
    },
  },
});

export const {
  setName,
  setEmail,
  setPhone,
  resetForm,
  addMessageOption,
  addMessageIncludes,
  removeMessageOption,
  removeMessageIncludes,
  setMessageAnotherProperties,
  setResponse,
} = formSlice.actions;

export default formSlice.reducer;
