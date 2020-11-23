import React, { useCallback, useMemo } from "react";
import { useDispatch, useDispath, useSelector } from "react-redux";
import { getProductInCart } from "../reducks/users/selectors";
import { makeStyles } from "@material-ui/core/styles";
import { CartListItem } from "../components/Products/index"
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { PrimaryButton } from "../components/UIkit"

const useStyles = makeStyles((theme) => ({
  detailBox: {
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: 320
    },
    [theme.breakpoints.up("sm")]: {
      width: 512
    }
  },
  orderBox: {
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: 4,
    boxShadow: "0 4px 2px 2px rgba(0, 0, 0, 0.2)",
    height: 256,
    margin: "24px auto 16px auto",
    width: 288
  }
}))

const OrderConfirm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector();
  const productInCart = getProductInCart(selector);

  return(
    <section className="c-section-wrappin">
      <h2 className="u-text__headline">注文の確認</h2>
      <div className={classes.detailBox}>
        <List>
          {productInCart.length > 0 && (
            productInCart.map(product => <CartListItem key={product.cartId} />)
          )}
        </List>
      </div>
      <div className={classes.orderBox}>
        
      </div>
    </section>
  )
  console.log('object', object)
  console.time('object')
  console.log("object")
  
}

export default OrderConfirm;