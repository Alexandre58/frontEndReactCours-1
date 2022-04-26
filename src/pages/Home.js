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
          <h1 className="home_h1">ACCUEIL</h1>
          <p>
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
            excepturi et quisquam inventore corporis, nulla veniam enim numquam
            quaerat odit itaque rerum eaque deleniti deserunt tempore! Maiores
            ducimus officia aliquam voluptas similique quaerat quis maxime quos
            pariatur! Provident molestiae eaque saepe veniam error temporibus
            assumenda, facere tempora quos, earum dolorum excepturi cum
            laboriosam? Sunt provident nisi minima perspiciatis pariatur. Nemo
            culpa sunt voluptatum dicta iste similique porro, incidunt quo
            magnam dolorum, aliquid quibusdam ab repudiandae consectetur soluta
            maxime obcaecati fugit, earum dolores eos fuga recusandae officiis?
            Ab sapiente, ex nisi praesentium, iusto id distinctio porro
            voluptates dolor ducimus voluptas at temporibus voluptatibus
            eveniet. Omnis incidunt magnam doloribus laboriosam sapiente
            doloremque! Quaerat molestias quae dolorum laudantium at vel.
          </p>
        </div>
        <Countries />
      </main>
    </>
  );
};

export default Home;
