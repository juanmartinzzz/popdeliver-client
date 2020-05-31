import React, { Fragment } from "react";
import Item from "./Item";

const Items = ({ storeAndActions }) => (
  <Fragment>
    {storeAndActions.store.cart.items.map((item, index) => (
      <Item item={item} key={index} storeAndActions={storeAndActions} />
    ))}
  </Fragment>
);

export default Items;
