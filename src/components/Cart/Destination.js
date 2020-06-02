import React from "react";
import { DialogPaper } from "../UI/FullscreenDialog/components";
import FormFields from "../UI/FormFields";
import ChatBubble from "@material-ui/icons/ChatBubble";

const Destination = ({ storeAndActions }) => {
  const { order } = storeAndActions.store;

  return (
    <DialogPaper>
      <FormFields
        inputs={[
          {
            name: "notes",
            icon: <ChatBubble />,
            label: "Observaciones",
            value: order.destination.notes,
            note: "¿Algo más para que tomemos en cuenta?",
            onChange: storeAndActions.orderSetDestinationProperty
          },
          {
            name: "addChopsticks",
            label: "Enviar Palillos",
            checked: storeAndActions.store.order.destination["addChopsticks"],
            onChange: storeAndActions.orderSetDestinationProperty
          },
          {
            name: "addTeriyaki",
            label: "Enviar Teriyaki",
            checked: storeAndActions.store.order.destination["addTeriyaki"],
            onChange: storeAndActions.orderSetDestinationProperty
          },
          {
            name: "addWasabi",
            label: "Enviar Jengibre",
            checked: storeAndActions.store.order.destination["addWasabi"],
            onChange: storeAndActions.orderSetDestinationProperty
          },
          {
            name: "addGinger",
            label: "Enviar Wasabi",
            checked: storeAndActions.store.order.destination["addGinger"],
            onChange: storeAndActions.orderSetDestinationProperty
          },
          {
            name: "addSoy",
            label: "Enviar Soya",
            checked: storeAndActions.store.order.destination["addSoy"],
            onChange: storeAndActions.orderSetDestinationProperty
          }
        ]}
      />
    </DialogPaper>
  );
};

export default Destination;
