import React, { forwardRef } from "react";
import styled from "styled-components";
import { Slide, Typography } from "@material-ui/core";

export const DialogTransition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const OverflowWrapTypography = styled(Typography)`
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    word-break: break-all;
  }

  @-moz-document url-prefix() {
    word-break: normal;
    overflow-wrap: anywhere;
  }
`;
