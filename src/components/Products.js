import React, { useState, useEffect } from "react";
import { Divider, IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./products.css";
import { products } from "../products";
import CardProducts from "./CardProducts";
import Modal from "./Modal";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState([]);
  useEffect(() => {
    localStorage.getItem("items") &&
      setItem(JSON.parse(localStorage.getItem("items")));
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    const all = JSON.parse(localStorage.getItem("items"));
    const newDoc = all.filter((ele) => ele.id === id && ele.qty > 1);
    if (newDoc.length > 0) {
      const newData = all.map((ele) => {
        if (ele.id === id) {
          ele.qty--;
        }
        return ele;
      });
      setItem(newData);
      localStorage.setItem("items", JSON.stringify(newData));
    } else {
      const newData = all.filter((ele) => ele.id !== id);
      setItem(newData);
      localStorage.setItem("items", JSON.stringify(newData));
    }
  };

  const handleCart = (getItem) => {
    if (JSON.parse(localStorage.getItem("items"))) {
      const exist = JSON.parse(localStorage.getItem("items")).filter(
        (ele) => ele.id === getItem.id
      );

      if (exist.length > 0) {
        const newItems = JSON.parse(localStorage.getItem("items")).map(
          (ele) => {
            if (ele.id === getItem.id) {
              ele.qty++;
            }
            return ele;
          }
        );
        setItem(newItems);
        localStorage.setItem("items", JSON.stringify(newItems));
      } else {
        const all = JSON.parse(localStorage.getItem("items"));
        all.push({ ...getItem, qty: 1 });
        localStorage.setItem("items", JSON.stringify(all));
        setItem(all);
        console.log("all");
      }
    } else {
      localStorage.setItem("items", JSON.stringify([{ ...getItem, qty: 1 }]));
      setItem([...item, { ...getItem, qty: 1 }]);
    }
    alert("Added to the cart");
  };

  return (
    <div>
      <section className="header">
        <h1>Products</h1>
        <IconButton
          aria-label="cart"
          color="secondary"
          onClick={handleClickOpen}
        >
          <ShoppingCartIcon />
        </IconButton>
      </section>
      <Divider />
      <div className="cards">
        {products.map((each, index) => {
          return (
            <CardProducts index={index} each={each} handleCart={handleCart} />
          );
        })}
      </div>
      <Modal
        open={open}
        item={item}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Products;
