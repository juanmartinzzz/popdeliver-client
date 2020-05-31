import React, { Fragment } from "react";
import Home from "@material-ui/icons/Home";
import Mail from "@material-ui/icons/Mail";
import Label from "@material-ui/icons/Label";
import Phone from "@material-ui/icons/Phone";
import Person from "@material-ui/icons/Person";
import Explore from "@material-ui/icons/Explore";
import ChatBubble from "@material-ui/icons/ChatBubble";
import AddressFormFields from "./AddressFormFields";

const UserAndAddress = ({ storeAndActions }) => {
  const { order, user } = storeAndActions.store;
  const { address } = order.destination;

  return (
    <Fragment>
      <AddressFormFields
        storeAndActions={storeAndActions}
        inputs={[
          {
            name: "email",
            icon: <Mail />,
            label: "Email",
            value: user.email,
            note: "No enviamos Spam ni damos tu correo a terceros.",
            onChange: storeAndActions.userSetProperty,
            onBlur: storeAndActions.userGetFromFirestore
          },
          {
            name: "phone",
            icon: <Phone />,
            label: "Celular",
            value: user.phone,
            note: "Te avisamos por WhatsApp sobre el estado de tu Órden.",
            onChange: storeAndActions.userSetProperty,
            onBlur: storeAndActions.userGetFromFirestore
          },
          {
            name: "addressIndex",
            icon: <Explore />,
            label: "Enviar a",
            value: order.destination.addressIndex || -1,
            options: user.addresses
              .map(({ directions, locality, nickname, recipient }, index) => ({
                value: index,
                content: `${nickname}: ${directions}, ${locality} (recibe ${recipient})`
              }))
              .concat([{ value: -1, content: "Dirección nueva" }]),
            onChange: storeAndActions.orderSetDestinationAddress
          },
          {
            name: "nickname",
            icon: <Label />,
            value: address.nickname,
            label: "Apodo para esta dirección de envío",
            onChange: storeAndActions.orderSetDestinationAddressProperty
          },
          {
            name: "recipient",
            icon: <Person />,
            value: address.recipient,
            label: "Quién recibirá el pedido",
            onChange: storeAndActions.orderSetDestinationAddressProperty
          },
          {
            name: "directions",
            icon: <Home />,
            label: "Dirección",
            value: address.directions,
            onChange: storeAndActions.orderSetDestinationAddressProperty
          },
          {
            name: "locality",
            icon: <Explore />,
            label: "Barrio, conjunto",
            value: address.locality,
            onChange: storeAndActions.orderSetDestinationAddressProperty
          },
          {
            name: "notes",
            icon: <ChatBubble />,
            label: "Observaciones",
            value: order.destination.notes,
            note: "¿Algo más para que tomemos en cuenta?",
            onChange: () => alert("notes")
          }
        ]}
      />
    </Fragment>
  );
};

export default UserAndAddress;
