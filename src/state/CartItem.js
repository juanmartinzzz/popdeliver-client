import { getNewCartVariant } from "./CartVariant";

export const getNewCartItem = ({ mainVariantId, extras = [] }) => {
  const mainVariant = getNewCartVariant(mainVariantId);
  const extraVariants = extras.map(extraVariantId =>
    getNewCartVariant(extraVariantId),
  );

  return {
    id: null,
    main: mainVariant,
    extras: extraVariants,
    totalPrice: getCartItemTotalPrice([mainVariant, ...extraVariants]),
  };
};

export const getCartItemId = () => Math.floor(Math.random() * 1000000);

const getCartItemTotalPrice = variants =>
  variants.reduce(
    (sum, variant) => (variant ? sum + variant.priceWithDiscount : sum),
    0,
  );
