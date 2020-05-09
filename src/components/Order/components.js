import styled from "styled-components";
import GroupWorkOutlined from "@material-ui/icons/GroupWorkOutlined";
import Motorcycle from "@material-ui/icons/MotorcycleTwoTone";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Receipt from "@material-ui/icons/Receipt";
import { golden } from "../../theme";

export const AnimatedMotorcycle = styled(Motorcycle)`
  animation-name: motoOut;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  margin-right: 16px;
  color: ${golden};
  && {
    font-size: 48px;
  }
`;

export const AnimatedThumbUpLeft = styled(ThumbUp)`
  animation-name: cookingHandLeft;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  color: ${golden};
  && {
    font-size: 48px;
  }
`;

export const AnimatedThumbUpRight = styled(ThumbUp)`
  animation-name: cookingHandRight;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  color: ${golden};
  && {
    font-size: 48px;
  }
`;

export const AnimatedReceipt = styled(Receipt)`
  animation-name: slidein;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  color: ${golden};
  && {
    font-size: 48px;
  }
`;

export const GooldenGroupWorkOutlined = styled(GroupWorkOutlined)`
  color: ${golden};
  && {
    font-size: 48px;
  }
`;
