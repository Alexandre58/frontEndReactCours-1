import React from "react";

const Card = ({ countryNomAuHasard }) => {
  // console.log(countryNomAuHasard);

  return (
    <div className="card_container_div">
      <div className="card_hover_information_card">
        <h2>{countryNomAuHasard.name.common}</h2>
        <p>
          <em>Capital :</em>
          <strong> {countryNomAuHasard.capital}</strong>
        </p>
        <p>
          <em>Population : </em>
          <strong>{countryNomAuHasard.population.toLocaleString()}</strong>
        </p>
        <p>
          <em>Continent : </em>
          <strong> {countryNomAuHasard.continents}</strong>
        </p>
        <p>
          <em>Région :</em>
          <strong> {countryNomAuHasard.subregion}</strong>
        </p>
        {/**  <img src={countryNomAuHasard.coatOfArms.png} width={50}></img>*/}
        <p>
          <em>Véhicule roule à :</em>{" "}
          <strong>{countryNomAuHasard.car.side}</strong>
        </p>
      </div>
      <a href={countryNomAuHasard.maps.googleMaps} target="_blank">
        Google Maps
      </a>

      <img
        src={countryNomAuHasard.flags.svg}
        alt={"images du drapeux : " + countryNomAuHasard.name.common}
        width={200}
      />
    </div>
  );
};

export default Card;
