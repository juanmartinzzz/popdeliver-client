import { variants } from "../data/variants";
import { products } from "../data/products";
import { applyDiscountPercentage } from "../services/transformer/transformer";

export const getNewCartVariant = variantId => {
  if (!variantId) {
    return;
  }

  const variant = variants[variantId];
  const product = products[variant.product[0]];
  const name = variant.name ? `${product.name}, ${variant.name}` : product.name;
  const { price, discountPercentage } = variant;

  return {
    id: variant.id,
    name,
    units: `${variant.amount} ${variant.unit}`,
    price: price,
    discountPercentage: discountPercentage ? discountPercentage : null,
    priceWithDiscount: discountPercentage
      ? applyDiscountPercentage(price, discountPercentage)
      : price,
  };
};
