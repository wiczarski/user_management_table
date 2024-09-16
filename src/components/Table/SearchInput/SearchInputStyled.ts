import styled from "styled-components";
import {themes} from "../../../styles/theme";

const SearchInputStyled = styled.th`
  position: relative;
  padding: 0px;

  .input_box {
    border: 1px solid ${themes.dark};
    border-radius: 50px;
    color: ${themes.dark};
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 1rem;
    width: 100%;

    &.occupied {
      background-color: ${themes.theme1};
      color: ${themes.bright};

      input {
        background-color: ${themes.theme1};
        color: ${themes.bright};
      }
    }

    input {
      border: none;
      font-size: 1rem;
      min-width: unset;
      outline: none;
      width: 100%;

      &:focus {
        border: none;
        outline: none;
      }
    }

    .icon-wrapper {
      height: 1.25rem;
      position: relative;
      width: 1.25rem;

      .icon {
        position: absolute;
        left: 0;
        top: 1px;
        opacity: 0;
        transition:
          opacity 0.2s ease,
          transform 0.25s ease;
      }

      .search-icon {
        font-size: 1.1rem;
        transform: translateX(-80%);
      }

      .x-icon {
        font-size: 1.45rem;
        top: -2px;
        transform: translateX(-80%);
      }

      .shown {
        cursor: auto;
        opacity: 1;
        transform: translateX(0%);

        &.x-icon {
          cursor: pointer;
        }
      }
    }
  }
`;

export default SearchInputStyled;
