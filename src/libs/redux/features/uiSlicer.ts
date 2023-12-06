import { createSlice } from "@reduxjs/toolkit";
import { uiInitialState } from "../../../constants";
import { IuDataInfo } from "../../../types";

const initialState = uiInitialState;
const uiSlicer = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setChangeTitle: (state, action: { payload: boolean }) => {
      state.changeTitle = action.payload;
    },
    addOpenOptions: (state, action) => {
      const newOption: IuDataInfo["openOptions"] = [
        ...state.openOptions,
        action.payload,
      ];
      state.openOptions = newOption;
    },
    removeOption: (state, action) => {
      state.openOptions = state.openOptions.filter(
        (option) => option !== action.payload
      );
    },
    setModal: (state) => {
      state.activeModal = !state.activeModal;
    },
  },
});
export const { setChangeTitle, addOpenOptions, removeOption } =
  uiSlicer.actions;
export default uiSlicer.reducer;
