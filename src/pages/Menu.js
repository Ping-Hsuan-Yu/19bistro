import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Menu.css";
import Nav from "../components/menu/Nav";
import Tab from "../components/menu/Tab";
import Card from "../components/menu/Card";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import "animate.css";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  color: "var(--primary-color)",
  background: "var(--bg-color)",
  showClass: {
    popup: "animate__animated animate__slideInRight animate__faster",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp animate__faster",
  },
});
const category = [
  { category: "A", title: "吃飽" },
  { category: "B", title: "燒烤酥炸" },
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
  margin: 32px 0;
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
  justify-content: space-between;
`;

const Block = styled.div`
  width: 100vw;
  height: 135px;
  background-color: var(--bg-color);
`;

const Loading = styled.div`
    display: inline-block;
    width: 120px;
    height: 120px;
    position: absolute;
    top: 55vh;
    left: 50%;
    transform: translate(-50%, -50%);
  &:after {
    content: " ";
    display: block;
    width: 120px;
    height: 120px;
    margin: 0px;
    border-radius: 50%;
    border: 8px solid var(--primary-color);
    border-color: var(--primary-color) transparent var(--primary-color) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

function Menu() {
  const [isLoading, setIsLoading] = useState(true);
  const [mealDataList, setMealDataList] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState({ qty: 0, class: "" });
  const { table } = useParams();
  const btnInner = {
    href: "/cart/" + table,
    text: "訂單",
  };
  useEffect(() => {
    axios
      .get("http://localhost:1802/menu")
      .then(function (response) {
        setMealDataList(response.data);
      })
      .then(() => {
        setIsLoading(false);
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
  }, []);

  const MenuSection = ({ category }) => (
    <Section id={category.category}>
      <Title>{category.title}</Title>
      <Wrap>
        {mealDataList
          .filter((obj) => obj.category === category.category) //check if category match title
          .map((obj) => (
            <Card
              props={{obj, totalQuantity, setTotalQuantity, table, Toast}}
              key={obj.itemNum}
            />
          ))}
      </Wrap>
    </Section>
  );

  return (
    <>
      <Fixed>
        <Nav
          btnInner={btnInner}
          totalQuantity={totalQuantity}
          table={table}
          Toast={Toast}
        />
        <Tabs>
          {category.map((obj) => (
            <Tab category={obj} key={obj.category} />
          ))}
        </Tabs>
      </Fixed>
      <Block />
      {isLoading ? (
        <Loading/>
      ) : (
        category.map((obj) => <MenuSection category={obj} key={obj.category} />)
      )}
    </>
  );
}

export default Menu;
