import Carousel from "react-bootstrap/Carousel";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const Coments = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="container row w-100 mx-auto border py-3 mb-4 ">
      <div className="col-md-6 d-flex justify-content-center">
        <img
          className="img-fluid  rounded "
          src="../comentario.jpg"
          alt='comentario'
        ></img>
      </div>
      <div className="col-md-6 comments-bg">
        <h3 className="text-center mt-3 titleCars">
          {language ? "Comments" : "Comentarios"}
        </h3>
        <Carousel className="carousel-vh">
          <Carousel.Item>
            <div>
              <p className="m-0 ">
                {language
                  ? "Taxi Cuba took me to see the most beautiful and authentic places on the island. The driver was very friendly and professional, and the car was in perfect condition. I recommend Taxi Cuba 100%"
                  : "Taxi Cuba me llevó a conocer los lugares más hermosos y auténticos de la isla. El conductor fue muy amable y profesional, y el coche estaba en perfectas condiciones. Recomiendo Taxi Cuba al 100%"}
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <p className="m-0 ">
                {language
                  ? "Taxi Cuba is the best taxi service I have ever tried. The driver picked me up on time at the airport and we enjoyed everything Cuba has to offer."
                  : "Taxi Cuba es el mejor servicio de taxis que he probado. El conductor me recogió puntualmente en el aeropuerto y disfrutamos de todo lo que Cuba tiene que ofrecer."}
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <p className="m-0 ">
                {language
                  ? "I loved traveling with Taxi Cuba. The car was very comfortable and safe. We visited emblematic places and I learned a lot about their history and culture. It is the taxi service that I recommend to everyone who wants to get to know the island"
                  : "Me encantó viajar con Taxi Cuba. El coche era muy cómodo y seguro. Visitamos lugares emblemáticos y aprendí mucho sobre su historia y cultura. Es el servicio de taxis que recomiendo a todos los que quieran conocer la isla."}
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};
