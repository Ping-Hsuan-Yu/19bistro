import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Tabs = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 0;
`;


const CartTabs = ({ active, table, totalQuantity, totalOrder }) => {
  return (
    <Tabs>
      <li className={`w50 tabItem ${active.cart}`}>
        <Link to={"/cart/" + table}>
          購物車
          {totalQuantity && (
            <span className={`totalQuantity ${totalQuantity.class}`}>
              {totalQuantity.qty}
            </span>
          )}
        </Link>
      </li>
      <li className={`w50 tabItem ${active.order}`}>
        <Link to={"/order/" + table}>
          已點餐點
          {totalOrder && (
            <span className={`totalQuantity ${totalOrder.class}`}>
              {totalOrder.qty}
            </span>
          )}
        </Link>
      </li>
    </Tabs>
  );
};

export default CartTabs;
