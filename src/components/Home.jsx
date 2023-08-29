import { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { LanguageContext } from "./LanguageContext";

export const Home = () => {

  const { language, refContact } = useContext(LanguageContext);
  const scrollRef = () => {
    refContact.current.scrollIntoView({ behavior: 'smooth'});
  }
  return (
    <section className="mt-5">
      <div className="d-flex justify-content-center">
        <div className="rounded text-center text-white position-h1 home-bg-article position">
          <h1 className="color-h1 m-0 p-3 fs-2 ">
            {language
              ? "Get your dreams off the pillow and roll them"
              : "Saca tus sueños de la almohada y ponlos a rodar"}
          </h1>
          <p>
            {language
              ? "the best way to get to know the island"
              : "el mejor modo de conocer la isla"}
          </p>
        </div>
        <button onClick={() => scrollRef()} className="btn btn-lg fs-3 btn-warning position position-b">
          {language ? "Contact" : "Contáctanos"}
        </button>
      </div>

      <Carousel controls={false} fade>
      <Carousel.Item>
          <img
            src="../frente-carro.jpg"
            alt="carro"
            className="d-md-none h-100vh w-100"
          />
          <img
            src="../frente-carro.jpg"
            alt="carro"
            className="d-none d-md-block h-100vh w-100"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="../fotis-fotopoulos-7_r85l4eht8-unsplash (1)sm (1).jpg"
            alt="algo"
            className="d-md-none h-100vh w-100"
          />
          <img
            src="../fotis-fotopoulos-7_r85l4eht8-unsplash (2)lg.jpg"
            alt="algo"
            className="d-none d-md-block h-100vh w-100"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="../pexels-life-of-pix-8247 (2)sm.jpg"
            alt="algo"
            className="d-md-none h-100vh w-100"
          />
          <img
            src="../pexels-life-of-pix-8247lg.jpg"
            alt="algo"
            className="d-none d-md-block h-100vh w-100"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};
