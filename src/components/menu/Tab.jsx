import React from "react";
import styled from "styled-components";

const TabItem = styled.li`
  word-break: keep-all;
  padding: 12px 36px;
  font-weight: 700;
`;

const Category = styled.a`
  color: var(--primary-color);
  text-decoration: none;
`;

const Tabs = ({ category }) => (
  <TabItem data-to-scrollspy-id={category.category}>
    <Category href={"#" + category.category}>{category.title}</Category>
  </TabItem>
);

export default Tabs;
