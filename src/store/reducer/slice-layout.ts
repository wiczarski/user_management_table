import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {FieldId, LayoutState} from "../../types/Reducer";

const initialState: LayoutState = {widths: {}};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setActualWidth: (
      state,
      action: PayloadAction<{id: FieldId; width: number}>
    ) => {
      const {id, width} = action.payload;
      state.widths[id] = width.toString();
    },
  },
});

export const layoutActions = layoutSlice.actions;
export default layoutSlice.reducer;
