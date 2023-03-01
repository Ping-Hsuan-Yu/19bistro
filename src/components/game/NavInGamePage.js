import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../../img/19nav.svg";

import Swal from "sweetalert2"; //彈出效果的套件
import "animate.css"; //另外用animate css改變動畫

//設定彈出小視窗的樣式跟屬性
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    color: "var(--primary-color)",
    background: "var(--bg-color)",
    showClass: {
        popup: "animate__animated animate__slideInRight animate__faster",
    },
    hideClass: {
        popup: "animate__animated animate__fadeOutUp animate__faster",
    },
});

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    background-color: var(--primary-color);
    padding: 0 10%;
`;
const Img = styled.img`
    transition: 3.8s ease;
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

const Navbar = ({ angle }) => {
    let navigate = useNavigate();
    console.log(angle);
    return (
        <Nav>
            <Img
                style={{ transform: `translate(-50%, 0) rotate(${angle}deg)` }}
                src={logo}
                alt=""
                onClick={() => {
                    navigate("/");
                }}
            />
            <Button
                onClick={() => {
                    Toast.fire({
                        title: "已呼叫服務人員，請耐心等候",
                    });
                }}
            >
                服務鈴
            </Button>
            <Button
                onClick={() => {
                    navigate("/games");
                }}
            >
                離開
            </Button>
        </Nav>
    );
};

export default Navbar;
