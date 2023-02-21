const QuestionBlock = ({
  unansweredQuestionIds,
  quizItemId,
  question,
  chosenAnswerItems,
  setChosenAnswerItems,
  setUnansweredQuestionIds,
}) => {
  const handleClick = () => {
    // 選項點選內容
    setChosenAnswerItems((prevState) => [...prevState, question.text]);

    setUnansweredQuestionIds(
      unansweredQuestionIds.filter((id) => id !== quizItemId)
    );
  };

  const validPick =
    !chosenAnswerItems?.includes(question.text) &&
    !unansweredQuestionIds?.includes(quizItemId);
  return (
    <div>
      <button
        className="question-block"
        onClick={handleClick}
        //! 當選到其他選項時，禁止點選其他
        disabled={validPick}
      >
        <img className="img-selection" src={question.img} alt={question.alt} />
        <h3 className="quiz-h3">{question.text}</h3>
        <p className="quiz-p">
          <a href={question.url}>{question.credit}</a>
          <a href="http://youtube.com">Unsplash</a>
        </p>
      </button>
    </div>
  );
};

export default QuestionBlock;
