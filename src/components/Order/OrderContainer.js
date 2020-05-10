import React, { useEffect } from "react";
import { withFirebase } from "../FirebaseContext";
import Order from "./Order";
import { orderStatusMap } from "./orderStatusMap";

const OrderContainer = ({ storeAndActions, firebase }) => {
  const { order } = storeAndActions.store;

  useEffect(() => {
    // Listen for Order on Firebase
    const unsubscribeToListener = firebase.onDocument(
      "orders",
      storeAndActions.store.order.idempotencyToken,
      {
        onSnapshot: storeAndActions.orderOnFirestoreChange
      }
    );

    return () => unsubscribeToListener();
  }, []);

  if (!orderStatusMap[order.status]) {
    return null;
  }

  return <Order storeAndActions={storeAndActions} />;
};

export default withFirebase(OrderContainer);
