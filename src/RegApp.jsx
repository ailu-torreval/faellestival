import React from "react";
import { useContext } from "react";
import { BandsContext } from "./Contexts/BandsContext.js";
import { LoginContext } from "./Contexts/LoginContext.js";
import { TicketsContext } from "./Contexts/TicketsContext.js";
import { ScheduleContext } from "./Contexts/ScheduleContext.js";
import LandingPage from "./LandingPage";
import LineupPage from "./LineupPage";
import TicketsPage from "./TicketsPage";
import Footer from "./Footer";

function RegApp() {
  const { setIsLogin } = useContext(LoginContext);
  const scheduleData = useContext(ScheduleContext);
  const bandsData = useContext(BandsContext);
  const ticketsData = useContext(TicketsContext);

  function handleClick() {
    console.log("login");
    setIsLogin(true);
  }

  function handleClick2() {
    console.log(bandsData);
  }

  return (
    <>
      <LandingPage />
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Click2</button>

      <LineupPage />
      <TicketsPage />
      <Footer />
    </>
  );
}

export default RegApp;
