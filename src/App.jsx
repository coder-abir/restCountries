import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Country/Countries";

function App() {
  return (
    <div className="App">
      <h1>All Countries</h1>
      <Countries></Countries>
    </div>
  );
}

/* function LoadCountries() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  return (
    <div>
      <h3>available countries : {country.length}</h3>
      {country.map((country) => (
        <Country name={country.name.common} population={country.population}></Country>
      ))}
    </div>
  );
}

function Country(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Population: {props.population}</h4>
    </div>
  );
} */

export default App;
