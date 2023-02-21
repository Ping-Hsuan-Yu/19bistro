import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInout = keyframes`
  0%,
  100% {
    opacity: 0;
  }
  20%,
  60% {
    opacity: 1;
  }
`;

const moveShape = keyframes`
  0% {
  transform: translate(0) rotate(0deg);
  }
  100% {
  transform: translate(300px) rotate(360deg);
  }
`;

const Background = styled.section`
  height: "100vh";
  background-color: "blue";
`;

// const MouseGO = styled.span`
//   overflow: inherit;
//   position: absolute;
//   pointer-events: none;
//   filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.5));
//   animation: ${fadeInout} 1s linear infinite;
//   &:before {
//     content: "";
//     position: absolute;
//     width: 80%;
//     height: 80%;
//     background: url("https://cdn-icons-png.flaticon.com/512/9427/9427529.png");
//     background-size: cover;
//     z-index: 1;
//     animation: ${moveShape} 1s linear infinite;
//   }
// `;

const Cursor = () => {
  const handleMouseMove = (event) => {
    let body = document.querySelector("body");
    let heart = document.createElement("span");
    console.log(event);
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

  return (
    <>
      {/* <Background className="mainBody" onMouseMove={handleMouseMove}>
        <div></div>
      </Background> */}
    </>
  );
};

export default Cursor;
