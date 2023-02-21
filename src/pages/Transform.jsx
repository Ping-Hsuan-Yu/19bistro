import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import wall from "../img/Quiz/wall.jpg";
import "../styles/Transform.css";

const TransformBody = styled.div`
  overflow: hidden;
`;
const TransformSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(#f00, rgba(0, 0, 0, 0.3)), url(${wall});
  background-size: cover;
  background-blend-mode: multiply;
  &:before {
    content: '" "';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 620px;
    height: 620px;
    background: radial-gradient(
      rgba(255, 0, 0, 0.75),
      transparent,
      transparent
    );
  }
  &:after {
    content: '" "';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 820px;
    height: 820px;
    background: radial-gradient(
      rgba(255, 0, 0, 0.75),
      transparent,
      transparent
    );
  }
`;

const TransformIcon = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  display: flex;
`;

const Text = styled.h2`
  position: absolute;
  color: #fff;
  font-size: 2em;
  font-weight: normal;
  display: inline-block;
  text-shadow: 0 19px 10px #000;
  box-shadow: 9px 0 0 #fff;
  margin: 17.5rem 0 0 -85%;
`;
// 滑鼠愛心
const handleMouseMove = (event) => {
  let body = document.querySelector(".mainBody");
  let heart = document.createElement("span");
  let x = event.clientX;
  let y = event.clientY;
  heart.classList.add("mouse");
  heart.style.left = x + "px";
  heart.style.top = y + "px";

  let size = Math.random() * 80;
  heart.style.width = 20 + size + "px";
  heart.style.height = 20 + size + "px";

  let transformValue = Math.random() * 360;
  heart.style.transform = "rotate(" + transformValue + " deg)";

  body.appendChild(heart);
  setTimeout(function () {
    heart.remove();
  }, 1000);
};

const Transform = () => {
  return (
    <div className="mainBody" onMouseMove={handleMouseMove}>
      <TransformBody>
        <TransformSection className="bgColor">
          <TransformIcon>
            <svg
              style={{
                width: "16.5rem",
                height: "16.5rem",
                transform: "rotate(20deg)",
                marginBottom: "5rem",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <g
                fill="#B22C27"
                style={{
                  stroke: "#fff",
                  strokeWidth: "0.5px",
                  fill: "transparent",
                  filter: "drop-shadow(0 0px 5px #000) blur(0.5px)",
                }}
              >
                <path
                  className="st0"
                  d="M31.69,13.17h36.46c1.15,0,2.08-0.93,2.08-2.08S69.3,9,68.15,9H31.69c-1.15,0-2.08,0.93-2.08,2.08   S30.54,13.17,31.69,13.17z"
                />
                <path
                  className="st0"
                  d="M87.59,61.57c1.15,0,2.08-0.93,2.08-2.08V29.55c0-5.61-4.56-10.17-10.17-10.17H20.25   c-5.61,0-10.17,4.56-10.17,10.17s4.56,10.17,10.17,10.17h7.55c1.15,0,2.08-0.93,2.08-2.08s-0.93-2.08-2.08-2.08h-7.55   c-3.31,0-6-2.69-6-6s2.69-6,6-6h30.31v10.73h-4.78c-6.55,0-11.88,5.33-11.88,11.88v33.02c0,6.55,5.33,11.88,11.88,11.88h24.87   c1.15,0,2.08-0.93,2.08-2.08s-0.93-2.08-2.08-2.08H45.79c-4.25,0-7.71-3.46-7.71-7.71V46.15c0-4.25,3.46-7.71,7.71-7.71h4.78v12.69   c0,3.46-2.81,6.27-6.27,6.27h-3.27c-1.15,0-2.08,0.93-2.08,2.08s0.93,2.08,2.08,2.08h3.27c5.75,0,10.44-4.68,10.44-10.43V38.45h5   v10.6c0,4.86,3.96,8.82,8.82,8.82H70c1.15,0,2.08-0.93,2.08-2.08S71.15,53.7,70,53.7h-1.44c-2.57,0-4.65-2.09-4.65-4.65v-10.6h3.51   c4.25,0,7.71,3.46,7.71,7.71v33.02c0,6.55,5.33,11.88,11.88,11.88h0.6c1.15,0,2.08-0.93,2.08-2.08s-0.93-2.08-2.08-2.08h-0.6   c-4.25,0-7.71-3.46-7.71-7.71V46.15c0-6.55-5.33-11.88-11.88-11.88h-3.51V23.54h15.6c3.31,0,6,2.69,6,6v29.94   C85.51,60.63,86.44,61.57,87.59,61.57z M59.74,34.28h-5V23.54h5V34.28z"
                />
                <path
                  className="st0"
                  d="M29.12,59.14h-6.58c-4.57,0-8.29-3.72-8.29-8.29v-6.4c0-1.15-0.93-2.08-2.08-2.08s-2.08,0.93-2.08,2.08v6.4   c0,6.87,5.59,12.46,12.46,12.46h6.58c1.15,0,2.08-0.93,2.08-2.08S30.27,59.14,29.12,59.14z"
                />
                <path
                  className="st0"
                  d="M28.94,69.93c-1.15,0-2.08,0.93-2.08,2.08v6.58c0,4.57-3.72,8.29-8.29,8.29h-6.4c-1.15,0-2.08,0.93-2.08,2.08   s0.93,2.08,2.08,2.08h6.4c6.87,0,12.46-5.59,12.46-12.46v-6.58C31.03,70.86,30.09,69.93,28.94,69.93z"
                />
                <path
                  className="st0"
                  d="M46.66,73.66c-1.15,0-2.08,0.93-2.08,2.08s0.93,2.08,2.08,2.08h20.83c1.15,0,2.08-0.93,2.08-2.08   s-0.93-2.08-2.08-2.08H46.66z"
                />
              </g>
            </svg>
            <svg
              style={{
                width: "17.5rem",
                height: "17.5rem",
                transform: "rotate(20deg)",
                marginBottom: "6rem",
                position: "absolute",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <g
                fill="#B22C27"
                style={{
                  stroke: "#333",
                  strokeWidth: "1px",
                  fill: "transparent",
                  filter: "drop-shadow(0 0px 5px #333) blur(0.9px)",
                }}
              >
                <path
                  className="st0"
                  d="M31.69,13.17h36.46c1.15,0,2.08-0.93,2.08-2.08S69.3,9,68.15,9H31.69c-1.15,0-2.08,0.93-2.08,2.08   S30.54,13.17,31.69,13.17z"
                />
                <path
                  className="st0"
                  d="M87.59,61.57c1.15,0,2.08-0.93,2.08-2.08V29.55c0-5.61-4.56-10.17-10.17-10.17H20.25   c-5.61,0-10.17,4.56-10.17,10.17s4.56,10.17,10.17,10.17h7.55c1.15,0,2.08-0.93,2.08-2.08s-0.93-2.08-2.08-2.08h-7.55   c-3.31,0-6-2.69-6-6s2.69-6,6-6h30.31v10.73h-4.78c-6.55,0-11.88,5.33-11.88,11.88v33.02c0,6.55,5.33,11.88,11.88,11.88h24.87   c1.15,0,2.08-0.93,2.08-2.08s-0.93-2.08-2.08-2.08H45.79c-4.25,0-7.71-3.46-7.71-7.71V46.15c0-4.25,3.46-7.71,7.71-7.71h4.78v12.69   c0,3.46-2.81,6.27-6.27,6.27h-3.27c-1.15,0-2.08,0.93-2.08,2.08s0.93,2.08,2.08,2.08h3.27c5.75,0,10.44-4.68,10.44-10.43V38.45h5   v10.6c0,4.86,3.96,8.82,8.82,8.82H70c1.15,0,2.08-0.93,2.08-2.08S71.15,53.7,70,53.7h-1.44c-2.57,0-4.65-2.09-4.65-4.65v-10.6h3.51   c4.25,0,7.71,3.46,7.71,7.71v33.02c0,6.55,5.33,11.88,11.88,11.88h0.6c1.15,0,2.08-0.93,2.08-2.08s-0.93-2.08-2.08-2.08h-0.6   c-4.25,0-7.71-3.46-7.71-7.71V46.15c0-6.55-5.33-11.88-11.88-11.88h-3.51V23.54h15.6c3.31,0,6,2.69,6,6v29.94   C85.51,60.63,86.44,61.57,87.59,61.57z M59.74,34.28h-5V23.54h5V34.28z"
                />
                <path
                  className="st0"
                  d="M29.12,59.14h-6.58c-4.57,0-8.29-3.72-8.29-8.29v-6.4c0-1.15-0.93-2.08-2.08-2.08s-2.08,0.93-2.08,2.08v6.4   c0,6.87,5.59,12.46,12.46,12.46h6.58c1.15,0,2.08-0.93,2.08-2.08S30.27,59.14,29.12,59.14z"
                />
                <path
                  className="st0"
                  d="M28.94,69.93c-1.15,0-2.08,0.93-2.08,2.08v6.58c0,4.57-3.72,8.29-8.29,8.29h-6.4c-1.15,0-2.08,0.93-2.08,2.08   s0.93,2.08,2.08,2.08h6.4c6.87,0,12.46-5.59,12.46-12.46v-6.58C31.03,70.86,30.09,69.93,28.94,69.93z"
                />
                <path
                  className="st0"
                  d="M46.66,73.66c-1.15,0-2.08,0.93-2.08,2.08s0.93,2.08,2.08,2.08h20.83c1.15,0,2.08-0.93,2.08-2.08   s-0.93-2.08-2.08-2.08H46.66z"
                />
              </g>
            </svg>
            {/* 備用酒杯圖 */}
            {/* <svg
                style={{
                  width: "15rem",
                  height: "13rem",
                  transform: "rotate(20deg)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  style={{
                    stroke: "#fff",
                    strokeWidth: "10px",
                    fill: "transparent",
                    filter: "drop-shadow(0 20px 10px #000) blur(2px)",
                  }}
                  d="M432 240c53 0 96-43 96-96s-43-96-96-96c-35.5 0-66.6 19.3-83.2 48H296.2C316 40.1 369.3 0 432 0c79.5 0 144 64.5 144 144s-64.5 144-144 144c-27.7 0-53.5-7.8-75.5-21.3l35.4-35.4c12.2 5.6 25.8 8.7 40.1 8.7zM1.8 142.8C5.5 133.8 14.3 128 24 128H392c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-177 177V464h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H208 120c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V345.9L7 169c-6.9-6.9-8.9-17.2-5.2-26.2z"
                />
              </svg> */}
            <Link to="/quizPage/transForm/alcoholQuiz">
              <Text className="txtType">19'CockTail</Text>
            </Link>
          </TransformIcon>
        </TransformSection>
      </TransformBody>
    </div>
  );
};

export default Transform;
