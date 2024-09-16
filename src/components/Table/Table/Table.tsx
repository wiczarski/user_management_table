import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {AppDispatch} from "../../../store/reducer/reducer-index";
import Feedback from "../Feedback/Feedback";
import Row from "../Row/Row";
import TableStyled from "./TableStyled";
import {fetchUserData} from "../../../store/reducer/slice-users_data";
import {layoutActions} from "../../../store/reducer/slice-layout";
import {RootState, User} from "../../../types/Reducer";
import {stringContains} from "../../../utils/functions";
import {texts} from "../../../texts/texts";
import SearchInput from "../SearchInput/SearchInput";
import Card from "../Card/Card";

function Table() {
  const dispatch = useDispatch<AppDispatch>();
  const thRefs = useRef<(HTMLElement | null)[]>([]);
  const dataFields = useSelector((state: RootState) => state.dataFields);
  const searchInputsData = useSelector(
    (state: RootState) => state.searchInputs
  );
  const {usersData, loading, error} = useSelector(
    (state: RootState) => state.usersData
  );

  useEffect(() => {
    dispatch(fetchUserData());
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    const dispatchColumnsWidth = () => {
      thRefs.current.map((th, index) => {
        const width = th?.getBoundingClientRect().width || 0;
        dispatch(
          layoutActions.setActualWidth({
            id: dataFields[index].id,
            width,
          })
        );
        return null;
      });
    };
    dispatchColumnsWidth();

    const handleResize = () => {
      dispatchColumnsWidth();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dataFields, usersData, dispatch]);

  const headers = dataFields.map((field, index) => (
    <th
      key={index}
      ref={(el) => {
        thRefs.current[index] = el;
      }}
    >
      {field.name}
    </th>
  ));

  const searchInputs = dataFields.map((field, index) => (
    <SearchInput key={index} field={field} />
  ));

  const searchedUserData = usersData.filter((userData) => {
    return Object.entries(searchInputsData).every(
      ([inputField, inputValue]) => {
        const str = userData[inputField as keyof User];
        const phrase = inputValue;
        return stringContains(str, phrase);
      }
    );
  });

  const rows = searchedUserData.map((userData, index) => {
    return <Row key={index} dataFields={dataFields} userData={userData} />;
  });

  const isSearchNotMatched =
    !error && !loading && searchedUserData.length === 0;

  const table = (
    <Card>
      <table>
        <thead>
          <tr className="headers">{headers}</tr>
          <tr>{searchInputs}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      {isSearchNotMatched && <Feedback text={texts.NO_RESULTS} />}
    </Card>
  );

  const getTableContent = () => {
    if (usersData.length > 0) return table;
    if (loading) return <Feedback text={texts.LOADING} />;
    if (error) return <Feedback text={error} />;
  };

  return <TableStyled>{getTableContent()}</TableStyled>;
}

export default Table;
