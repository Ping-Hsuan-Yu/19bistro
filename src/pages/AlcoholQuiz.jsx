import React from "react";
import { useState, useEffect, createRef } from "react";
import Title from "../components/Quiz/Title";
import QuestionsBlock from "../components/Quiz/QuestionsBlock";
import AnswerBlock from "../components/Quiz/AnswerBlock";
import moon from "../img/Quiz/moon.png";
import sun from "../img/Quiz/sun.png";
import logo from "../img/Quiz/19-logo.png";
import styled from "@emotion/styled";
import wall from "../img/Quiz/wall.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/quiz.css";

const Img = styled.img`
  height: 60px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
`;
const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: var(--bg-color);
`;

const Background = styled.div`
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(#f00, rgba(0, 0, 0, 0.3)), url(${wall});
  background-size: cover;
  background-blend-mode: multiply;
  z-index: -9999;
`;

const AlcoholQuiz = () => {
  let navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [chosenAnswerItems, setChosenAnswerItems] = useState([]);
  const [unansweredQuestionIds, setUnansweredQuestionIds] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isActive, setActive] = useState("active");
  const [navColor, setnavColor] = useState("var(--primary-color)");
  const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    background-color: ${navColor};
    padding: 0 10%;
    position: fixed;
    width: 100%;
    z-index: 9999;
  `;

  const listenScrollEvent = () => {
    window.scrollY > 50
      ? setnavColor("rgba(255, 0, 0, 0.5)")
      : setnavColor("var(--primary-color)");
  };
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
      const response = await fetch(
        "https://raw.githubusercontent.com/Ping-Hsuan-Yu/19bistro/main/db.json"
      );
      const json = await response.json();
      console.log(json);
      setQuiz(json.quiz);
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

  // scroll bar
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <motion.div
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        duration: 0.75,
      }}
      variants={{
        initialState: {
          opacity: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        },
        animateState: {
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        },
        exitState: {
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        },
      }}
    >
      <Background>
        <Nav>
          <Img
            src={logo}
            alt=""
            onClick={() => {
              navigate("/");
            }}
          />
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
            {/* <Title title={quiz?.title} subtitle={quiz?.subtitle} /> */}
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
      </Background>
    </motion.div>
  );
};

export default AlcoholQuiz;
