import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../../img/19nav.svg";

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
  background-color: var(--bg-color);
  color: var(--primary-color);
  border: 0;
  padding: 10px 32px;
  font-size: 1rem;
  font-weight: 500;
`;

const Navber = () => {
  let navigate = useNavigate();
  return (
    <Nav>
      <Img
        src={logo}
        alt=""
        onClick={() => {
          navigate("/");
        }}
      />
      <Button>服務鈴</Button>
      <Button>結帳</Button>
    </Nav>
  );
};

export default Navber;
