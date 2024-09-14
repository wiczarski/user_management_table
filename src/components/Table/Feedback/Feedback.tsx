import FeedbackStyled from "./FeedbackStyled";
import {FeedbackProps} from "../../../types/Props";

function Feedback({text}: FeedbackProps) {
  return (
    <FeedbackStyled>
      <h1>{text}</h1>
    </FeedbackStyled>
  );
}

export default Feedback;
