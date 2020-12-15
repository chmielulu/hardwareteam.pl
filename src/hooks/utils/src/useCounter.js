import { useState, useEffect } from "react";

export default (timestamp) => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSecond] = useState("");

  useEffect(() => {
    const setTimeRemaining = () => {
      const deadline = new Date(timestamp);
      const now = new Date().getTime();

      const distance = deadline - now;

      if (distance <= 0) {
        clearInterval(timeinterval);
        return null;
      }

      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / 1000 / 60) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setHours(`0${hours}`.slice(-2));
      setMinutes(`0${minutes}`.slice(-2));
      setSecond(`0${seconds}`.slice(-2));

      return null;
    };

    setTimeRemaining();
    const timeinterval = setInterval(setTimeRemaining, 1000);

    return () => {
      clearInterval(timeinterval);
    };
  }, [timestamp]);

  return [hours, minutes, seconds];
};
