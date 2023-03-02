import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Menu.css";

import Nav from "../components/menu/Nav";
import CartTabs from "../components/cart/CartTabs";
import OrderCard from "../components/cart/OrderCard";
import styled from "styled-components";
import Swal from "sweetalert2";
import 'animate.css';

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  color: "var(--primary-color)",
  background: "var(--bg-color)",
  showClass: {
    popup: 'animate__animated animate__slideInRight animate__faster'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp animate__faster'
  }
});

const CheckoutAlert = Swal.mixin({
  title: "<h4>已通知櫃檯人員，請直接至櫃檯結帳。</h4><h4>離開前請記得隨身物品。</h4><h4>酒後不開車，安全有保障。</h4>",
  position: "center",
  showConfirmButton: false,
  color: "var(--primary-color)",
  background: "var(--bg-color)",
  showClass: {
    popup: 'animate__animated animate__fadeInDown animate__fast'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutDown animate__fast'
  }
})

const active = {
  cart: "",
  order: "active-scroll-spy",
};

const Container = styled.div`
  margin: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const CheckoutBtn = styled.button`
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

function Order() {
  const [totalOrder, setTotalOrder] = useState({ qty: 0, class: "" });
  //找此桌號訂單有多少東西
  const [orderDataList, setOrderDataList] = useState([]);
  const [Btn, setBtn] = useState("block");
  const { table } = useParams();
  const btnInner = {
    href: "/menu/" + table,
    text: "回到菜單",
  };

  useEffect(() => {
    axios
      .post("http://localhost:1802/order", { tableNum: table })
      .then(function (response) {
        setOrderDataList(response.data);
      });
    axios
      .post("http://localhost:1802/totalorder", { tableNum: table })
      .then(function (response) {
        if (response.data[0].quantity) {
          setTotalOrder({ qty: response.data[0].quantity, class: "show" });
        } else {
          setTotalOrder({ qty: 0, class: "show" });
          setBtn("none")
        }
      });
  }, []);
  return (
    <>
      <Nav btnInner={btnInner} totalQuantity={false} table={table} Toast={Toast}/>
      <CartTabs
        active={active}
        table={table}
        totalQuantity={false}
        totalOrder={totalOrder}
      />
      <Container>
        {orderDataList.map((obj, index) => (
          <OrderCard dataList={obj} key={index} />
        ))}
      </Container>
      <CheckoutBtn
        style={{ display: Btn }}
        type="button"
        onClick={()=>{axios.post("http://localhost:1802/callserver", { tableNum: table });CheckoutAlert.fire()}}
      >
        結帳
      </CheckoutBtn>
    </>
  );
}

export default Order;
