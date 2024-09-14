import {configureStore} from "@reduxjs/toolkit";
import dataFieldsReducer from "./slice-data_fields";
import layoutReducer from "./slice-layout";
import searchInputsReducer from "./slice-search_inputs";
import usersDataReducer from "./slice-users_data";

const store = configureStore({
  reducer: {
    usersData: usersDataReducer,
    dataFields: dataFieldsReducer,
    layout: layoutReducer,
    searchInputs: searchInputsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
