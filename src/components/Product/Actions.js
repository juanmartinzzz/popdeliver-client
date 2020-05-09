import React from "react";
import { AddToCart } from "./AddToCart";
import { StyledCardActions } from "./components";

const Actions = ({ handleAddToCart }) => (
  <StyledCardActions>
    <AddToCart handleAddToCart={handleAddToCart} />
  </StyledCardActions>
);

export default Actions;
