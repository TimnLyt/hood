import React from "react";
import "./Overview.css";
import "../App.css";
import PriceTag from "../components/PriceTag";
import UserProfile from "../components/UserProfile";
import ItemDesc from "../components/ItemDesc";

function Overview() {
  return (
    <>
      <div className="overview-container">
        <PriceTag />
        <ItemDesc />
        <UserProfile />
      </div>
      ;
    </>
  );
}

export default Overview;
