import React from "react";
import { Container } from "@material-ui/core";

const Content = ({ maxWidth, children }) => (
  <Container maxWidth={maxWidth ? maxWidth : "sm"}>{children}</Container>
);

export default Content;
