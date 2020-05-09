import styled from "styled-components";
import { CardMedia, Divider, Typography } from "@material-ui/core";

export const VariantMedia = styled(CardMedia)`
  max-width: 400px;
`;

export const SectionDivider = styled(Divider)`
  && {
    margin: 24px 0 0;
  }
`;

export const Sections = styled.div`
  margin: 16px 0 0;
`;

export const SectionName = styled(Typography)``;

export const Actions = styled.div`
  margin: 16px 0;
`;
