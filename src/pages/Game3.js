import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
// import Nav from "../../components/game/Nav";
import NavInGamePage from "../components/game/NavInGamePage";
import PageTitle from "../components/game/PageTitle";

import t1 from "../images/mahjong/1筒.png";
import t2 from "../images/mahjong/2筒.png";
import t3 from "../images/mahjong/3筒.png";
import t4 from "../images/mahjong/4筒.png";
import t5 from "../images/mahjong/5筒.png";
import t6 from "../images/mahjong/6筒.png";
import t7 from "../images/mahjong/7筒.png";
import t8 from "../images/mahjong/8筒.png";
import t9 from "../images/mahjong/9筒.png";

import w1 from "../images/mahjong/1萬.png";
import w2 from "../images/mahjong/2萬.png";
import w3 from "../images/mahjong/3萬.png";
import w4 from "../images/mahjong/4萬.png";
import w5 from "../images/mahjong/5萬.png";
import w6 from "../images/mahjong/6萬.png";
import w7 from "../images/mahjong/7萬.png";
import w8 from "../images/mahjong/8萬.png";
import w9 from "../images/mahjong/9萬.png";

import i1 from "../images/mahjong/1條.png";
import i2 from "../images/mahjong/2條.png";
import i3 from "../images/mahjong/3條.png";
import i4 from "../images/mahjong/4條.png";
import i5 from "../images/mahjong/5條.png";
import i6 from "../images/mahjong/6條.png";
import i7 from "../images/mahjong/7條.png";
import i8 from "../images/mahjong/8條.png";
import i9 from "../images/mahjong/9條.png";

const Desc = styled.h3`
    text-align: center;
    color: rgb(102, 102, 102);
    font-size: 4.5rem;
`;
const Limit = styled.span`
    color: var(--primary-color);
    font-size: 5rem;
`;

////////////////////////////////////////////////////
////////////////////////////////////////////////////

const Board = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`;

const Input = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputValue = styled.h5`
    text-align: center;
    font-size: 7rem;
    color: var(--secondary-color);
    writing-mode: vertical-lr;
`;

const Typing = styled.span`
    font-size: 7rem;
    color: var(--secondary-color);
    animation: typing 0.4s step-end 0s infinite alternate forwards;
    writing-mode: vertical-lr;
    padding: 20px 0;
    padding-left: 30px;
`;

const KeyBoard = styled.table`
    border-collapse: separate;
    border-spacing: 10px;
`;

const Td = styled.td`
    border: 2px solid black;
    border-radius: 16px;
    width: 90px;
    height: 90px;
    text-align: center;
    cursor: pointer;
    padding: 6px;
`;

const TdImg = styled.img`
    height: 80px;
`;

const Boom = styled.div`
    width: 550px;
    height: 250px;
    background-color: #e5e1d8;
    border: 5px solid var(--primary-color);
    border-radius: 20px;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;
    text-align: center;
    line-height: 250px;
    font-size: 2.5rem;
