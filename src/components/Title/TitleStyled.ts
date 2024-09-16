import styled from "styled-components";
import {themes} from "../../styles/theme";

const TitleStyled = styled.h1`
  font-weight: 800;
  font-size: 4rem;
  text-align: center;
  color: ${themes.dark};
  font-size: 4rem;
  margin: 0px 5vw;
  margin-top: 10vh;
  margin-bottom: 1.5rem;

  @media (min-width: 1200px) {
    font-size: 4rem;
    margin-top: 10vh;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    margin-top: 10vh;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3.5rem;
    margin-top: 7vh;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    font-size: 3rem;
    margin-top: 5vh;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-top: 3vh;
    margin-bottom: 0.5rem;
  }
`;

export default TitleStyled;
