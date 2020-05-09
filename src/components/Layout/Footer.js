import React, { useCallback } from "react";
import styled from "styled-components";
import { Button, Paper } from "@material-ui/core";

const FixedBottom = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const BottomButtonPaper = styled(Paper)`
  display: flex;
  justify-content: center;
  padding: 12px 0;
  && {
    border-radius: 0;
  }
`;

const Footer = ({ storeAndActions }) => {
  const { cart } = storeAndActions.store;
  if (cart.items.length === 0) {
    return null;
  }

  return (
    <FixedBottom>
      <BottomButtonPaper onClick={storeAndActions.cartSetOpen}>
        <Button variant="contained" color="secondary">
          ¡Haz tu pedido!
        </Button>
      </BottomButtonPaper>
    </FixedBottom>
  );
};

export default Footer;
