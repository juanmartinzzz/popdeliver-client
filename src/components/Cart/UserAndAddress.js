import React, { Fragment } from "react";
import Home from "@material-ui/icons/Home";
import Mail from "@material-ui/icons/Mail";
import Label from "@material-ui/icons/Label";
import Phone from "@material-ui/icons/Phone";
import Person from "@material-ui/icons/Person";
import Explore from "@material-ui/icons/Explore";
import FormFields from "../UI/FormFields";

const UserAndAddress = ({ storeAndActions }) => {
  const { order, user } = storeAndActions.store;
  const { address, addressIndex } = order.destination;

  const inputs = [
    {
      name: "nickname",
      icon: <Label />,
      value: address.nickname,
      label: "Apodo para esta dirección de envío",
      onChange: storeAndActions.orderSetDestinationAddressProperty,
    },
    {
      name: "recipient",
      icon: <Person />,
      value: address.recipient,
      label: "Quién recibirá el pedido",
      onChange: storeAndActions.orderSetDestinationAddressProperty,
    },
    {
      name: "directions",
      icon: <Home />,
      label: "Dirección",
      value: address.directions,
      onChange: storeAndActions.orderSetDestinationAddressProperty,
    },
    {
      name: "locality",
      icon: <Explore />,
      label: "Barrio, conjunto",
      value: address.locality,
      onChange: storeAndActions.orderSetDestinationAddressProperty,
    },
  ];

  return (
    <Fragment>
      <FormFields
        inputs={[
          {
            name: "email",
            icon: <Mail />,
            label: "Email",
            value: user.email,
            note: "No enviamos Spam ni damos tu correo a terceros.",
            onChange: storeAndActions.userSetProperty,
            onBlur: storeAndActions.userGetFromFirestore,
          },
          {
            name: "phone",
            icon: <Phone />,
            label: "Celular",
            value: user.phone,
            note: "Te avisamos por WhatsApp sobre el estado de tu Órden.",
            onChange: storeAndActions.userSetProperty,
            onBlur: storeAndActions.userGetFromFirestore,
          },
          {
            name: "addressIndex",
            icon: <Explore />,
            label: "Enviar a",
            value: addressIndex,
            options: user.addresses
              .map(({ directions, locality, nickname, recipient }, index) => ({
                value: index,
                content: `${nickname}: ${directions}, ${locality} (recibe ${recipient})`,
              }))
              .concat([{ value: -1, content: "Dirección nueva" }]),
            onChange: storeAndActions.orderSetDestinationAddress,
          },
          ...(addressIndex === -1 ? [...inputs] : []),
        ]}
      />
    </Fragment>
  );
};

export default UserAndAddress;
