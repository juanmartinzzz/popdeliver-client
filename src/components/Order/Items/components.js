import styled from "styled-components";
import { Name } from "../../Product/components";

export const BasicInfo = styled.div`
  display: flex;
`;

export const CartName = styled(Name)`
  && {
    margin-top: 0.8em;
    font-size: 14px;
    line-height: 1em;
  }
`;

export const Image = styled.img`
  margin-right: 8px;
  width: 36px;
  min-width: 36px;
  height: 36px;
  min-height: 36px;
  border-radius: 999px;
`;
