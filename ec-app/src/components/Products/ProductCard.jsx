import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Noimage from "../../assets/img/src/no_image.png";
import { push } from "connected-react-router"
import { useDispatch } from "react-redux"
import IconButtom from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import MoreVerIcon from "@material-ui/icons/MoreVert"
import { deleteProduct } from "../../reducks/products/operation"

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: 8,
      width: "calc(50% - 16px)"
    },
    [theme.breakpoints.up("sm")]: {
      margin: 16,
      width: "calc(33.333% - 32px)"
    }
  },
  content: {
    display: "flex",
    padding: "16px 8px",
    textAlign: "left",
    "&:last-child": {
      paddingButtom: 16
    }
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
  price: {
    color: theme.palette.secondary.main,
    fontSize: 16
  }
}))

const ProductCard = (props) => {

  const classes = useStyles();
  const price = props.price.toLocaleString();
  const images = (props.images.length > 0) ? props.images : [{path: Noimage}]
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (event) => {
    setAnchorEl(null)
  }


  console.log("test")
  return(
    <Card className={classes.root}>
      <CardMedia 
        image={images[0].path} className={classes.media} 
        title="" onClick={() => dispatch(push("/product/" + props.id))}
      />
      <CardContent className={classes.content}>
        <div onClick={() => dispatch(push("/product/" + props.id))}>
          <Typography color="textSecondary" component="p">
            {props.name}
          </Typography>
          <Typography  className={classes.price} component="p">
            ¥{price}
          </Typography>
        </div>
        <IconButtom onClick={handleClick}>
          <MoreVerIcon />
        </IconButtom>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              dispatch(push("/product/edit/" + props.id))
              handleClose()
            }}
          >
            編集する
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch(deleteProduct(props.id))
              handleClose()
            }}
          >
            削除する
          </MenuItem>
        </Menu>
      </CardContent>
    </Card>
  )
}

export default ProductCard;