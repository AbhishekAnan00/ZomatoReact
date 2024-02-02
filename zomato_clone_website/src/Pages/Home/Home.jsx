import React, { useState } from "react";
import { Header } from "../../Componets/Header/Header";
import { TabOptions } from "../../Componets/TabOptions/TabOptions";
import { Footer } from "../../Componets/Footer/Footer";
import { Delivery } from "../../Componets/Delivery/Delivery";
import { DiningOut } from "../../Componets/DiningOut/DiningOut";
import { NightLife } from "../../Componets/NightLife/NightLife";

export const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  const getCurerntScreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />;
      case "Dining Out":
        return <DiningOut />;
      case "Nightlife":
        return <NightLife />;
      default:
        return <Delivery />;
    }
  };

  return (
    <>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCurerntScreen(activeTab)}
      <Footer />
    </>
  );
};
