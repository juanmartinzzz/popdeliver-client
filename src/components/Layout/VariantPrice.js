import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import { currency } from "../../services/formatter/formatter";
import { applyDiscountPercentage } from "../../services/transformer/transformer";

const VariantPrice = ({ variant }) => {
  const { price, discountPercentage } = variant;

  if (discountPercentage) {
    const discountedPrice = applyDiscountPercentage(price, discountPercentage);
    return (
      <Fragment>
        <Typography variant="h6" color="error">
          <strike>{currency(price)}</strike>
        </Typography>
        <Typography variant="h6" color="secondary">
          {currency(discountedPrice)}
        </Typography>
      </Fragment>
    );
  }

  return (
    <Typography variant="h6" color="secondary">
      {currency(price)}
    </Typography>
  );
};

export default VariantPrice;
