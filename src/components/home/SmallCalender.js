import React from "react";
import "./style.css";
import styled from 'styled-components';

const Samllcalenderborder = styled.div`
  border: #b22c27 solid 3px;
  height: 200px;
  border-radius: 10px;
`;
const Ul = styled.ul`
  padding: 0;
  margin: 0;
  height: 1rem;
  background-color: var(--primary-color);
  color: var(--bg-color);
`;
const Weeknameli = styled.li`
  width: 14.28%;
  height: 36px;
  line-height: 36px;
  list-style-type: none;
  display: block;
  box-sizing: border-box;
  float: left;
  text-align: center;
`;
const Daysnameli = styled.li`
  width: 14.28%;
  height: 25px;
  line-height: 25px;
  list-style-type: none;
  display: block;
  box-sizing: border-box;
  float: left;
  text-align: center;
  border-radius: 10px;
  color: var(--primary-color);
`;
const Daysnameli2 = styled.li`
  width: 14.28%;
  height: 25px;
  line-height: 25px;
  list-style-type: none;
  display: block;
  box-sizing: border-box;
  float: left;
  text-align: center;
  border-radius: 10px;
  color: var(--primary-color);
  background-color: var(--primary-color);
  color: var(--bg-color);
`;

// sfc
const SmallClander = () => {
  let weekname = ["日", "一", "二", "三", "四", "五", "六"];
  let month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let my_date = new Date();
  let my_year = my_date.getFullYear();
  let my_month = my_date.getMonth();
  let my_day = my_date.getDate();
  function dayStart(month, year) {
    var tmpDate = new Date(year, month, 1);
    return tmpDate.getDay();
  }
  function daysMonth(month, year) {
    var tmp = year % 4;
    if (tmp === 0) {
      return month_olympic[month];
    } else {
      return month_normal[month];
    }
  }
  let str = [];
  let totalDay = daysMonth(my_month, my_year); //获取该月总天数
  let firstDay = dayStart(my_month, my_year); //获取该月第一天是星期几
  for (let i = 1; i <= firstDay; i++) {
    str.push(""); //为起始日之前的日期创建空白节点
  }
  for (let p = 1; p <= totalDay; p++) {
    str.push(p);
  }

  return (
    <Samllcalenderborder>
      <Ul>
        {weekname.map((i, e) => (
          <Weeknameli key={"week" + e}>{i}</Weeknameli>
        ))}
      </Ul>
      <Ul>
        {str.map((i, e) =>
          i === my_day ? (
            <Daysnameli2 key={"day" + e}>{i}</Daysnameli2>
          ) : (
            <Daysnameli key={"day" + e}>{i}</Daysnameli>
          )
        )}
      </Ul>
    </Samllcalenderborder>
  );
};

export default SmallClander;
