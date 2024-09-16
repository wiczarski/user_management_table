import styled from "styled-components";

const CardStyled = styled.div`
  border-radius: 15px;
  box-shadow:
    0 12px 24px rgba(0, 0, 0, 0.2),
    0 6px 12px rgba(0, 0, 0, 0.1);
  display: inline-block;
  margin: 1rem;
  padding: 0rem 3rem;
  padding-bottom: 5rem;
  padding-top: 3rem;

  @media (min-width: 1400px) and (max-width: 1500px) {
    width: 90%;
  }
  @media (min-width: 1500px) and (max-width: 1800px) {
    width: 80%;
  }
  @media (min-width: 1800px) and (max-width: 2000px) {
    width: 70%;
  }
`;

export default CardStyled;
