import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemList = ({ item }) => {
  const { quantity, mealName } = item;
  return (
    <div className="itemList">
      <span className="og-name">{mealName}</span>
      <span className="og-quantity">{quantity}</span>
    </div>
  );
};

const Ongoing = ({ tableAndTime }) => {
  const { deliverTable, createTime } = tableAndTime;
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:1802/ongoingitem", {
        deliverTable: deliverTable,
        createTime: createTime,
      })
      .then((response) => {
        setItemList(response.data);
      });
  }, []);
  return (
    <>
      <div className="cardContent">
        {itemList.map((obj, index) => (
          <ItemList item={obj} key={index} />
        ))}
      </div>
      <div className="createTime">
        <span>訂單時間 </span>
        <span>{createTime}</span>
      </div>
    </>
  );
};

const DoneItems = ({ list }) => {
  const { quantity, mealName, price } = list;
  return (
    <div className="itemList">
      <span className="og-name">{mealName}</span>
      <div className="pq">
        <span className="price">${price}</span>
        <span className="og-quantity">{quantity}</span>
      </div>
    </div>
  );
};

const TableInfo = ({ id, setShowTableInfo }) => {
  const navigate = useNavigate();

  const closeTableInfo = () => {
    setShowTableInfo(false);
    navigate(`/table`);
  };

  const [onGoingList, setOnGoingList] = useState([]);
  const [doneItemList, setDoneItemList] = useState([]);
  const [total, setTotal] = useState(0);
  const [tableSeated, setTableSeated] = useState(true);

  useEffect(() => {
    axios
      .post("http://localhost:1802/tableandtime", { deliverTable: id })
      .then((response) => {
        setOnGoingList(response.data);
      });
    axios
      .post("http://localhost:1802/doneitem", { orderTable: id })
      .then((response) => {
        setDoneItemList(response.data);
      });
    axios
      .post("http://localhost:1802/total", { orderTable: id })
      .then((response) => {
        setTotal(response.data[0].total);
      });
  }, []);

  const checkoutHandler = () => {
    axios.post("http://localhost:1802/checkout", { orderTable: id });
    alert(id + "完成結帳");
    closeTableInfo();
  };

  const setTableHandler = () => {
    axios.post("http://localhost:1802/seated", { orderTable: id })
    alert("開桌")
    setTableSeated(false)
    setTimeout(closeTableInfo,300)
  }
  return (
    <>
      <div className="ongoing">
        <div className="og-card">
          <div className="cardHead">
            <span className="og-table">{id}</span>
            {((onGoingList.length === 0 ? true : false) &&
            (doneItemList.length === 0 ? true : false) && tableSeated &&(
              <div className="set-table" onClick={setTableHandler}>
                <span>點此開桌</span>
                <i className="bi bi-hand-index" />
              </div>
            )) || <span className="number">準備中</span>}
          </div>
          {onGoingList.map((obj, index) => (
            <Ongoing tableAndTime={obj} key={index} />
          ))}
        </div>
      </div>
      <div className="done">
        <div className="og-card">
          <div className="cardHead">
            <span className="d-table">{id}</span>
            <span className="number">已出餐</span>
          </div>
          <div className="cardContent">
            {doneItemList.map((obj, index) => (
              <DoneItems list={obj} key={index} />
            ))}
          </div>
        </div>
        {(doneItemList.length === 0 ? false : true) && (
          <div className="itemList">
            {(onGoingList.length === 0 ? true : false) && (
              <div onClick={checkoutHandler}>
                <i className="bi bi-hand-index"></i>
                <span className="og-name">結帳</span>
              </div>
            )}
            <span className="og-quantity">
              ${Intl.NumberFormat("en").format(total)}
            </span>
          </div>
        )}
      </div>
      <div className="backdrop" onClick={closeTableInfo}></div>
    </>
  );
};

export default TableInfo;
