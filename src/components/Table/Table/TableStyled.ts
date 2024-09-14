import styled from "styled-components";
import {TableProps} from "../../../types/Props";
import {themes} from "../../../styles/theme";

const TableStyled = styled.div`
  overflow-x: auto;
  width: 100%;

  @media (min-width: 1400px) and (max-width: 1500px) {
    width: 90%;
  }
  @media (min-width: 1500px) and (max-width: 1800px) {
    width: 80%;
  }
  @media (min-width: 1800px) and (max-width: 2000px) {
    width: 70%;
  }
  @media (min-width: 2000px) {
    width: 1500px;
  }

  table {
    border-collapse: collapse;
    font-size: 1.1rem;
    table-layout: fixed;
    width: 100%;
  }

  tr:nth-child(even) td {
    background-color: ${themes.light};
  }

  tr:hover td {
    background-color: ${themes.theme1};
    border-color: ${themes.theme2};
    color: white;
  }
`;

export const Th = styled.th<TableProps>`
  font-size: 1.3rem;
  font-weight: bold;
  text-align: left;
  padding: 4px;
  height: 2.2rem;
  width: ${(props) => `${props.$width}`};
  border: 1px solid ${themes.theme2};
  background-color: ${themes.theme1};
`;

export const Td = styled.td<TableProps>`
  font-size: 1.15rem;
  text-align: left;
  width: ${(props) => `${props.$width}`};
  height: 1.8rem;
  padding: 4px;
  padding-left: 4px;
  background-color: inherit;
  border: 1px solid ${themes.shadow};
  overflow-x: auto;
`;
export default TableStyled;
