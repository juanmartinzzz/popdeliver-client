import React, { useState } from "react";
import LayoutPage from "./LayoutPage";
import { getLocalStorageItemV2 } from "../../services/localStorage/localStorage";
import { getStoreAndActions, initialStateStore } from "../../state/Store";
import { withFirebase } from "../FirebaseContext";

const LayoutContainer = ({ firebase }) => {
  const storeAndSetStore = useState(
    getLocalStorageItemV2({
      name: "store",
      defaultValue: initialStateStore,
      flush: false
    })
  );
  const storeAndActions = getStoreAndActions({ storeAndSetStore, firebase });
  console.log("--store", storeAndActions.store);

  return <LayoutPage storeAndActions={storeAndActions} />;
};

export default withFirebase(LayoutContainer);
