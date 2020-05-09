import React, { Fragment } from "react";
import { DialogTitleCenter } from "../components";
import DeliveryNotice from "./DeliveryNotice";
import { Dialog, Button, DialogActions } from "@material-ui/core";
import { DialogPaper } from "../../UI/FullscreenDialog/components";

const DeliveryNoticeDialog = ({ storeAndActions }) => (
  <Fragment>
    <Dialog open={storeAndActions.store.layout.deliveryPriceReminderOpen}>
      <DialogTitleCenter>Recuerda</DialogTitleCenter>

      <DeliveryNotice />
      <DialogActions>
        <Button
          variant="contained"
          onClick={storeAndActions.orderCreateOnFirestore}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  </Fragment>
);

export default DeliveryNoticeDialog;
