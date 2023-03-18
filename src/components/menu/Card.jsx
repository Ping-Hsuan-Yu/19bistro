import React, { useState } from "react";
import { encode } from "base64-arraybuffer";
import axios from "axios";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuImg = styled.img`
  width: calc((100vw - 96px) / 5);
  height: calc((100vw - 96px) / 5);
  margin: calc(((100vw - 96px) / 8) - ((100vw - 96px) / 10));
  object-fit: contain;
`;

const MenuInfo = styled.div`
  width: calc((100vw - 96px) / 4);
`;

const MealName = styled.strong`
  display: block;
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 1.2rem;
`;

const Price = styled.span`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
`;

const MealDesc = styled.p`
  color: #6b6661;
`;

const Form = styled.form`
  text-align: center;
`;

const MenuInput = styled.div`
  background-color: var(--primary-color);
  padding: 4px;
  display: inline-block;
  color: white;
`;

const PlusMinus = styled.button`
  border: 0;
  background: none;
  color: white;
  font-size: 1.2rem;
`;
const InputQty = styled.input`
  background-color: var(--primary-color);
  color: white;
  border: 0;
  font-size: 1.2rem;
  width: 12px;
  height: 26px;
  padding: 0;
  text-align: center;
`;

const AddCartBtn = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: 0;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 700;
`;

const Card = ({ props }) => {
  const { totalQuantity, setTotalQuantity, table, Toast } = props;
  const { itemNum, mealName, price, mealDesc, image } = props.obj;
  let imgsrc = encode(image.data);

  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type) => setQuantity(type === 1 ? quantity + 1 : quantity - 1);

  const addToCart = () => {
    setTotalQuantity({ qty: totalQuantity.qty + quantity, class: "show" });
    Toast.fire({
      title: `${mealName} x${quantity}`,
    });
    axios.post("http://localhost:1802/addtocart", {
      tableNum: table,
      itemNum: itemNum,
      quantity: quantity,
    });
  };

  return (
    <Row>
      <Col>
        <MenuInfo>
          <MealName>{mealName}</MealName>
          <Price>${price}</Price>
          <MealDesc>{mealDesc}</MealDesc>
        </MenuInfo>
        <Form>
          <MenuInput>
            <PlusMinus
              type="button"
              onClick={() => handleQuantity(0)}
              style={{ visibility: quantity <= 1 && "hidden" }}
            >
              <i className="bi bi-dash-lg"></i>
            </PlusMinus>
            <InputQty type="number" value={quantity} name="quantity" readOnly />
            <input type="hidden" value={itemNum} name="itemNum" readOnly />
            <input type="hidden" value={table} name="tableNum" readOnly />
            <PlusMinus
              type="button"
              onClick={() => handleQuantity(1)}
              style={{ visibility: quantity >= 9 && "hidden" }}
            >
              <i className="bi bi-plus-lg"></i>
            </PlusMinus>
          </MenuInput>
          <br />
          <br />
          <AddCartBtn type="button" onClick={addToCart}>
            加入購物車
          </AddCartBtn>
        </Form>
      </Col>
      <MenuImg src={"data:image/png;base64," + imgsrc} alt="" />
    </Row>
  );
};

export default Card;
