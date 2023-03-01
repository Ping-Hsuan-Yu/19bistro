import React, { useState } from "react";
import styled from "@emotion/styled";
import NavInGamePage from "../components/game/NavInGamePage";
import PageTitle from "../components/game/PageTitle";
import axios from "axios";

const QuestionBanner = styled.div`
    border: 3px dashed var(--primary-color);
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 4rem;
    padding: 1.5rem;
`;

const QuestionContainer = styled.div`
    height: 350px;
    display: flex;
    align-items: center;
`;

const Question = styled.h3`
    font-size: 5rem;
    text-align: center;
`;

const SelectType = styled.select`
    border: 2px solid;
    border-color: var(--body-font-family);
    font-size: 1.5rem;
    padding: 0.75rem;
    background-color: transparent;
    border-radius: 12px;
    width: 150px;
    text-align: center;
    color: var(--body-font-family);
`;

const Type = styled.option`
    font-size: 1rem;
    color: black;
`;

const Button = styled.button`
    width: 48%;
    color: white;
    padding: 1.5rem 2.5rem;
    font-size: 2rem;
    border-radius: 12px;
`;

const TruthBtn = styled(Button)`
    background-color: rgba(190, 30, 30, 30%);
    border: 3px solid var(--primary-color);
`;

const DareBtn = styled(Button)`
    background-color: rgba(60, 80, 210, 50%);
    border: 3px solid var(--secondary-color);
`;

const ButtonContainer = styled.div`
    margin: 1.5rem 4rem;
    display: flex;
    justify-content: space-between;
`;

const Game1 = () => {
    // 取消網頁的選取事件，避免文字或圖片反白影響使用者體驗
    document.onselectstart = function () {
        return false;
    };

    let [questions, setQuestions] = useState([]);
    let [questionShow, setQuestionShow] = useState("選擇真心話or大冒險");
    let [truthBtn, settruthBtn] = useState("真心話");
    let [dareBtn, setDareBtn] = useState("大冒險");
    let [bannerCSS, setBannerCSS] = useState({});
    let choose = "";
    let index = 0;
    // console.log(questions);

    const changeHandler = (e) => {
        readQuestionJSON(e.target.value);
    };

    const readQuestionJSON = async (type) => {
        try {
            let result = await axios.get(
                "https://raw.githubusercontent.com/Chengyou-Xie/GamePractice/master/gameQuestion/db.json"
            );
            setQuestions(result.data.question[type]);
        } catch (e) {
            console.log(e);
        }
    };

    const clickHandler = (e) => {
        choose = e.target.innerText;

        if (choose.includes("真心話")) {
            choose = "真心話";
            settruthBtn("真心話😍");
            setDareBtn("大冒險");
            setBannerCSS({
                color: "var(--bg-color)",
                backgroundColor: "var(--primary-color)",
                borderColor: "var(--primary-color)",
            });
        } else if (choose.includes("大冒險")) {
            choose = "大冒險";
            settruthBtn("真心話");
            setDareBtn("大冒險😈");
            setBannerCSS({
                color: "var(--bg-color)",
                backgroundColor: "var(--secondary-color)",
                borderColor: "var(--secondary-color)",
            });
        }

        if (questions.length == 0) {
            setQuestionShow("請選擇類型");
            return;
        }

        index = Math.floor(Math.random() * questions[choose].length);
        setQuestionShow(questions[choose][index]);
    };

    return (
        <>
            <NavInGamePage />
            <PageTitle title={"真心話大冒險"} />
            <QuestionBanner className="questionBanner" style={bannerCSS}>
                <QuestionContainer>
                    <Question id={"question"}>{questionShow}</Question>
                </QuestionContainer>
                <SelectType onChange={changeHandler}>
                    <Type selected disabled>
                        請選擇
                    </Type>
                    <Type value={"初識拉"}>初識拉</Type>
                    <Type value={"死黨"}>死黨</Type>
                    <Type value={"慣老闆"}>慣老闆</Type>
                    <Type value={"戀愛ing"}>戀愛ing</Type>
                    <Type value={"不可以色色"}>不可以色色</Type>
                </SelectType>
            </QuestionBanner>
            <ButtonContainer>
                <TruthBtn className="truth" onClick={clickHandler}>
                    {truthBtn}
                </TruthBtn>
                <DareBtn className="dare" onClick={clickHandler}>
                    {dareBtn}
                </DareBtn>
            </ButtonContainer>
        </>
    );
};

export default Game1;
