import React from "react";
import { Grid } from "@material-ui/core";
import Content from "./Content";
import { ProductCard, Media } from "./components";
import { getNewCartItem } from "../../state/CartItem";

const Product = ({ product, storeAndActions }) => {
  const handleOpenCustomizeDialog = () => {
    const cartItem = getNewCartItem({ mainVariantId: product.variants[0] });
    storeAndActions.cartSetCustomizingItem(cartItem);
  };

  return (
    <Grid item xs={12} md={6}>
      <ProductCard onClick={handleOpenCustomizeDialog}>
        <Media
          component="img"
          image={`img/data/${product.image && product.image[0].filename}`}
        />

        <Content product={product} />
      </ProductCard>
    </Grid>
  );
};

export default Product;
