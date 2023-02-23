import React from "react";
import styled from "@emotion/styled";
import Nav from "../components/game/Nav";
import NavInGamePage from "../components/game/NavInGamePage";
import Game from "../components/game/Game";
import PageTitle from "../components/game/PageTitle";
import { Link } from "react-router-dom";

const GameContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 32px;
`;

const Games = () => {
    let game = ["真心話大冒險", "酒司令", "終極密碼"];
    return (
        <>
            <Nav />
            <PageTitle title={"喝酒の小遊戲"} />
            <GameContainer className="gameContainer">
                <Link to="/games/game1">
                    <Game gameName={game[0]} gameIndex={1} />
                </Link>
                <Link to="/games/game2">
                    <Game gameName={game[1]} gameIndex={2} />
                </Link>
                <Link to="/games/game3">
                    <Game gameName={game[2]} gameIndex={3} />
                </Link>
            </GameContainer>
        </>
    );
};

export default Games;
