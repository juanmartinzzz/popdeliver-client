import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartContainer from "../Cart";
import Sections from "../Sections/Sections";
import { CssBaseline } from "@material-ui/core";
import CustomizeItem from "../Cart/CustomizeItem/CustomizeItem";
import Section from "../Section/Section";
import OutsideServiceHoursNotice from "../Cart/OutsideServiceHoursNotice/OutsideServiceHoursNotice";
import DeliveryNoticeDialog from "../Cart/DeliveryNotices/DeliveryNoticeDialog";
import Order from "../Order/Order";

const LayoutPage = ({ storeAndActions }) => (
  <CssBaseline>
    {!storeAndActions.store.cart.open && (
      <Fragment>
        <Header storeAndActions={storeAndActions} />

        <Sections storeAndActions={storeAndActions} />
        <Section storeAndActions={storeAndActions} />

        <Footer storeAndActions={storeAndActions} />
      </Fragment>
    )}

    {storeAndActions.store.cart.open && (
      <CartContainer storeAndActions={storeAndActions} />
    )}

    <Order storeAndActions={storeAndActions} />

    <DeliveryNoticeDialog storeAndActions={storeAndActions} />

    <OutsideServiceHoursNotice storeAndActions={storeAndActions} />

    <CustomizeItem storeAndActions={storeAndActions} />
  </CssBaseline>
);

export default LayoutPage;
