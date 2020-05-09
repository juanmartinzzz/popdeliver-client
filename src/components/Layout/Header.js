import React from "react";
import { AppBar, Badge, IconButton } from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { StyledToolbar, ImageLink, ImageInLink } from "./components";
import { organizations } from "../../data/organizations";

const organizationCode = process.env.REACT_APP_ORGANIZATION_CODE;

const Header = ({ storeAndActions }) => (
  <AppBar position="fixed">
    <StyledToolbar>
      <img src="img/app-header-left.png" alt="" />

      <IconButton onClick={storeAndActions.cartSetOpen}>
        <Badge
          badgeContent={storeAndActions.store.cart.items.length}
          color="secondary"
        >
          <ShoppingCart />
        </Badge>
      </IconButton>

      <ImageLink
        href={`http://api.whatsapp.com/send?phone=${organizations[organizationCode].whatsappPhoneNumber}`}
        target="__blank"
      >
        <ImageInLink src="img/app-header-right.png" alt="Contacto whatsapp" />
      </ImageLink>
    </StyledToolbar>
  </AppBar>
);

export default Header;
