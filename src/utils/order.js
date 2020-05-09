import { utcDate } from "../services/formatter/formatter";

export const getOrderNumber = currentDate =>
  `${utcDate(currentDate, true, false)}-${parseInt(Math.random() * 10000) +
    1000}`;

export const initialStateRecipient = {
  name: "",
  address: "",
  locality: "",
  email: "",
  phone: "",
  notes: "",
  addChopsticks: false,
  addTeriyaki: false,
  addGinger: false,
  addWasabi: false,
  addSoy: false
};

export const requiredRecipientFields = [
  "name",
  "address",
  "locality",
  "email",
  "phone"
];
