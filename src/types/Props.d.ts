import {DataFieldsState, Field, User} from "./Reducer";

export interface SearchInputProps {
  field: Field;
}

export interface CardProps {
  children: React.ReactNode;
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
