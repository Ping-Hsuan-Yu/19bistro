import React from "react";

const Link = ({ tableNum }) => {
  const { deliverTable } = tableNum;
  return (
    <div>
      <a href={`#${deliverTable}`}>{deliverTable}</a>
    </div>
  );
};

const TableLink = ({ tableNum }) => (
  <div className="tableLink">
    {tableNum.map((obj, index) => (
      <Link tableNum={obj} key={index} />
    ))}
  </div>
);

export default TableLink;
