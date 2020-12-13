import { utcDate } from "../services/formatter/formatter";

export const getOrderNumber = currentDate =>
  `${utcDate(currentDate, true, false)}-${parseInt(Math.random() * 10000) +
    1000}`;
