import React from "react";
import { DialogContentText, Dialog } from "@material-ui/core";
import { DialogTransition } from "../components";
import { DialogTitleCenter, DialogContentCenter } from "../Cart/components";
import {
  orderStatusMap,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_ACCEPTED,
  ORDER_STATUS_REQUESTED,
  ORDER_STATUS_DISPATCHED
} from "./orderStatusMap";
import { StepsProgress } from "../UI/StepsProgress";
import Header from "../UI/FullscreenDialog/Header";
import Content from "../UI/FullscreenDialog/Content";
import Feedback from "../Cart/Feedback/Feedback";
import Items from "./Items/Items";
import PlaceNewOrderButton from "../Cart/PlaceNewOrderButton";

const steps = [
  orderStatusMap[ORDER_STATUS_PENDING].value,
  orderStatusMap[ORDER_STATUS_REQUESTED].value,
  orderStatusMap[ORDER_STATUS_ACCEPTED].value,
  orderStatusMap[ORDER_STATUS_DISPATCHED].value
];

const Order = ({ storeAndActions }) => {
  const { order } = storeAndActions.store;

  console.log("--order", order);

  if (!orderStatusMap[order.status]) {
    return null;
  }

  const Icon = orderStatusMap[order.status].icon;

  return (
    <Dialog open fullScreen TransitionComponent={DialogTransition}>
      <Header
        title="Tu Pedido"
        onCloseButtonClick={storeAndActions.cartSetClose}
        hideCloseButton={order.status}
      />

      <Content>
        <Items storeAndActions={storeAndActions} />

        <StepsProgress
          steps={steps}
          current={orderStatusMap[order.status].value}
        />
        <DialogTitleCenter>{`${orderStatusMap[order.status].title}`}</DialogTitleCenter>

        <DialogContentCenter>
          {Icon && <Icon />}
          <DialogContentText>
            {`${orderStatusMap[order.status].content}`}
          </DialogContentText>
        </DialogContentCenter>

        <PlaceNewOrderButton storeAndActions={storeAndActions} />

        <Feedback storeAndActions={storeAndActions} />
      </Content>
    </Dialog>
  );
};

export default Order;
