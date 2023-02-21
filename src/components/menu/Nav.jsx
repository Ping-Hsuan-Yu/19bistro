import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background-color: var(--bg-color);
  color: white;
  border: 0;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 700;
  & a {
    text-decoration: none;
    color: var(--primary-color);
  }
`;

const Nav = ({ btnInner, totalQuantity }) => {
  const { href, text } = btnInner;
  return (
    <nav>
      <Button>呼叫服務人員</Button>
      <Button>
        <Link to={href}>{text}</Link>
        {/* <span className={`totalQuantity`} >{totalQuantity}</span> */}
        {totalQuantity && (
          <span className={`totalQuantity ${totalQuantity.class}`}>
            {totalQuantity.qty}
          </span>
        )}
      </Button>
    </nav>
  );
};

export default Nav;