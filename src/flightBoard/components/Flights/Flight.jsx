import React from "react";
import moment from "moment";

import { getFlightStatus } from "./flightStatus";

const Flight = ({
  term,
  fltNo,
  status,
  name,
  logoUrl,
  airportName,
  localTime,
  timeStatus,
}) => {
  const myLocalTime = moment(localTime).format("HH:mm");
  const myTimeStatus = moment(timeStatus).format("HH:mm");

  return (
    <tr>
      <td className="terminal-field">
        <span className={term === "D" ? "terminal blue" : "terminal"}>
          {term}
        </span>
      </td>
      <td className="time-field">{myLocalTime}</td>
      <td className="way-field">
        <span>{airportName}</span>
      </td>
      <td className="status-field">
        <span>{getFlightStatus(status, myTimeStatus)}</span>
      </td>
      <td className="company-name">
        <span className="logo">
          <img src={logoUrl} alt={name} />
          <span>{name}</span>
        </span>
      </td>
      <td className="flight-field">
        <span>{fltNo}</span>
      </td>
    </tr>
  );
};

export default Flight;
