import React from "react";
import { currency, multiline } from "../../services/formatter/formatter";
import { AddToCartButton } from "./AddToCart";
import {
  StyledCardContent,
  StyledCardActions,
  Info,
  Name,
  Price,
  Description,
} from "./components";
import { variants } from "../../data/variants";

const VariantPrice = ({ variantId }) => (
  <Price color="secondary">{currency(variants[variantId].price)}</Price>
);

const Content = ({ product, handleAddToCart }) => (
  <StyledCardContent>
    <Info>
      <Name>{product.name}</Name>
      <Description>
        {multiline(
          product.description
            ? product.description
            : variants[product.variants[0]].description,
        )}
      </Description>
      <VariantPrice variantId={product.variants[0]} />
    </Info>

    <StyledCardActions>
      <AddToCartButton handleAddToCart={handleAddToCart} />
    </StyledCardActions>
  </StyledCardContent>
);

export default Content;
