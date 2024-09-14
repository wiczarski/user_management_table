export interface LayoutState {
  widths: {[key: string]: string};
}

export type FieldId = "name" | "username" | "email" | "phone";

export interface Field {
  id: FieldId;
  name: string;
  targetWidth: string;
}

export type DataFieldsState = Field[];

export interface SearchInputsState {
  [key: string]: string;
}

export interface User {
  name: string | undefined;
  username: string | undefined;
  email: string | undefined;
  phone: string | undefined;
}

export type FetchUserDataResponse = Partial<User>[];
export type FetchUserDataError = string | undefined;

export interface FetchedUsersState {
  usersData: User[];
  loading: boolean;
  error: string | null;
}

export interface RootState {
  layout: LayoutState;
  dataFields: DataFieldsState;
  searchInputs: SearchInputsState;
  usersData: FetchedUsersState;
}
