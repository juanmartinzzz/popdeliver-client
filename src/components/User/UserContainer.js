import React, { useEffect } from "react";
import User from "./User";
import { withFirebase } from "../FirebaseContext";

const UserContainer = ({ storeAndActions, firebase }) => {
  const { layout, user } = storeAndActions.store;

  useEffect(() => {
    if (user.id) {
      // Listen for User on Firebase
      const unsubscribeToListener = firebase.onDocumentV2({
        path: "users",
        document: user.id,
        onSnapshot: storeAndActions.userOnFirestoreChange
      });

      return () => unsubscribeToListener();
    } else {
      storeAndActions.userGetFromFirestore();
    }
  }, []);

  if (!layout.userOpen) {
    return null;
  }

  return <User storeAndActions={storeAndActions} />;
};

export default withFirebase(UserContainer);
