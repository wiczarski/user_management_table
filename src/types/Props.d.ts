import {DataFieldsState, Field, User} from "./Reducer";

export interface SearchInputProps {
  field: Field;
  width: string | number;
}

export interface SearchBarProps {
  dataFields: DataFieldsState;
}

export interface RowProps {
  dataFields: DataFieldsState;
  userData: User;
}

export interface SearchInputStyledProps {
  $width: string | number;
}

export interface TableProps {
  $width: string;
}

export interface FeedbackProps {
  text: string;
}
