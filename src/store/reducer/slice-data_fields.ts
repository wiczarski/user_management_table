import {createSlice} from "@reduxjs/toolkit";
import {Field} from "../../types/Reducer";

const initialState: Field[] = [
  {id: "name", name: "Name", targetWidth: "250px"},
  {id: "username", name: "Username", targetWidth: "250px"},
  {id: "email", name: "Email", targetWidth: "400px"},
  {id: "phone", name: "Phone", targetWidth: "300px"},
];

const dataFieldsSlice = createSlice({
  name: "data_fields",
  initialState,
  reducers: {},
});

export const dataFieldsActions = dataFieldsSlice.actions;
export default dataFieldsSlice.reducer;
