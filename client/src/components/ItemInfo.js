import React from "react";
import "./ItemInfo.css";
import "../App.css";

function ItemInfo() {
  return (
    <>
      <div className="iteminfo-container">
        <h1>Condition of Item: </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          scelerisque, arcu ac feugiat vulputate, libero sem elementum est, et
          maximus leo justo ut eros. Mauris eu odio ligula. Aliquam quis justo
          scelerisque, sagittis mi eu, dapibus metus. Proin sit amet.
        </p>
        <h1>Description of Item:</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          scelerisque, arcu ac feugiat vulputate, libero sem elementum est, et
          maximus leo justo ut eros. Mauris eu odio ligula. Aliquam quis justo
          scelerisque, sagittis mi eu, dapibus metus. Proin sit amet.
        </p>
      </div>
    </>
  );
}

export default ItemInfo;
