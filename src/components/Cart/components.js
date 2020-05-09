import styled from "styled-components";
import { Box, DialogTitle, DialogContent } from "@material-ui/core";
import Motorcycle from "@material-ui/icons/MotorcycleTwoTone";
import WatchLater from "@material-ui/icons/WatchLater";
import { golden } from "../../theme";

export const DialogTitleCenter = styled(DialogTitle)`
  text-align: center;
`;

export const DialogContentCenter = styled(DialogContent)`
  text-align: center;
`;

export const Moto = styled(Motorcycle)`
  margin-right: 16px;
  color: ${golden};
  && {
    font-size: 48px;
  }
`;

export const StyledWatchLater = styled(WatchLater)`
  color: ${golden};
  && {
    font-size: 48px;
  }
`;

export const InputIconBox = styled.div`
  margin-left: 12px;
  color: ${golden};
`;

export const CartButtonBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 36px 0;
`;
