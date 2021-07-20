import React from "react";
import { AnswerObject } from "../App";

import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

// dangerouslySetInnerHTML
// Behind the scenes when you use dangerouslySetInnerHTML it lets React know that the
// HTML inside of that component is not something it cares about.

// Because React uses a virtual DOM, when it goes to compare the diff against the actual DOM,
// it can straight up bypass checking the children of that node because it knows the HTML is coming from another source.
// So there's performance gains.

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <Wrapper>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    <div>
      {answers.map((answer) => (
        <div key={answer}>
          <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </ButtonWrapper>
        </div>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;
