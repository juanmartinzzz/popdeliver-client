import React, { useEffect, useState } from "react";
import { withFirebase } from "../../FirebaseContext";
import { fetchEmail } from "../../../services/entities/email";
import Totals from "./Totals";

const TotalsContainer = ({ storeAndActions, firebase }) => {
  const { order } = storeAndActions.store;
  const [email, setEmail] = useState(null);

  useEffect(() => {
    fetchEmail({ emailAddress: order.recipient.email, setEmail, firebase });
  }, []);

  return <Totals email={email} storeAndActions={storeAndActions} />;
};

export default withFirebase(TotalsContainer);
