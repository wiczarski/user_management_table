import {useDispatch} from "react-redux";
import {useState} from "react";
import {AppDispatch} from "../../../store/reducer/reducer-index";
import SearchInputStyled from "./SearchInputStyled";
import {searchInputsActions} from "../../../store/reducer/slice-search_inputs";
import {SearchInputProps} from "../../../types/Props";
import {faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SearchInput({field}: SearchInputProps) {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const dispatchValue = (value: string) => {
    dispatch(
      searchInputsActions.setInputValue({
        fieldId: field.id,
        value,
      })
    );
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatchValue(value);
    setValue(value);
  };

  const XBtnHandler = () => {
    dispatchValue("");
    setValue("");
  };

  return (
    <SearchInputStyled>
      <div className={`input_box ${value ? "occupied" : ""}`}>
        <input
          id={field.id}
          autoComplete="off"
          value={value}
          type="text"
          className="search-input"
          placeholder={`${field.name}...`}
          onChange={changeHandler}
        />
        <div className="icon-wrapper">
          {" "}
          <FontAwesomeIcon
            icon={faSearch}
            className={`icon search-icon ${value ? "" : "shown"}`}
          />{" "}
          <FontAwesomeIcon
            icon={faTimes}
            className={`icon x-icon ${value ? "shown" : ""}`}
            onClick={XBtnHandler}
          />
        </div>
      </div>
    </SearchInputStyled>
  );
}

export default SearchInput;
