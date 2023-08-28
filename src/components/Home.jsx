import { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { LanguageContext } from "./LanguageContext";

export const Home = () => {
  const { language, refContact } = useContext(LanguageContext);

  return (
    <section>
      <div className="d-flex justify-content-center">
        <div className="rounded text-center text-white position-h1 home-bg-article position">
          <h1 className="color-h1 m-0 p-3 fs-2 ">
            {language
              ? "Taxi from Varadero to Cuba"
              : "Taxi desde Varadero hacia Cuba"}
          </h1>
          <p>
            {language
              ? "the best way to get to know the island"
              : "el mejor modo de conocer la isla"}
          </p>
        </div>
        <button className="btn btn-lg btn-warning position position-b">
          <a ref={refContact}>{language ? "Contact" : "Contáctanos"}</a>
        </button>
      </div>

      <Carousel controls={false} fade>
        <Carousel.Item>
          <img
            src="../../public/fotis-fotopoulos-7_r85l4eht8-unsplash (1)sm (1).jpg"
            alt="algo"
            className="d-md-none h-100vh w-100"
          />
          <img
            src="../../public/fotis-fotopoulos-7_r85l4eht8-unsplash (2)lg.jpg"
            alt="algo"
            className="d-none d-md-block h-100vh w-100"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="../../public/pexels-life-of-pix-8247 (2)sm.jpg"
            alt="algo"
            className="d-md-none h-100vh w-100"
          />
          <img
            src="../../public/pexels-life-of-pix-8247lg.jpg"
            alt="algo"
            className="d-none d-md-block h-100vh w-100"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="../../public/taxi-gacelas-jorge-ricardo-2023-2-1024x683.jpg"
            alt="algo"
            className="d-md-none h-100vh w-100"
          />
          <img
            src="../../public taxi-gacelas-jorge-ricardo-2023-2-1024x683.jpg"
            alt="algo"
            className="d-none d-md-block h-100vh w-100"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};
