import React from "react";
import { RadioGroup, FormControlLabel, Radio, Grid } from "@material-ui/core";
import { variants } from "../../../data/variants";

const SelectSize = ({ value, product, handleChange }) => (
  <RadioGroup name="variant" value={value} onChange={handleChange} row>
    <Grid container>
      {product.variants &&
        product.variants.map(variantId => (
          <Grid item xs={6} key={variantId}>
            <FormControlLabel
              value={variantId}
              label={variants[variantId].name}
              control={<Radio color="secondary" />}
            />
          </Grid>
        ))}
    </Grid>
  </RadioGroup>
);

export default SelectSize;
