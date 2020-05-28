import React from "react";
import { AppBar, Badge, IconButton } from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { StyledToolbar } from "./components";
import LiveHelp from "@material-ui/icons/LiveHelp";
import AccountCircle from "@material-ui/icons/AccountCircle";

const Header = ({ storeAndActions }) => (
  <AppBar position="fixed">
    <StyledToolbar>
      <img src="img/app-header-left.png" alt="" />

      <IconButton onClick={storeAndActions.layoutSetCartOpen}>
        <Badge
          badgeContent={storeAndActions.store.cart.items.length}
          color="secondary"
        >
          <ShoppingCart />
        </Badge>
      </IconButton>

      <IconButton>
        <LiveHelp />
      </IconButton>
      <IconButton onClick={storeAndActions.layoutSetUserOpen}>
        <AccountCircle />
      </IconButton>
    </StyledToolbar>
  </AppBar>
);

export default Header;
