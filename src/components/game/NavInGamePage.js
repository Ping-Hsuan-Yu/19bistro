import React from "react";
import styled from "@emotion/styled";
import logo from "../../images/logo.png";
import Exit from "../../images/exit.png";
import { Link } from "react-router-dom";

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

const ExitLink = styled.a`
    text-decoration: none;
`;

const ExitImg = styled.img`
    height: 60px;
    color: var(--bg-color);
    cursor: pointer;
`;

const NavInGamePage = () => {
    return (
        <Navbar>
            <Button>服務鈴</Button>
            <Logo src={logo} alt="logo" />
            <Link to="/games">
                <ExitLink>
                    <ExitImg src={Exit} alt="Exit" />
                </ExitLink>
            </Link>
        </Navbar>
    );
};

export default NavInGamePage;
