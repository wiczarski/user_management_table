import {PayloadAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
  FetchUserDataError,
  FetchUserDataResponse,
  FetchedUsersState,
  User,
} from "../../types/Reducer";
import {texts} from "../../texts/texts";

export const fetchUserData = createAsyncThunk<
  FetchUserDataResponse,
  void,
  {
    rejectValue: FetchUserDataError;
  }
>("users/fetchUserData", async (_, {rejectWithValue}) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      if (response.status === 404) {
        return rejectWithValue(texts.SOMETHING_WRONG);
      }

      throw new Error();
    }

    const data: FetchUserDataResponse = await response.json();

    if (data.length === 0) {
      return rejectWithValue(texts.NO_USERS);
    }

    return data;
  } catch {
    return rejectWithValue(texts.SERVER_ERROR);
  }
});

const initialState: FetchedUsersState = {
  usersData: [],
  loading: false,
  error: null,
};

const extractUsersData = (fetchedData: FetchUserDataResponse): User[] => {
  return fetchedData.map((userData) => {
    const {name, username, email, phone} = userData;
    return {name, username, email, phone};
  });
};

const usersDataSlice = createSlice({
  name: "users_data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUserData.fulfilled,
        (state, action: PayloadAction<FetchUserDataResponse>) => {
          state.loading = false;
          state.usersData = extractUsersData(action.payload);
        }
      )
      .addCase(
        fetchUserData.rejected,
        (state, action: PayloadAction<FetchUserDataError>) => {
          state.loading = false;
          state.error = action.payload || texts.CANNOT_LOAD;
        }
      );
  },
});

export const usersDataActions = usersDataSlice.actions;
export default usersDataSlice.reducer;
