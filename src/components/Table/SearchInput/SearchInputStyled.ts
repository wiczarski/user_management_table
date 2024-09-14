import styled from "styled-components";
import {SearchInputStyledProps} from "../../../types/Props";
import {themes} from "../../../styles/theme";

const SearchInputStyled = styled.div<SearchInputStyledProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  width: ${(props) => `${props.$width}px`};

  .input_box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: 2px solid ${themes.dark};
    border-radius: 20px;
    color: ${themes.dark};
    padding: 0.4rem 1rem;
    margin: 0rem 0.1rem;

    &.occupied {
      background-color: ${themes.light};

      input {
        background-color: ${themes.light};
      }
    }

    input {
      border: none;
      outline: none;
      font-size: 1rem;
      min-width: unset;
      width: 100%;

      &:focus {
        border: none;
        outline: none;
      }
    }

    .icon-wrapper {
      position: relative;
      width: 1.25rem;
      height: 1.25rem;

      .icon {
        position: absolute;
        top: 1px;
        left: 0;
        opacity: 0;
        transition: opacity 0.15s ease, transform 0.25s ease;
      }

      .search-icon {
        font-size: 1.1rem;
        transform: translateX(-80%);
      }

      .x-icon {
        top: -2px;
        font-size: 1.45rem;
        transform: translateX(-80%);
      }

      .shown {
        opacity: 1;
        transform: translateX(0%);
      }
    }
  }
`;

export default SearchInputStyled;
