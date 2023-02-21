import React from "react";
import { encode } from "base64-arraybuffer";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const OrderInfo = styled.div`
  width: calc((100vw - 128px) / 6);
  text-align: start;
  padding-left: 16px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const OrderImg = styled.img`
  width: calc((100vw - 128px) / 6);
  height: calc((100vw - 128px) / 6);
  object-fit: contain;
`;

const MealName = styled.h5`
  margin: 0;
`;

const OrderQty = styled.div`
  background-color: var(--primary-color);
  padding: 4px;
  display: inline-block;
  color: white;
  font-size: 1.2rem;
`;

const OrderCard = ({ dataList }) => {
  const { quantity, doneOrNot, mealName, image } = dataList;
  let imgsrc = encode(image.data);
  return (
    <Row>
      <OrderInfo>
        <div>
          <MealName>{mealName}</MealName>
          <span>{doneOrNot}</span>
        </div>
        <OrderQty>{quantity}</OrderQty>
      </OrderInfo>
      <OrderImg src={"data:image/png;base64," + imgsrc} alt="" />
    </Row>
  );
};

export default OrderCard;
