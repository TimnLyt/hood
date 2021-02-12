import React from "react";
import "./Overview.css";
import "../App.css";
import PriceTag from "./PriceTag";
import UserProfile from "./UserProfile";
import ItemDesc from "./ItemDesc";

function Overview() {
  return (
    <>
      <div className="overview-container">
        <PriceTag />
        <ItemDesc />
        <UserProfile />
      </div>
    </>
  );
}

export default Overview;
