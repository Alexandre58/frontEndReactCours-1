import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
const radiosButton = ["Afrique", "Amérique", "Asie", "Europe", "Océanie"];

const About = () => {
  return (
    <>
      <Navigation />
      <main className="about_main_container">
        <div className="about_div_container_h1_p">
          <h1 className="about h1">À propos de nous</h1>
          <img src="./logo512.png" />
          <p className="about_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quia
            dignissimos dolorem porro provident, nihil nobis accusamus placeat,
            ducimus quo sapiente et totam voluptas incidunt ratione repellat
            ipsam deleniti maiores consequuntur. Ad accusantium numquam
            consectetur tempore nihil magnam, sint at magni, voluptates facilis
            deleniti harum! Expedita cum quisquam at aut impedit itaque
            repudiandae rem eaque excepturi odio voluptatem enim perspiciatis
            fugit, tempore amet praesentium eius nobis aperiam libero aspernatur
            sit labore unde. Nisi maiores eveniet dignissimos, odit repellat
            atque reiciendis consequuntur ratione, illo id at molestias aliquam
            cumque perferendis minima sequi facilis suscipit qui eum veritatis
            itaque incidunt? Distinctio dolorem, ullam laboriosam aspernatur
            quia numquam fugit quod at facilis architecto consequatur minus
            repellendus iure tempore enim magni ratione aliquid a sit nesciunt
            blanditiis ad? Aspernatur delectus, itaque illum possimus porro
            autem aperiam commodi quisquam nulla velit non accusamus dolor fuga
            ad quis officia quae impedit maiores praesentium nihil placeat eaque
            quos neque. Delectus debitis repellendus nobis? Deleniti cupiditate,
            omnis nemo tempora accusamus magnam accusantium enim asperiores
            similique aut incidunt, amet explicabo suscipit ex cumque odio
            temporibus officia? Magni porro libero exercitationem, soluta,
            doloremque ex culpa, iure nostrum veritatis expedita aliquam id
            aspernatur nam rem ipsam beatae in sit omnis totam.{" "}
          </p>
          <p className="about_p">
            <em>Thierry ALEXANDRE</em>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
