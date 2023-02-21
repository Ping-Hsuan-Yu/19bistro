import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Menu.css";

import Nav from "../components/menu/Nav";
import CartTabs from "../components/cart/CartTabs";
import CartCard from "../components/cart/CartCard";
import styled from "styled-components";

const active = {
  cart: "active-scroll-spy",
  order: "",
};

const Container = styled.div`
  margin: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const SendBtn = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: 0;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 700;
  position: absolute;
  right: calc(50% - 48px);
  bottom: 32px;
`;

function Cart() {
  //找購物車此桌號有多少東西
  const [cartDataList, setCartDataList] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState({ qty: 0, class: "" });
  const [sendOrderBtn, setSendOrderBtn] = useState("block");
  const { table } = useParams();
  const btnInner = {
    href: "/menu/" + table,
    text: "回到菜單",
  };

  useEffect(() => {
    axios
      .post("http://localhost:1802/cart", { tableNum: table })
      .then(function (response) {
        setCartDataList(response.data);
      });
    axios
      .post("http://localhost:1802/totalquantity", { tableNum: table })
      .then(function (response) {
        if (response.data[0].quantity) {
          setTotalQuantity({ qty: response.data[0].quantity, class: "show" });
        } else {
          setTotalQuantity({ qty: 0, class: "show" });
          //不要顯示"送出訂單"按鈕
          setSendOrderBtn("none");
        }
      });
  }, []);

  let navigate = useNavigate();
  const sendOrder = () => {
    axios.post("http://localhost:1802/sendorder", { tableNum: table });
    alert("訂單已送出");
    navigate("/");
  };

  return (
    <>
      <Nav btnInner={btnInner} totalQuantity={false} />
      <CartTabs
        active={active}
        table={table}
        totalQuantity={totalQuantity}
        totalOrder={false}
      />
      <Container>
        {cartDataList.map((obj) => (
          <CartCard
            dataList={obj}
            key={obj.itemNum}
            totalQuantity={totalQuantity}
            setTotalQuantity={setTotalQuantity}
          />
        ))}
      </Container>
      <SendBtn
        style={{ display: sendOrderBtn }}
        type="button"
        onClick={sendOrder}
      >
        送出訂單
      </SendBtn>
    </>
  );
}

export default Cart;
