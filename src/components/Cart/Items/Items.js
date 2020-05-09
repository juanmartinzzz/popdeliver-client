import React, { Fragment } from "react";
import Item from "./Item";
import TotalsContainer from "./TotalsContainer";

const Items = ({ storeAndActions }) => (
  <Fragment>
    {storeAndActions.store.cart.items.map((item, index) => (
      <Item item={item} key={index} storeAndActions={storeAndActions} />
    ))}

    <TotalsContainer storeAndActions={storeAndActions} />
  </Fragment>
);

export default Items;
