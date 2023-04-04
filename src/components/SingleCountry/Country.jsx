import React from "react";
import Countries from "../Country/Countries";
import "./Country.css";
const Country = (props) => {
  const {area , region , population , name , flags} = props.country;
  return (
    <div className="country">
      <h3>{name.common}</h3>
      <img src={flags.png}></img>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Region: {region}</p>
    </div>
  );
};

export default Country;
