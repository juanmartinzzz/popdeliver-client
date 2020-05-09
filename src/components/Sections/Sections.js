import React, { useState } from "react";
import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
import { Tabs, Tab } from "@material-ui/core";
import Section from "../Section/Section";
import { menuSections } from "../../services/parameters/sectionViews";

const StyledSections = styled.div`
  padding-top: 60px;
`;

const Sections = ({ storeAndActions }) => {
  const { layout } = storeAndActions.store;
  const handleChangeTab = (event, value) => {
    storeAndActions.layoutSetSectionNumber(value);
  };

  return (
    <StyledSections>
      <Tabs
        value={layout.sectionNumber}
        variant="scrollable"
        scrollButtons="auto"
        onChange={handleChangeTab}
        indicatorColor="secondary"
      >
        {menuSections.map(({ menuName }) => (
          <Tab key={menuName} label={menuName} />
        ))}
      </Tabs>
    </StyledSections>
  );
};

export default Sections;
