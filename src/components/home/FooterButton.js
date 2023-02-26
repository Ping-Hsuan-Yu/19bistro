import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import menu from "../../img/btnimages/19btn-01.png";
import treat from "../../img/btnimages/19btn-02.png";
import game from "../../img/btnimages/19btn-03.png";
import test from "../../img/btnimages/19btn-04.png";

const Container = styled.div`
  margin: 0 10%;
`;
const Quarters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.7rem;
`;
const Button = styled.button`
  border-radius: 10px;
  padding: 0.5rem;
  border: none;
  background-color: var(--primary-color);
  color: var(--bg-color);
`;
const Insidelayer = styled.div`
  border-radius: 5px;
  width: 100%;
  margin: 0 0 0.5rem 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color);
  color: var(--primary-color);
`;
const Insidetext = styled.h4`
  writing-mode: vertical-lr;
  margin: 1rem;
`;
const Img = styled.img`
  height: 6rem;
`;

const FooterButton = () => {
  let navigate = useNavigate();

  const btnname = [
    ["想來點", "怎麼點怎麼好吃", menu, "/menu"],
    ["我請你", "一點心意不用放在心上", treat, "/drink"],
    ["來玩吧", "要玩手機不如大家一起玩", game, "/games"],
    ["酒測值", "你到底還行不行", test, "/quizPage"],
  ];

  return (
    <Container>
      <Quarters>
        {btnname.map((i, e) => (
          <Button
            key={`footbtn${e}`}
            onClick={() => {
              navigate(i[3]);
            }}
          >
            <Insidelayer>
              <Img src={i[2]} alt="" />
              <Insidetext className="insidetext">{i[0]}</Insidetext>
            </Insidelayer>
            {i[1]}
          </Button>
        ))}
      </Quarters>
    </Container>
  );
};

export default FooterButton;
