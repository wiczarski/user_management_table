import styled from "styled-components";
import {themes} from "../../../styles/theme";

const TableStyled = styled.div`
  overflow-x: auto;

  @media (min-width: 1150px) {
    display: flex;
    justify-content: center;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
    font-size: 1.1rem;
    min-width: 1000px;
    table-layout: fixed;
    width: auto;

    @media (min-width: 1150px) {
      width: 100%;
    }

    @media (min-width: 2000px) {
      width: 1500px;
    }

    thead {
      tr:first-child th {
        padding-left: 1rem;
      }

      th {
        background-color: ${themes.bright};
        font-size: 1.3rem;
        font-weight: bold;
        height: 2.2rem;
        padding: 0.3rem 0rem;
        padding-left: 0.5rem;
        text-align: left;
      }
    }

    tbody {
      td {
        background-color: inherit;
        font-size: 1.15rem;
        height: 1.8rem;
        padding: 0.6rem 0rem;
        padding-left: 1rem;
        text-align: left;
      }
    }

    tr:nth-child(even) td {
      background-color: ${themes.light};
    }

    tr:hover td {
      background-color: ${themes.theme1};
      color: ${themes.bright};
    }
  }
`;

export default TableStyled;
