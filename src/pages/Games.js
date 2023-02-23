import React from "react";
import styled from "@emotion/styled";

import Navber from "../components/home/Navber";

import Game from "../components/game/Game";
import PageTitle from "../components/game/PageTitle";
import { Link } from "react-router-dom";
import "../styles/game/style.css";

const GameContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 32px;
`;

const G = styled(Link)`
    width: calc((100% - 128px) / 3);
    text-decoration: none;
    color: var(--primary-color);
`;

const Games = () => {
    let game = ["真心話大冒險", "酒司令", "終極密碼"];
    return (
        <>
            <Navber />
            <PageTitle title={"喝酒の小遊戲"} />
            <GameContainer className="gameContainer">
                <G to="/games/game1">
                    <Game gameName={game[0]} gameIndex={1} />
                </G>
                <G to="/games/game2">
                    <Game gameName={game[1]} gameIndex={2} />
                </G>
                <G to="/games/game3">
                    <Game gameName={game[2]} gameIndex={3} />
                </G>
            </GameContainer>
        </>
    );
};

export default Games;
