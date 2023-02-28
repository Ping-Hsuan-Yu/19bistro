import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/Quiz/19-logo.png";
import imgBox from "../img/Quiz/bartender.png";
import imgIG from "../img/Quiz/IG.png";
import imgLine from "../img/Quiz/Line.png";
import imgFB from "../img/Quiz/FB.png";
import moon from "../img/Quiz/moon.png";
import sun from "../img/Quiz/sun.png";
import smoke from "../img/Quiz/smoke.png";
// import styled from "@emotion/styled";
import styled, { keyframes } from "styled-components";
import "../styles/HomePage.css";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

// 煙霧效果
const smoke1 = keyframes`
  0% {
    filter: blur(0px);
    transform: translateY(0px) scale(1);
    opacity: 0;
  }
  25% {
    filter: blur(3px);
    transform: translateY(-10px) scale(1.05);;
    opacity: 0.5;
  }
  50% {
    filter: blur(5px);
    transform: translateY(-20px) scale(1.1);;
    opacity: 1;
  }
  75% {
    filter: blur(5px);
    transform: translateY(-30px) scale(1.15);;
    opacity: 0.5;
  }
  100% {
    filter: blur(7px);
    transform: translateY(-40px) scale(1.2);;
    opacity: 0;
  }

`;

const smoke2 = keyframes`
  0% {
    filter: blur(0px);
    transform: translateY(0px) scale(-1 , 1);
    opacity: 0;
  }
  25% {
    filter: blur(3px);
    transform: translateY(-10px) scale(-1 , 1.05);;
    opacity: 0.5;
  }
  50% {
    filter: blur(5px);
    transform: translateY(-20px) scale(-1 , 1.1);;
    opacity: 1;
  }
  75% {
    filter: blur(5px);
    transform: translateY(-30px) scale(-1 , 1.15);;
    opacity: 0.5;
  }
  100% {
    filter: blur(7px);
    transform: translateY(-40px) scale(-1 , 1.2);;
    opacity: 0;
  }

`;

const smoke3 = keyframes`
  0% {
    filter: blur(0px);
    transform: translateY(0px) scale(-1 , 1);
    opacity: 0;
  }
  25% {
    filter: blur(3px);
    transform: translateY(-20px) scale(-1 , 1.05);;
    opacity: 0.5;
  }
  50% {
    filter: blur(5px);
    transform: translateY(-40px) scale(-1 , 1.1);;
    opacity: 1;
  }
  75% {
    filter: blur(5px);
    transform: translateY(-60px) scale(-1 , 1.15);;
    opacity: 0.5;
  }
  100% {
    filter: blur(7px);
    transform: translateY(-80px) scale(-1 , 1.2);;
    opacity: 0;
  }

`;

const SmokeWrap = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  z-index: 3;
  margin: 0rem 4rem 5rem 0;
`;

const SmokeEffect = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  background-image: url(${smoke});
  filter: blur(5px);
  transform-origin: 50% 50%;
  animation: ${smoke1} 3s linear infinite;
  animation-delay: 0.5s;
`;

const SmokeEffect2 = styled(SmokeEffect)`
  animation: ${smoke2} 3s linear infinite;
  animation-delay: 1.5s;
`;

const SmokeEffect3 = styled(SmokeEffect)`
  width: 50px;
  animation: ${smoke3} 4s linear infinite;
  animation-delay: 2.5s;
`;

const Main = styled.section`
  position: relative;
  width: 100%;
  height: 87vh;
  padding: 1rem 0 0 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--white);
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 2;
`;

const H2 = styled.h2`
  font-size: 4rem;
  color: var(--black);
  line-height: 1.1em;
  font-weight: 400;
  margin-left: 3.5rem;
  margin-top: 3rem;
`;

const HP = styled.p`
  font-size: 1.5rem;
  line-height: 1.2;
  padding: 20px 0 5px 0;
  margin-right: 1.1rem;
  color: var(--black);
`;

const Sci = styled.ul`
  position: absolute;
  bottom: 2rem;
  display: flex;
  left: 2rem;
  z-index: 2;
`;

const HomePage = () => {
  const [isActive, setActive] = useState("active");
  const handleToggle = () => {
    setActive(!isActive);
  };
  let navigate = useNavigate();

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
          <Content>
            <div className="textBox">
              <H2>
                宜酒心調
                <br />
                屬於你心中的<span>調酒</span>
                <HP>
                  探索你的酒館靈魂！透過調酒的心理測驗，了解自己的個性特質，並發掘出最適合你的調酒風格
                </HP>
              </H2>

              <Link to="/quizPage/transForm">前往測驗</Link>
            </div>
            <div className="imgBox">
              <img className="mainLogo" src={imgBox} alt="" />
              <SmokeWrap>
                <SmokeEffect></SmokeEffect>
                <SmokeEffect></SmokeEffect>
                <SmokeEffect></SmokeEffect>
                <SmokeEffect2></SmokeEffect2>
                <SmokeEffect2></SmokeEffect2>
                <SmokeEffect2></SmokeEffect2>
                <SmokeEffect3></SmokeEffect3>
                <SmokeEffect3></SmokeEffect3>
                <SmokeEffect3></SmokeEffect3>
                <SmokeEffect3></SmokeEffect3>
              </SmokeWrap>
            </div>
          </Content>
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
    </motion.div>
  );
};

export default HomePage;
