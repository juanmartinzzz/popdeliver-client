import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import { withFirebase } from "../FirebaseContext";
import { isStoreOpen } from "./utils";

const CartContainer = ({ storeAndActions, firebase }) => {
  const [currentDate, setCurrentDate] = useState(null);

  const handleConfirmCart = async () => {
    if (isStoreOpen(currentDate)) {
      storeAndActions.layoutSetDeliveryPriceReminderOpen(true);
    } else {
      storeAndActions.layoutSetOutsideServiceHoursNoticeOpen(true);
    }
  };

  const setCurrentDateAsync = async () => {
    setCurrentDate(await firebase.getCurrentDate());
  };

  useEffect(() => {
    setCurrentDateAsync();
  }, []);

  return (
    <Cart
      handleConfirmCart={handleConfirmCart}
      storeAndActions={storeAndActions}
    />
  );
};

export default withFirebase(CartContainer);
