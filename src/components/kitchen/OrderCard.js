import { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "./ItemList";

const OrderCard = ({ orderInfo }) => {
  const { orderListID, deliverTable, createTime } = orderInfo;
  const [orderListItems, setOrderListItems] = useState([]);
  const [notDone, setNotDone] = useState(true);
  useEffect(() => {
    axios
      .post("http://localhost:1802/orderlist", {
        deliverTable: deliverTable,
        createTime: createTime,
      })
      .then((response) => {
        setOrderListItems(response.data);
      });
  }, []);
  return (
    <>
      {notDone && (
        <div className="card" id={deliverTable}>
          <div className="cardHead">
            <span className="table">{deliverTable}</span>
            <span className="number">
              No.{(orderListID + 1000).toString().slice(1, 4)}
            </span>
          </div>
          <div className="cardContent">
            {orderListItems.map((obj, index) => (
              <ItemList item={obj} key={index} setNotDone={setNotDone}/>
            ))}
          </div>
          <div className="createTime">
            <span>訂單時間 </span>
            <span>{createTime}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderCard;
