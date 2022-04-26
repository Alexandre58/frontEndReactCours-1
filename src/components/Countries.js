import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  {
    /**data = stock les données , setData = pour les changer , useSate = change les données */
    /**le state evolue à voir dans dev tools dans l'inspecteur , component et click sur countries */
    /**pour exploiter la data = .map avec key dans retour autour d'un ul li*/
  }
  const [data, setData] = useState([]);
  const [hello, setHello] = useState(
    "||Exemple de setState dans Countries.js !!||"
  );

  {
    /**useEffect se joue quand le composant est monté */
    /**console.log(res.data) on peut voir dans l'inspecteur */
    /**setData(res.Data) on peut voir dans l'inspecteur=> components=> state evoluer */
  }

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries_container_div">
      <h1>Components countries</h1>
      <h2>{hello}</h2>
      <div className="countries_container_Card">
        <ul className="countries_ul">
          {data.map((nomDonnéCountry, index) => (
            <Card key={index} countryNomAuHasard={nomDonnéCountry} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Countries;
