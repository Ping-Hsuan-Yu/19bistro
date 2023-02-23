import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Menu.css";
import Nav from "../components/menu/Nav";
import Tab from "../components/menu/Tab";
import Card from "../components/menu/Card";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const category = [
  { category: "A", title: "吃飽" },
  { category: "B", title: "燒烤酥炸" },
  // { category: "C", title: "酥炸" },
  { category: "D", title: "滷味" },
  { category: "E", title: "下酒菜" },
  { category: "F", title: "調酒" },
  { category: "G", title: "啤酒" },
  { category: "H", title: "威士忌" },
  { category: "I", title: "SHOT" },
  { category: "J", title: "無酒精" },
];

const Section = styled.section`
  margin: 32px;
`;

const Title = styled.h3`
margin:32px 0;
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const Fixed = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: var(--bg-color);
`;

const Tabs = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 0;
`;

const Block = styled.div`
  width: 100vw;
  height: 135px;
  background-color: var(--bg-color);
`;

function Menu() {
  const [mealDataList, setMealDataList] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState({ qty: 0, class: "" });
  const { table } = useParams();
  // const [tableNum, setTableNum] = useState(table);
  const btnInner = {
    href: "/cart/" + table,
    text: "訂單",
  };
  let navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:1802/menu").then(function (response) {
      setMealDataList(response.data);
    });
    axios
      .post("http://localhost:1802/totalquantity", { tableNum: table })
      .then(function (response) {
        if (response.data[0].quantity) {
          setTotalQuantity({ qty: response.data[0].quantity, class: "show" });
        } else {
          setTotalQuantity({ qty: 0, class: "show" });
        }
      });
    // navigate("/menu"+tableNum)
  }, []);

  const MenuSection = ({ category }) => (
    // <ScrollSpy>
    <Section id={category.category}>
      <Title>{category.title}</Title>
      <Wrap>
        {mealDataList
          .filter((obj) => obj.category === category.category) //check if category match title
          .map((obj) => (
            <Card
              mealData={obj}
              key={obj.itemNum}
              totalQuantity={totalQuantity}
              setTotalQuantity={setTotalQuantity}
              tableNum={table}
            />
          ))}
      </Wrap>
    </Section>
    // </ScrollSpy>
  );

  return (
    <>
      {/* <select
        style={{ position: "fixed", bottom: "0", right: "0" }}
        onChange={(e) => {
          setTableNum(e.target.value);
        }}
      >
        <option value="A1">A1</option>
        <option value="A2">A2</option>
        <option value="A3">A3</option>
        <option value="A4">A4</option>
        <option value="B1">B1</option>
        <option value="B2">B2</option>
        <option value="B3">B3</option>
        <option value="B4">B4</option>
        <option value="B5">B5</option>
        <option value="B6">B6</option>
        <option value="B7">B7</option>
        <option value="B8">B8</option>
        <option value="C1">C1</option>
        <option value="C2">C2</option>
        <option value="C3">C3</option>
        <option value="C4">C4</option>
        <option value="C5">C5</option>
        <option value="D1">D1</option>
        <option value="D2">D2</option>
        <option value="D3">D3</option>
        <option value="D4">D4</option>
      </select> */}
      <Fixed>
        <Nav btnInner={btnInner} totalQuantity={totalQuantity} />
        <Tabs>
          {category.map((obj) => (
            <Tab category={obj} key={obj.category} />
          ))}
        </Tabs>
      </Fixed>
      <Block />
      {category.map((obj) => (
        <MenuSection category={obj} key={obj.category} />
      ))}
    </>
  );
}

export default Menu;
