import {RowProps} from "../../../types/Props";
import {Td} from "../Table/TableStyled";

function Row({dataFields, userData}: RowProps) {
  const cells = dataFields.map((field, index) => (
    <Td key={index} $width={field.targetWidth}>
      {userData[field.id]}
    </Td>
  ));

  return <tr key={"id"}>{cells}</tr>;
}

export default Row;
