import React from "react";
import FiterRate from "./FiterRate";

function FiterRates() {
  return (
    <>
      <p>評價篩選</p>
      <FiterRate value={5} />
      <FiterRate value={4} />
      <FiterRate value={3} />
      <FiterRate value={2} />
      <FiterRate value={1} />
    </>
  );
}

export default FiterRates;
