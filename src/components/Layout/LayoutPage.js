import React, { Fragment } from "react";
import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import CartContainer from "../Cart";
import OrderContainer from "../Order";
import Section from "../Section/Section";
import Sections from "../Sections/Sections";
import CustomizeItem from "../Cart/CustomizeItem/CustomizeItem";
import DeliveryNoticeDialog from "../Cart/DeliveryNotices/DeliveryNoticeDialog";
import OutsideServiceHoursNotice from "../Cart/OutsideServiceHoursNotice/OutsideServiceHoursNotice";
import UserContainer from "../User/UserContainer";

const LayoutPage = ({ storeAndActions }) => (
  <CssBaseline>
    {!storeAndActions.store.layout.cartOpen && (
      <Fragment>
        <Header storeAndActions={storeAndActions} />

        <Sections storeAndActions={storeAndActions} />
        <Section storeAndActions={storeAndActions} />

        <Footer storeAndActions={storeAndActions} />
      </Fragment>
    )}

    {storeAndActions.store.layout.cartOpen && (
      <CartContainer storeAndActions={storeAndActions} />
    )}

    <UserContainer storeAndActions={storeAndActions} />

    <OrderContainer storeAndActions={storeAndActions} />

    <DeliveryNoticeDialog storeAndActions={storeAndActions} />

    <OutsideServiceHoursNotice storeAndActions={storeAndActions} />

    <CustomizeItem storeAndActions={storeAndActions} />
  </CssBaseline>
);

export default LayoutPage;
