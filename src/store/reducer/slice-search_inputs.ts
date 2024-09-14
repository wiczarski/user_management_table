import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {FieldId, SearchInputsState} from "../../types/Reducer";

const initialState: SearchInputsState = {};

const searchInputsSlice = createSlice({
  name: "search_inputs",
  initialState,
  reducers: {
    setInputValue: (
      state,
      action: PayloadAction<{fieldId: FieldId; value: string}>
    ) => {
      const {fieldId, value} = action.payload;
      state[fieldId] = value;
    },
  },
});

export const searchInputsActions = searchInputsSlice.actions;
export default searchInputsSlice.reducer;
