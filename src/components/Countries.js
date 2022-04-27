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
  /**change la range a value et met que 12 card au demarrage de l'aplli
   *
   *
   */
  const [rangeValue, setRangeValue] = useState(12);
  /**
   * selected radio pour recuperer le clic radio et l'element à afficher
   * selected with ("") emply
   */
  const [selectedRadio, setSelectedRadio] = useState("");
  const [hello, setHello] = useState(
    "||Exemple de setState dans Countries.js !!||"
  );

  {
    /**useEffect se joue quand le composant est monté */
    /**console.log(res.data) on peut voir dans l'inspecteur */
    /**setData(res.Data) on peut voir dans l'inspecteur=> components=> state evoluer */
    /**.map = map toutes card */
    /**.sort() fait un trie de la plus grande a la  plus petite population */
    /**.slice = trie le nombre a afficher .slice(0, 5)affichera de 1 à 5 card , donc remplacer le 5 par rangeValue qui correspond a l'input range*/
  }
  /**Create button radio (dynamique)
   * premiere partie = tableau des radios
   * 2 = faire un map de ce tableau
   */

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);
  const radiosButton = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <div className="countries_container_div">
      {/**exemple de setstatepour voir comment cela fonctionne */}
      {/**  <h2>{hello}</h2>*/} {/**ci dessous map des radios */}
      {console.log(radiosButton)}
      {console.log(radiosButton)}
      <ul className="countries_radios">
        {radiosButton.map((continent, index) => {
          return (
            <li>
              <input
                key={index}
                type="radio"
                id={continent}
                name="continentDuMonde"
                checked={continent === selectedRadio}
                onChange={(e) => setSelectedRadio(e.target.id)}
              />
              <label htmlFor={continent}>{continent}</label>
            </li>
          );
        })}
        {/**if selectedRadio est true else */}
        {selectedRadio && (
          <button onClick={() => setSelectedRadio("")}>Tous les pays</button>
        )}
      </ul>
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
          {data
            .filter((nomDonnéCountry) =>
              nomDonnéCountry.continents[0].includes(selectedRadio)
            )
            .sort((a, b) => b.population - a.population)
            .slice(0, rangeValue)
            .map((nomDonnéCountry, index) => (
              <Card key={index} countryNomAuHasard={nomDonnéCountry} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Countries;
