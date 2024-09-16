import {CardProps} from "../../../types/Props";
import CardStyled from "./CardStyled";

function Card({children}: CardProps) {
  return <CardStyled>{children}</CardStyled>;
}

export default Card;
