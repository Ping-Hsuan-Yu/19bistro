import React from "react";
import { useState, useEffect, createRef } from "react";
import Title from "../components/Quiz/Title";
import QuestionsBlock from "../components/Quiz/QuestionsBlock";
import AnswerBlock from "../components/Quiz/AnswerBlock";
import moon from "../img/Quiz/moon.png";
import sun from "../img/Quiz/sun.png";
import logo from "../img/Quiz/19-logo.png";
import styled from "@emotion/styled";
import "../styles/quiz.css";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: var(--primary-color);
  padding: 0 10%;
`;
const Img = styled.img`
  height: 60px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%, 0);
`;
const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: var(--bg-color);
`;

const AlcoholQuiz = () => {
  const [quiz, setQuiz] = useState(null);
  const [chosenAnswerItems, setChosenAnswerItems] = useState([]);
  const [unansweredQuestionIds, setUnansweredQuestionIds] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isActive, setActive] = useState("active");
  const handleToggle = () => {
    setActive(!isActive);
  };

  const refs = unansweredQuestionIds?.reduce((acc, id) => {
    acc[id] = createRef();
    return acc;
  }, {});

  const answerRef = createRef();
  console.log(refs);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/quiz");
      const json = await response.json();
      // console.log(json);
      setQuiz(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const unansweredIds = quiz?.content?.map(({ id }) => id);
    setUnansweredQuestionIds(unansweredIds);
  }, [quiz]);

  // 結果產生
  useEffect(() => {
    if (chosenAnswerItems.length > 0) {
      if (showAnswer) {
        // scroll to answer block
        answerRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (unansweredQuestionIds.length <= 0 && chosenAnswerItems.length >= 1) {
        setShowAnswer(true);
      } else {
        // scroll to highest unansweredQuestionId
        const highestId = Math.min(...unansweredQuestionIds);
        refs[highestId].current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [unansweredQuestionIds, showAnswer, chosenAnswerItems, answerRef, refs]);
  // console.log(chosenAnswerItems);
  // console.log(unansweredQuestionIds);
  return (
    <div>
      <Nav>
        <Img src={logo} alt="" />
        <Button>服務鈴</Button>
        <span
          className={isActive ? "themeSwitch" : "themeSwitch active"}
          onClick={handleToggle}
        >
          <img src={isActive ? moon : sun} alt="" />
        </span>
      </Nav>
      <div className="quiz-body">
        <div className="app">
          <Title title={quiz?.title} subtitle={quiz?.subtitle} />
          {refs &&
            quiz?.content.map((contentItem) => (
              <QuestionsBlock
                key={contentItem.id}
                quizItem={contentItem}
                setChosenAnswerItems={setChosenAnswerItems}
                chosenAnswerItems={chosenAnswerItems}
                setUnansweredQuestionIds={setUnansweredQuestionIds}
                unansweredQuestionIds={unansweredQuestionIds}
                ref={refs[contentItem.id]}
              />
            ))}
          {showAnswer && (
            <AnswerBlock
              answerOptions={quiz?.answers}
              chosenAnswers={chosenAnswerItems}
              ref={answerRef}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AlcoholQuiz;
