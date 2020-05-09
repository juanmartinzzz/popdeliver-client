import React from "react";
import Header from "../../UI/FullscreenDialog/Header";
import { Dialog, Button, Card, CardContent } from "@material-ui/core";
import Content from "../../UI/FullscreenDialog/Content";
import SelectSize from "./SelectSize";
import { variants } from "../../../data/variants";
import { multiline } from "../../../services/formatter/formatter";
import { products } from "../../../data/products";
import { DialogTransition } from "../../components";
import { VariantMedia, Sections, SectionName, Actions } from "./components";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { getVariantImagePathname } from "../../../state/Variant";
import { getNewCartItem } from "../../../state/CartItem";
import VariantPrice from "../../Layout/VariantPrice";

const CustomizeItem = ({ storeAndActions }) => {
  const { cart } = storeAndActions.store;
  const { customizingItem } = cart;

  if (!customizingItem) {
    return null;
  }

  const mainId = customizingItem.main.id;
  const productId = variants[mainId].product[0];
  const product = products[productId];

  const handleClose = () => {
    storeAndActions.cartSetCustomizingItem(null);
  };

  const handleChangeMain = event => {
    const cartItem = {
      ...getNewCartItem({ mainVariantId: event.target.value }),
      id: customizingItem.id
    };
    storeAndActions.cartSetCustomizingItem(cartItem);
  };

  const handleAddToCart = () => {
    storeAndActions.cartUpsertItem(customizingItem);
  };

  return (
    <Dialog
      fullScreen
      open={customizingItem ? true : false}
      TransitionComponent={DialogTransition}
    >
      <Header
        title={`Agregar ${product.name.toUpperCase()}`}
        onCloseButtonClick={handleClose}
      />

      <Content maxWidth="xs">
        <Card>
          <VariantMedia
            component="img"
            image={getVariantImagePathname({ variantId: mainId })}
          />

          <CardContent>
            <VariantPrice variant={variants[mainId]} />

            {multiline(variants[mainId].description)}
          </CardContent>
        </Card>

        <Sections>
          <SectionName color="secondary" variant="h6">
            Tamaño
          </SectionName>

          <SelectSize
            value={mainId}
            product={product}
            handleChange={handleChangeMain}
          />
        </Sections>

        <Actions>
          <Button color="secondary" onClick={handleAddToCart}>
            {customizingItem.id ? "Guardar cambios" : "Agregar"} &nbsp;
            <ShoppingCart />
          </Button>
        </Actions>
      </Content>
    </Dialog>
  );
};

export default CustomizeItem;
