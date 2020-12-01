import React from 'react';
import Divider from "@material-ui/core/Divider";
import { TextDetail } from "../UIkit";

const datatimeToString = date => {
  return date.getFullYear() + "-" 
    + ("00" + (date.getMonth() + 1)).slice(-2) + "-"
    + ("00" + date.getDate()).slice(-2) + " "
    + ("00" + date.getHours()).slice(-2) + ":"
    + ("00" + date.getMinutes()).slice(-2) + ":"
    + ("00" + date.getSeconds()).slice(-2)
}

const dataToString = date => {
  return date.getFullYear() + "-" 
    + ("00" + (date.getMonth() + 1)).slice(-2) + "-"
    + ("00" + date.getDate()).slice(-2)
}
const OrderHistoryItem = (props) => {
  const order = props.order;
  const price = "¥" + order.amount.toLocaleString();
  const orderedDatetime = datatimeToString(order.updated_at.toDate());
  const shippingData = dataToString(order.shipping_date.toDate());



  return (
    <div>
      <div className="module-spacer--small"/>
      <TextDetail label={"注文ID"} value={order.id}/>
      <TextDetail label={"注文日時"} value={orderedDatetime}/>
      <TextDetail label={"発送予定日"} value={shippingData}/>
      <TextDetail label={"注文金額"} value={price}/>
      <div className="module-spacer--extra-extra-small"/>
    </div>
  )
}

export default OrderHistoryItem
