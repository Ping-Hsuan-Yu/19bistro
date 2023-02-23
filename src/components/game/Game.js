import React from "react";
import styled from "styled-components";
import game1 from "../../img/真心話大冒險.png";
import game2 from "../../img/酒司令.png";
import game3 from "../../img/終極密碼.png";

import "../../styles/game/style.css"

const GameLink = styled.a`
  width: calc((100% - 128px) / 3);
  // transition: top 5s ease;
  text-decoration: none;
  color: var(--primary-color);
`;
const GameBannerWrapper = styled.div`
  height: 50vh;
  border: 3px solid var(--primary-color);
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameBanner = styled.img`
  border-radius: 28px;
  object-fit: cover;
  // width: 100%;
`;

const GaneName = styled.h3`
  text-align: center;
  margin: 1rem;
`;

const Game = ({ gameName, gameIndex }) => {
  let gameBanners = [game1, game2, game3];
  return (
    <>
      <GameLink href="/game/{gameIndex}">
        <div className="game">
          <GameBannerWrapper className="gameImage">
            <GameBanner src={gameBanners[gameIndex - 1]} alt={gameName} />
          </GameBannerWrapper>
          <GaneName>/ {gameName} /</GaneName>
        </div>
      </GameLink>
    </>
  );
};

export default Game;
