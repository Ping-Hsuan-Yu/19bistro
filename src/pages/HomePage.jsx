import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Quiz/19-logo.png";
import imgBox from "../img/Quiz/bartender.png";
import imgIG from "../img/Quiz/IG.png";
import imgLine from "../img/Quiz/Line.png";
import imgFB from "../img/Quiz/FB.png";
import moon from "../img/Quiz/moon.png";
import sun from "../img/Quiz/sun.png";
import styled from "@emotion/styled";
import "../styles/HomePage.css";
import { useParams, useNavigate } from "react-router-dom";

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

const Main = styled.section`
  position: relative;
  width: 100%;
  min-height: 88vh;
  padding: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--white);
`;

const H2 = styled.h2`
  font-size: 3.5rem;
  line-height: 1.05;
`;

const HP = styled.p`
  font-size: 1.125rem;
  line-height: 1.2;
  padding: 30px 0 30px 0;
`;

const Sci = styled.ul`
  position: absolute;
  bottom: 3rem;
  display: flex;
  left: 9rem;
  z-index: 2;
`;

const HomePage = () => {
  const [isActive, setActive] = useState("active");
  const handleToggle = () => {
    setActive(!isActive);
  };
  let navigate = useNavigate();

  return (
    <div className={isActive ? "active" : "dark"}>
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
      <Main>
        <div className="content">
          <div className="textBox">
            <H2>
              宜酒心調
              <br />
              屬於你心中的<span>調酒</span>
              <HP>藉由此心理測驗，找到你們的共同點，祝有情人終成眷屬</HP>
            </H2>

            <Link to="/quizPage/transForm">前往測驗</Link>
          </div>
          <div className="imgBox">
            <img className="mainLogo" src={imgBox} alt="" />
          </div>
        </div>
        <Sci className="sci">
          <li>
            <a href="/">
              <img src={imgIG} alt="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={imgFB} alt="" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={imgLine} alt="" />
            </a>
          </li>
        </Sci>
      </Main>
    </div>
  );
};

export default HomePage;
