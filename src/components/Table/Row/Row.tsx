import {RowProps} from "../../../types/Props";

function Row({dataFields, userData}: RowProps) {
  const cells = dataFields.map((field, index) => (
    <td key={index}>{userData[field.id]}</td>
  ));

  return <tr key={"id"}>{cells}</tr>;
}

export default Row;
