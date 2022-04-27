import React from "react";

import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <main className="home_main_container">
        <div>
          <h1 className="home_h1">
            Glisser la souris sur les cartes pour voir les infos pays
          </h1>
          {/**    <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vel
            repudiandae minus saepe eaque reiciendis illo quidem repellendus?
            Eum totam facilis deserunt iure harum libero aliquam, animi debitis
            ab soluta voluptas, cupiditate eligendi doloribus quasi temporibus,
            fugit quam. Voluptatem quia quos quod eum? Reprehenderit provident
            inventore fuga consequuntur pariatur rem vitae quasi obcaecati
            quibusdam praesentium illo doloremque, corporis voluptatibus
            officiis odit, odio libero iure laborum dolor maxime numquam
            asperiores aliquam. Illum architecto ea corporis. Necessitatibus
            earum, magnam blanditiis ad, sit magni dolorum incidunt quod
            perferendis, praesentium ipsa? Ullam, omnis nihil labore officia
          </p>*/}
        </div>
        <Countries />
      </main>
    </>
  );
};

export default Home;
