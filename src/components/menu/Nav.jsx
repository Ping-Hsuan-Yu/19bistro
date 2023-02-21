import React from "react";
import styled from "styled-components";
import logo from "../../img/19nav.svg";
import { useNavigate } from "react-router-dom";

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  height: 80px;
  background-color: var(--primary-color);
`;

const Button = styled.button`
  background-color: var(--bg-color);
  color: var(--primary-color);
  border: 0;
  padding: 10px 32px;
  font-size: 1rem;
  font-weight: 500;
`;

const Img = styled.img`
  height: 60px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Nav = ({ btnInner, totalQuantity }) => {
  const { href, text } = btnInner;
  let navigate = useNavigate();
  return (
    <NavBar>
      <Img
        src={logo}
        alt=""
        onClick={() => {
          navigate("/");
        }}
      />
      <Button
        onClick={() => {
          alert("!");
        }}
      >
        服務鈴
      </Button>
      <Button
        onClick={() => {
          navigate(href);
        }}
      >
        {text}
        {totalQuantity && (
          <span className={`totalQuantity ${totalQuantity.class}`}>
            {totalQuantity.qty}
          </span>
        )}
      </Button>
    </NavBar>
  );
};

export default Nav;
