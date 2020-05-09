import React, { Fragment } from "react";
import {
  AnimatedReceipt,
  AnimatedThumbUpLeft,
  AnimatedThumbUpRight,
  GooldenGroupWorkOutlined,
  AnimatedMotorcycle,
} from "./components";

const CookingRoll = () => (
  <Fragment>
    <AnimatedThumbUpLeft />
    <GooldenGroupWorkOutlined /> <AnimatedThumbUpRight />
  </Fragment>
);

export const ORDER_STATUS_PENDING = "pending";
export const ORDER_STATUS_REQUESTED = "requested";
export const ORDER_STATUS_ACCEPTED = "accepted";
export const ORDER_STATUS_DISPATCHED = "dispatched";
export const ORDER_STATUS_ARRIVED = "arrived";
export const ORDER_STATUS_REJECTED = "rejected";
export const ORDER_STATUS_FAILED = "failed";

let i = 0;

export const orderStatusMap = {
  [ORDER_STATUS_REJECTED]: {
    value: i++,
    label: "Rechazado",
    title: "Hubo un problema con tu pedido : (",
    content: "¡Pero no todo está perdido! puedes hacer tu pedido por WhatsApp.",
  },
  [ORDER_STATUS_FAILED]: {
    value: i++,
    label: "Fallido",
  },
  [ORDER_STATUS_PENDING]: {
    value: i++,
    label: "Pendiente",
    title: "Haciendo tu pedido",
    content: "",
  },
  [ORDER_STATUS_REQUESTED]: {
    value: i++,
    label: "Solicitado",
    title: "Pedido hecho.",
    content:
      "Tu pedido ya llegó al restaurante. Pronto empezaremos a cocinarlo.",
    icon: AnimatedReceipt,
  },
  [ORDER_STATUS_ACCEPTED]: {
    value: i++,
    label: "Aceptado",
    title: "¡Tu pedido fue aceptado!",
    content: "Lo estamos preparando y pronto saldrá para tu casa.",
    icon: CookingRoll,
  },
  [ORDER_STATUS_DISPATCHED]: {
    value: i++,
    label: "Salió",
    title: "¡Tu pedido está en camino!",
    content: "Ya salió de nuestra cocina y va directo hacia tí.",
    icon: AnimatedMotorcycle,
  },
  [ORDER_STATUS_ARRIVED]: {
    value: i++,
    label: "Recibido",
  },
};
