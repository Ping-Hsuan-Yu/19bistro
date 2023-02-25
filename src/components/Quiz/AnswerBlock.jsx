import React, { useState, useEffect, forwardRef } from "react";

const AnswerBlock = ({ answerOptions, chosenAnswers }, ref) => {
  const [result, setResult] = useState(null);
  const randomContent = Math.ceil(Math.random() * 6);

  useEffect(() => {
    answerOptions.forEach((answer) => {
      if (
        chosenAnswers.includes(answer.combination[0]) &&
        chosenAnswers.includes(answer.combination[1]) &&
        chosenAnswers.includes(answer.combination[2]) &&
        chosenAnswers.includes(answer.combination[3])
      ) {
        setResult(answer);
      } else if (!result) {
        setResult(answerOptions[randomContent]);
      }
    });
  }, [result]);
  console.log(result);
  return (
    <div ref={ref} className="answer-block">
      {/* <h2 className="quiz-h2">{result?.text}</h2> */}
      <img src={result?.img} alt={result?.text} />
    </div>
  );
};

export default forwardRef(AnswerBlock);
