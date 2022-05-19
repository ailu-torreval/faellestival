import React, { useContext } from "react";
import { BandsContext } from "./Contexts/BandsContext";

function LineupPage() {
  const bandsData = useContext(BandsContext);

  function manageClick() {
    console.log(bandsData);
  }
  return (
    <div>
      <button onClick={manageClick}>click</button>
      LineupPage
    </div>
  );
}

export default LineupPage;
