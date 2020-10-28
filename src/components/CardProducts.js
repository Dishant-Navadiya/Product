import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const productStyle = {
  about: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    margin: "20px",
  },
});

const CardProducts = ({ index, each, handleCart }) => {
  const classes = useStyles();

  return (
    <Card key={index} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="160"
          image={each.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {each.name}
          </Typography>
          <Typography
            variant="body2"
            color="secondary"
            component="p"
            align="center"
            style={productStyle.about}
          >
            <AttachMoneyIcon fontSize="small" />
            {each.price}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align="center"
          >
            {each.about}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          style={{ margin: "auto" }}
          variant="contained"
          size="medium"
          color="secondary"
          endIcon={<ShoppingCartIcon />}
          onClick={() => handleCart(each)}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardProducts;
