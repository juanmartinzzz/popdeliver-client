import React, { useEffect } from "react";
import Totals from "./Totals";

const TotalsContainer = ({ storeAndActions }) => {
  useEffect(() => {
    storeAndActions.userGetFromFirestore();
  }, []);

  return <Totals storeAndActions={storeAndActions} />;
};

export default TotalsContainer;
