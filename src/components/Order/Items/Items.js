import React, { Fragment } from "react";
import Item from "./Item";

const Items = ({ storeAndActions }) => (
  <Fragment>
    {storeAndActions.store.order.items.map((item, index) => (
      <Item item={item} key={index} storeAndActions={storeAndActions} />
    ))}
  </Fragment>
);

export default Items;
