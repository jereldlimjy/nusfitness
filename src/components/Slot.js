import { useState, useEffect } from "react";

const Slot = ({ facility, date, hour, handleChange, checked }) => {
  const [slotsLeft, setSlotsLeft] = useState(0);
  const slotsCap = 20; // TODO: different across facilities

  const heroku = "https://salty-reaches-24995.herokuapp.com/slots";
  const localHost = "http://localhost:3000/slots";
  useEffect(() => {
    const fetchSlotsCount = async () => {
      const res = await fetch(localHost, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          facility,
          date,
          hour,
        }),
        credentials: "include",
      });
      const slotsCount = await res.json();
      setSlotsLeft(slotsCap - slotsCount);
    };
    fetchSlotsCount();
  });

  // Disable current day slots whose time has elapsed
  const hourInt = parseInt(hour.slice(0, 2));
  const slotTime = new Date(date).setHours(hourInt + 1); // + 1 since the slot can still be booked in the 1h gap
  const currentTime = new Date().getTime();

  return (
    <div className="border-box">
      <input
        type="checkbox"
        id={hour + date}
        date={date}
        hour={hour}
        onChange={handleChange}
        checked={checked}
        disabled={slotsLeft <= 0 || slotTime <= currentTime}
      />
      <label htmlFor={hour + date}>{hour}</label>
      <label htmlFor={hour + date}>{`${slotsLeft} Left`}</label>
    </div>
  );
};

export default Slot;
