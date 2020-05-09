import { variants } from "../data/variants";
import { products } from "../data/products";

const imagesPath = "/img/data";

export const getVariantImagePathname = ({ variantId }) => {
  const variant = variants[variantId];
  const product = products[variant.product];

  if (variant.image) {
    return `${imagesPath}/${variant.image[0].filename}`;
  } else {
    return `${imagesPath}/${product.image[0].filename}`;
  }
};
