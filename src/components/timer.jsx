import React, { useState, useEffect } from "react";

export default function Timercountdown() {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-12-24T00:00:00");
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countDownTimer">
      <div className="timeContainer">
        <h1 id="timeDays">{timeLeft.days || "0"}</h1>
        <p>Days</p>
      </div>
      <div className="timeContainer">
        <h1 id="timeHours">{timeLeft.hours || "0"}</h1>
        <p>Hours</p>
      </div>
      <div className="timeContainer">
        <h1 id="timeMinutes">{timeLeft.minutes || "0"}</h1>
        <p>Minutes</p>
      </div>
      <div className="timeContainer">
        <h1 id="timeSeconds">{timeLeft.seconds || "0"}</h1>
        <p>Seconds</p>
      </div>
    </div>
  );
}
