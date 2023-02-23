import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "../styles/table.css";

import TableSeat from "../components/table/TableSeat";
import TableInfo from "../components/table/TableInfo";

function Table() {
  const { id } = useParams();
  const [showTableInfo, setShowTableInfo] = useState(false);
  return (
    <>
      {showTableInfo && <TableInfo id={id} setShowTableInfo={setShowTableInfo}/>}
      <TableSeat setShowTableInfo={setShowTableInfo} showTableInfo={showTableInfo}/>
    </>
  );
}

export default Table;
