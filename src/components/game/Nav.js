import React from "react";
import styled from "@emotion/styled";
import logo from "../../img/logo.png";

const Navbar = styled.nav`
    height: 88px;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`;
const Button = styled.button`
    font-size: 1.5rem;
    padding: 0.5rem 0.75rem;
    border-radius: 12px;
    border: none;
    background-color: var(--bg-color);
`;
const Logo = styled.img`
    height: 70px;
    position: absolute;
    top: 9px;
    left: 50%;
    transform: translate(-50%, 0);
`;

const Nav = () => {
    return (
        <Navbar>
            <Button>服務鈴</Button>
            <Logo src={logo} alt="logo" />
            <Button>結帳</Button>
        </Navbar>
    );
};

export default Nav;
