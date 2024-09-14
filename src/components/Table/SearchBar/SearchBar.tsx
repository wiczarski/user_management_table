import React from "react";
import {useSelector} from "react-redux";
import SearchBarStyled from "./SearchBarStyled";
import SearchInput from "../SearchInput/SearchInput";
import {RootState} from "../../../types/Reducer";
import {SearchBarProps} from "../../../types/Props";

const SearchBar = React.memo(({dataFields}: SearchBarProps) => {
  const widths = useSelector((state: RootState) => state.layout.widths);

  const searchInputs = dataFields.map((field, index) => {
    return (
      <SearchInput key={index} field={field} width={widths[field.id] || 0} />
    );
  });

  return <SearchBarStyled>{searchInputs}</SearchBarStyled>;
});

export default SearchBar;
