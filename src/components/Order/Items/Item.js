import React, { Fragment } from "react";
import {
  IconButton,
  TableRow,
  TableCell,
  Table,
  TableBody
} from "@material-ui/core";
import { Image, BasicInfo, CartName } from "./components";
import { DialogPaper } from "../../UI/FullscreenDialog/components";
import { getVariantImagePathname } from "../../../state/Variant";
import VariantPrice from "../../Layout/VariantPrice";

const Item = ({ item }) => (
  <DialogPaper>
    <Table size="small">
      <TableBody>
        {[item.main, ...item.extras]
          .filter(variant => variant)
          .map(variant => (
            <TableRow key={variant.id}>
              <TableCell>
                <BasicInfo>
                  <Image
                    src={getVariantImagePathname({ variantId: variant.id })}
                  />
                  <CartName>{variant.name}</CartName>
                </BasicInfo>
              </TableCell>

              <TableCell align="right">
                <VariantPrice variant={variant} />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </DialogPaper>
);

export default Item;
