import React, { useState } from "react";
import styled from "@emotion/styled";
import NavInGamePage from "../components/game/NavInGamePage";
import PageTitle from "../components/game/PageTitle";
import bottle from "../img/bottle.png";

const BottleContainer = styled.div`
    text-align: center;
    margin: 6rem 0;
`;

const BottleImg = styled.img`
    // transform: rotate(45deg);
    height: 50vh;
    transition: 3.8s ease;
`;

const Touch = styled.h5`
    position: absolute;
    top: 58%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 3rem;
    background-color: rgba(217, 217, 217, 78%);
    padding: 32px;
    border-radius: 16px;
    text-align: center;
    cursor: pointer;
`;

const Desc = styled.h3`
    color: rgb(107, 102, 97);
    text-align: center;
`;

const Game2 = () => {
    // 取消網頁的選取事件，避免文字或圖片反白影響使用者體驗
    document.onselectstart = function () {
        return false;
    };

    // let bt = document.querySelector("#bottle");

    let [angle, setAngle] = useState(0);

    const clickHandler = function (e) {
        console.log("click");
        let btn = e.target;

        btn.style.visibility = "hidden";
        setAngle(angle + Math.floor(Math.random() * 36 + 1) * 10 + 360 * 10);

        console.log(angle);
        // bt.style.transition = "3.8s ease";
        // bt.style.transform = `rotate(${angle}deg)`;

        setTimeout(() => {
            btn.style.visibility = "visible";
        }, 3800);
    };

    return (
        <>
            <NavInGamePage />
            <PageTitle title={"酒司令"} />
            <Desc>- 轉到你就喝，賣拷貝 -</Desc>
            <BottleContainer>
                <BottleImg
                    src={bottle}
                    alt="bottle"
                    id="bottle"
                    style={{ transform: `rotate(${angle}deg)` }}
                />
                <Touch onClick={clickHandler}>輕觸轉動酒瓶</Touch>
            </BottleContainer>
        </>
    );
};

export default Game2;
