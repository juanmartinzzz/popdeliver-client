import React, { Fragment } from "react";
import {
  IconButton,
  TableRow,
  TableCell,
  Table,
  TableBody
} from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import { Image, BasicInfo, CartName } from "./components";
import { DialogPaper } from "../../UI/FullscreenDialog/components";
import { getVariantImagePathname } from "../../../state/Variant";
import VariantPrice from "../../Layout/VariantPrice";

const Item = ({ item, storeAndActions }) => (
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

        <TableRow>
          <TableCell colSpan={99} align="right">
            <Fragment>
              <IconButton
                size="small"
                onClick={() => storeAndActions.cartSetCustomizingItem(item)}
              >
                <Edit />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => storeAndActions.removeItem(item)}
              >
                <Delete />
              </IconButton>
            </Fragment>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </DialogPaper>
);

export default Item;