`;

////////////////////////////////////////////////////
////////////////////////////////////////////////////

const Game3 = () => {
    // 取消網頁的選取事件，避免文字或圖片反白影響使用者體驗
    document.onselectstart = function () {
        return false;
    };

    const numberType = ["零", "壹", "貳", "參", "肆", "伍", "陸", "柒", "捌", "玖", "拾"];
    // const btnType = ["筒", "條", "萬"];
    const btnsssss = [
        [t1, t2, t3, t4, t5, t6, t7, t8, t9], // 筒
        [i1, i2, i3, i4, i5, i6, i7, i8, i9], // 條
        [w1, w2, w3, w4, w5, w6, w7, w8, w9], // 萬
    ];

    const btns = [
        document.querySelector(".btn1"),
        document.querySelector(".btn2"),
        document.querySelector(".btn3"),
        document.querySelector(".btn4"),
        document.querySelector(".btn5"),
        document.querySelector(".btn6"),
        document.querySelector(".btn7"),
        document.querySelector(".btn8"),
        document.querySelector(".btn9"),
    ];

    let [password, setPassword] = useState(Math.floor(Math.random() * 99) + 1);
    let [input, setInput] = useState([]);
    let [inputValue, setInputValue] = useState(0);
    let [inputWord, setInputWord] = useState("零");
    let [min, setMin] = useState(0);
    let [max, setMax] = useState(100);
    let [boomText, setBoomText] = useState("");

    const clickHandler = (e) => {
        if (e.target.tagName === "IMG") {
            e.stopPropagation();
            clickBtn(e.target);
        } else if (e.target.tagName === "TD") {
            e.stopPropagation();
            clickBtn(e.target.childNodes[0]);
        }
    };

    // 以 element.alt 取得實際點擊按鈕的值
    const clickBtn = (element) => {
        // 輸入數字到 []內，限不超過兩位數
        if (element.alt !== "delete" && element.alt !== "enter") {
            if (input.length < 2) {
                setInput((input) => [...input, element.alt]);
            }
        }

        if (element.alt === "delete") {
            setInput((input) => input.slice(0, -1));
        }

        if (element.alt === "enter") {
            setInput([]);
            changeBtn();
            checkPassword(inputValue);

            setInputValue(0);
        }
    };

    useEffect(() => {
        setInputValue(0);
        input.forEach((item) => {
            setInputValue((inputValue) => parseInt(item) + inputValue * 10);
        });
    }, [input]);

    useEffect(() => {
        setInputWord(updatePage(inputValue));
    }, [inputValue]);

    function checkPassword(inputVal) {
        // // 超出範圍
        if (inputVal <= min || inputVal >= max) {
            setBoomText("蛤，才這樣就醉了 ಠ_ಠ？");
            return;
        }

        if (inputVal > password) {
            setMax(inputVal);
        }

        if (inputVal < password) {
            setMin(inputVal);
        }

        if (inputVal === password) {
            setBoomText("中了💣，喝 ٩(๑❛ᴗ❛๑)۶");
            restart();
        }
    }

    function restart() {
        setPassword(Math.floor(Math.random() * 99) + 1);
        setMin(0);
        setMax(100);
    }

    function updatePage(n) {
        let str = "";
        let arr = n.toString();

        if (arr.length === 3) {
            return "壹佰";
        }

        for (let i = 0; i < arr.length; i++) {
            // 雙位數多個 "拾"，尾數為零不再加上 "零"
            if (i === 1) {
                str += numberType[10];
                if (arr[i] === "0") {
                    break;
                }
            }
            str += numberType[arr[i]];
        }
        return str;
    }

    function changeBtn() {
        btns.forEach((btn, index) => {
            let r = Math.floor(Math.random() * 3);
            btn.childNodes[0].src = btnsssss[r][index];
        });
    }

    function noShow() {
        setBoomText("");
    }

    return (
        <>
            <NavInGamePage />
            <div onClick={noShow}>
                <PageTitle title={"終極密碼"} />
                <Desc>
                    請輸入
                    <Limit> {updatePage(min)} </Limit>～<Limit> {updatePage(max)} </Limit>
                    間的數字
                </Desc>

                <Board>
                    <Input>
                        <InputValue>{inputWord}</InputValue>
                        <Typing>|</Typing>
                    </Input>
                    <KeyBoard onClick={clickHandler}>
                        <tr>
                            <Td className="btn7">
                                <TdImg src={i7} alt="7" />
                            </Td>
                            <Td className="btn8">
                                <TdImg src={w8} alt="8" />
                            </Td>
                            <Td className="btn9">
                                <TdImg src={t9} alt="9" />
                            </Td>
                            <Td rowSpan={2} className="btnDelete">
                                <TdImg
                                    src={require("../images/mahjong/delete.png")}
                                    alt={"delete"}
                                />
                            </Td>
                        </tr>
                        <tr>
                            <Td className="btn4">
                                <TdImg src={i4} alt="4" />
                            </Td>
                            <Td className="btn5">
                                <TdImg src={w5} alt="5" />
                            </Td>
                            <Td className="btn6">
                                <TdImg src={t6} alt="6" />
                            </Td>
                        </tr>
                        <tr>
                            <Td className="btn1">
                                <TdImg src={i1} alt="1" />
                            </Td>
                            <Td className="btn2">
                                <TdImg src={w2} alt="2" />
                            </Td>
                            <Td className="btn3">
                                <TdImg src={t3} alt="3" />
                            </Td>
                            <Td rowSpan={2} className="btnEnter">
                                <TdImg src={require("../images/mahjong/發.png")} alt={"enter"} />
                            </Td>
                        </tr>
                        <tr>
                            <Td colSpan={3} className="btn0">
                                <TdImg src={require("../images/mahjong/零.png")} alt="0" />
                            </Td>
                        </tr>
                    </KeyBoard>
                </Board>
                <Boom style={{ visibility: boomText ? "visible" : "hidden" }}>{boomText}</Boom>
            </div>
        </>
    );
};

export default Game3;
