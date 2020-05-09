import styled from "styled-components";
import { Card, CardActions, CardMedia, CardContent } from "@material-ui/core";
import { OverflowWrapTypography } from "../components";

export const ProductCard = styled(Card)`
  && {
    width: 100%;
  }
  display: flex;
  cursor: pointer;
`;

export const Media = styled(CardMedia)`
  && {
    width: 180px;
    height: 180px;
  }
`;

export const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &&:last-child {
    padding-bottom: 16px;
  }
`;

export const Info = styled.div``;

export const Name = styled(OverflowWrapTypography)`
  && {
    font-size: 16px;
    line-height: 1.1em;
  }
  text-transform: uppercase;
`;

export const Description = styled.div`
  font-size: 12px;
`;

export const Price = styled(OverflowWrapTypography)`
  && {
    margin-top: 8px;
    font-size: 16px;
    line-height: 1.1em;
  }
`;

export const StyledCardActions = styled(CardActions)`
  && {
    margin: 0;
    padding: 0;
  }
  justify-content: center;
`;
