import React, { useState, useEffect } from "react";
import { BandsContext } from "./Contexts/BandsContext.js";
import { LoginContext } from "./Contexts/LoginContext.js";
import { TicketsContext } from "./Contexts/TicketsContext.js";
import { ScheduleContext } from "./Contexts/ScheduleContext.js";
import FestApp from "./FestApp";
import RegApp from "./RegApp";

// export const envData = {
//   availableSpots: process.env.FAELLESTIVAL_AVAILABLE_SPOTS,
//   bands: process.env.FAELLESTIVAL_BANDS,
//   events: process.env.FAELLESTIVAL_EVENTS,
//   fullfillReservation: process.env.FAELLESTIVAL_FULLFILL_RESERVATION,
//   schedule: process.env.FAELLESTIVAL_SCHEDULE,
//   reserveSpot: process.env.FAELLESTIVAL_RESERVE_SPOT,
//   settings: process.env.FAELLESTIVAL_SETTINGS,
// };

function App() {
  const [bandsData, setBandsData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [scheduleData, setScheduleData] = useState([]);
  const [ticketsData, setTicketsData] = useState([]);

  useEffect(() => {
    fetch("https://a3m-festival.herokuapp.com/bands")
      .then((res) => res.json())
      .then((data) => {
        setBandsData(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://a3m-festival.herokuapp.com/schedule")
      .then((res) => res.json())
      .then((sdata) => {
        setScheduleData(sdata);
        console.log(sdata);
      });
  }, []);

  useEffect(() => {
    fetch("https://a3m-festival.herokuapp.com/available-spots")
      .then((res) => res.json())
      .then((tdata) => {
        setTicketsData(tdata);
        console.log(tdata);
      });
  }, []);

  return (
    <>
      <BandsContext.Provider value={bandsData}>
        <ScheduleContext.Provider value={scheduleData}>
          <TicketsContext.Provider value={ticketsData}>
            <LoginContext.Provider value={{ isLogin, setIsLogin }}>
              {isLogin ? <FestApp /> : <RegApp />}
            </LoginContext.Provider>
          </TicketsContext.Provider>
        </ScheduleContext.Provider>
      </BandsContext.Provider>
    </>
  );
}

export default App;
