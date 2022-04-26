import React from "react";

const Card = ({ countryNomAuHasard }) => {
  console.log(countryNomAuHasard);
  return (
    <div className="card_container_div">
      <h2>{countryNomAuHasard.name.common}</h2>
      <p></p>
      <img
        src={countryNomAuHasard.flags.svg}
        alt={"images du drapeux : " + countryNomAuHasard.name.common}
        width={200}
      />
    </div>
  );
};

export default Card;
