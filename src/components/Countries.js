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
  /**change la range a value et met que 12 card au demarrage de l'aplli */
  const [rangeValue, setRangeValue] = useState(12);
  const [hello, setHello] = useState(
    "||Exemple de setState dans Countries.js !!||"
  );

  {
    /**useEffect se joue quand le composant est monté */
    /**console.log(res.data) on peut voir dans l'inspecteur */
    /**setData(res.Data) on peut voir dans l'inspecteur=> components=> state evoluer */
    /**.map = map toutes card */
    /**.slice = trie le nombre a afficher .slice(0, 5)affichera de 1 à 5 card , donc remplacer le 5 par rangeValue qui correspond a l'input range*/
  }

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries_container_div">
      {/**  <h2>{hello}</h2>*/}{" "}
      {/**exemple de setstatepour voir comment cela fonctionne */}
      <div className="countries_container_Card">
        <div className="checkedRadio_container">
          <ul className="checkedRadio_ul">
            <input
              className="countries_input"
              type="range"
              min={1}
              max={250}
              defaultValue={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
            />
          </ul>
        </div>
        <ul className="countries_ul">
          {data.slice(0, rangeValue).map((nomDonnéCountry, index) => (
            <Card key={index} countryNomAuHasard={nomDonnéCountry} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Countries;
