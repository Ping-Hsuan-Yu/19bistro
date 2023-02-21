import React, { useState } from "react";
import { encode } from "base64-arraybuffer";
import axios from "axios";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const CartInfo = styled.div`
  width: calc((100vw - 128px) / 6);
  text-align: start;
  padding-left: 16px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  & h5 {
    margin: 0;
  }
`;

const CartInput = styled.div`
  background-color: var(--primary-color);
  padding: 4px;
  display: inline-block;
  color: white;
  & button {
    border: 0;
    background: none;
    color: white;
    font-size: 1.2rem;
  }
  & span {
    font-size: 1.2rem;
  }
`;

const CartCard = ({ dataList, totalQuantity, setTotalQuantity }) => {
  const totalQTY = totalQuantity.qty;
  const { quantity, mealName, price, image } = dataList;
  let imgsrc = encode(image.data);
  const [qty, setQTY] = useState(quantity);
  const handleQuantity = (type) => {
    if (type) {
      setQTY(qty + 1);
      setTotalQuantity({ qty: totalQTY + 1, class: "show" });
      axios.post("http://localhost:1802/adjustcart", {
        itemNum: dataList.itemNum,
        tableNum: dataList.tableNum,
        quantity: qty + 1,
      });
    } else {
      const minusOne = () => {
        setQTY(qty - 1);
        setTotalQuantity({ qty: totalQTY - 1, class: "show" });
        axios.post("http://localhost:1802/adjustcart", {
          itemNum: dataList.itemNum,
          tableNum: dataList.tableNum,
          quantity: qty - 1,
        });
      };
      if (qty === 1) {
        // if (confirm("確？")) {
        minusOne();
        // }
      } else {
        minusOne();
      }
    }
  };

  return (
    <Row style={{ display: qty <= 0 && "none" }}>
      <CartInfo>
        <div>
          <h5>{mealName}</h5>
          <span>${price}</span>
        </div>
        <CartInput>
          <button type="button" onClick={() => handleQuantity(0)}>
            <i className="bi bi-dash-lg"></i>
          </button>
          <span>{qty}</span>
          <button
            type="button"
            onClick={() => handleQuantity(1)}
            style={{ visibility: qty >= 9 && "hidden" }}
          >
            <i className="bi bi-plus-lg"></i>
          </button>
        </CartInput>
      </CartInfo>
      <img className="cartImg" src={"data:image/png;base64," + imgsrc} alt="" />
    </Row>
  );
};

export default CartCard;
