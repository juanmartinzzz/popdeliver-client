import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import Close from "@material-ui/icons/Close";

const DialogAppBar = styled(AppBar)`
  && {
    position: inherit;
  }
  margin-bottom: 24px;
`;

const DialogToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const Header = ({ title, hideCloseButton, onCloseButtonClick }) => (
  <DialogAppBar>
    <DialogToolbar>
      <Typography variant="h5">{title}</Typography>

      {!hideCloseButton && (
        <IconButton onClick={onCloseButtonClick}>
          <Close />
        </IconButton>
      )}
    </DialogToolbar>
  </DialogAppBar>
);

export default Header;
