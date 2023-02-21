import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Menu.css";

import Nav from "../components/menu/Nav";
import CartTabs from "../components/cart/CartTabs";
import OrderCard from "../components/cart/OrderCard";

const active = {
  cart: "",
  order: "active-scroll-spy",
};

function Order() {
  const [totalOrder, setTotalOrder] = useState({ qty: 0, class: "" });
  //找此桌號訂單有多少東西
  const [orderDataList, setOrderDataList] = useState([]);
  const { table } = useParams();
  const btnInner = {
    href: "/" + table,
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
        }
      });
  }, []);
  return (
    <>
      <Nav btnInner={btnInner} totalQuantity={false} />
      <CartTabs active={active} table={table} totalQuantity={false} totalOrder={totalOrder}/>
      <div className="container wrap">
        {orderDataList.map((obj, index) => (
          <OrderCard dataList={obj} key={index} />
        ))}
      </div>
    </>
  );
}

export default Order;
