import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import Carousel from "react-bootstrap/Carousel";

export const OurWork = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className=" w-100 bg-black py-5">
      <div className="background-OurWork row m-auto p-0 border-xy max-width-OurWork ">
        <article className="row m-0 p-0 border-b border-a1">
          <div className="col-lg-6 px-2 ">
            <img
              className="img-fluid ourWork-icon my-3 rounded"
              src="../icons/laHabana-icon.png"
              alt="laHabana"
            />
            <h4 className="title-color">Varadero - La Habana</h4>
            <div className="ourWork-body">
              <li>{language ? "Departures between 8-AM and 9-AM" : "Salidas entre 8-AM y 9-AM"}</li>
              <li>
                {language
                  ? "2 hours and approximately 20 minutes of travel"
                  : "2 horas con 20 minutos aproximadamente de viaje"}
              </li>
              <li>
                {language ? "A stop at the Bacunayagua viewpoint" : "Una parada en el mirador de Bacunayagua"}
              </li>
              <li>{language ? "Places of interest" : "Lugares de interés"}</li>
              <ul type="none" className="ourWork-ul ps-2 m-0">
                <li>{language ? "The Christ" : "El cristo"}</li>
                <li>
                  {language
                    ? "October Crisis Missile Exhibition"
                    : "Exposición de misiles de la crisis de octubre"}
                </li>
                <li>
                  {language
                    ? "San Carlos de la Cabaña Fortress, El Morro"
                    : "Fortaleza San Carlos de la Cabaña, el Morro"}
                </li>
                <li>{language ? "Walk along the boardwalk" : "Paseo por el malecón"}</li>
                <li>{language ? "Revolution Square" : "Plaza de la Revolución"}</li>
                <li>{language ? "Capitol" : "Capitolio"}</li>
                <li>{language ? "Central Park" : "Parque central"}</li>
                <li>{language ? "Bar Floridita" : "Bar Floridita"}</li>
                <li>{language ? "Paseo del Prado" : "Paseo del Prado"}</li>
              </ul>
              <li>{language ? "Old Havana and its squares" : "La Habana vieja y sus plazas"}</li>
              <ul type="none" className="ourWork-ul ps-2 m-0">
                <li>{language ? "Place of arms" : "Plaza de armas"}</li>
                <li>{language ? "October Cathedral Square" : "Plaza de la catedralde octubre"}</li>
                <li>{language ? "San Francisco de Asis Square" : "Plaza san francisco de Asis"}</li>
                <li>{language ? "Old Square" : "Plaza vieja"}</li>
              </ul>
              <li>
                {language
                  ? "Leaving Havana when the program ends between 3-PM and 4-PM."
                  : "Saliendo de la Habana cuando termine el programa entre 3-PM y 4-PM."}
              </li>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <Carousel controls={false} fade>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img ourWork-img-habana"
                  src="../habana0.jpg"
                  alt="habana"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img ourWork-img-habana"
                  src="../habana1.jpg"
                  alt="habana"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img ourWork-img-habana"
                  src="../habana2.jpg"
                  alt="habana"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img ourWork-img-habana"
                  src="../habana3.jpg"
                  alt="habana"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img ourWork-img-habana"
                  src="../habana4.jpg"
                  alt="habana"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </article>
        <article className="row col-lg-6 m-0 p-0 border-b border-a1">
          <div className="col-lg-6 col-xl-5 px-2 ">
            <img
              className="img-fluid ourWork-icon my-3 rounded"
              src="../icons/matanzas-icon.png"
              alt="matanzas"
            />
            <h4 className="title-color">Varadero - Matanzas</h4>
            <div className="ourWork-body">
              <li>{language ? "Places of interest" : "Lugares de interés"}</li>
              <ul type="none" className="ourWork-ul ps-2 m-0">
                <li>{language ? "Coral Beach" : "Playa el coral"}</li>
                <li>{language ? "Saturn Cave" : "Cueva saturno"}</li>
                <li>{language ? "City center" : "Centro de la ciudad"}</li>
                <li>{language ? "Hermitage of Monserrate" : "Ermita de Monserrate"}</li>
                <li>{language ? "Pharmaceutical museum" : "Museo farmacéutico"}</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-xl-7 p-0">
          <Carousel controls={false} fade>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../matanzas1.jpg"
                  alt="matanzas"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../matanzas2.jpg"
                  alt="matanzas5"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../matanzas3.jpg"
                  alt="matanzas5"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../matanzas4.jpg"
                  alt="matanzas5"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../matanzas5.jpg"
                  alt="matanzas5"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </article>
        <article className="row col-lg-6 m-0 p-0 border-b border-a2">
          <div className="col-lg-6 col-xl-5 px-2 ">
            <img
              className="img-fluid ourWork-icon my-3 rounded"
              src="../icons/zapata-icon.png"
              alt="zapata"
            />
            <h4 className="title-color">Varadero - Zapata</h4>
            <div className="ourWork-body">
              <li>{language ? "Places of interest" : "Lugares de interés"}</li>
              <ul type="none" className="ourWork-ul ps-2 m-0">
                <li>{language ? "Farm party peasant" : "Finca fiesta campesina"}</li>
                <li>{language ? "Crocodile farm" : "Criadero de cocodrilo"}</li>
                <li>{language ? "Long beach" : "Playa larga"}</li>
                <li>{language ? "Fish Cave" : "Cueva de los peces"}</li>
                <li>{language ? "Hummingbird House" : "Casa del colibrí"}</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-xl-7 p-0">
          <Carousel controls={false} fade>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../Zienaga.jpg"
                  alt="Zienaga"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../zapata1.jpeg"
                  alt="Zienaga"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../zapata2.jpg"
                  alt="Zienaga"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../zapata3.jpg"
                  alt="Zienaga"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </article>
        <article className="row col-lg-6 m-0 p-0 border-b border-a3">
          <div className="col-lg-6 col-xl-5 px-2 ">
            <img
              className="img-fluid ourWork-icon my-3 rounded"
              src="../icons/vinales-icon.png"
              alt="vinales"
            />
            <h4 className="title-color">Varadero - Viñales</h4>
            <div className="ourWork-body">
              <li>{language ? "Places of interest" : "Lugares de interés"}</li>
              <ul type="none" className="ourWork-ul ps-2 m-0">
                <li>{language ? "Mirador los jazmines" : "Mirador los jazmines"}</li>
                <li>{language ? "Mural of prehistory" : "Mural de la prehistoria"}</li>
                <li>{language ? "Indian Cave" : "Cueva del indio"}</li>
                <li>
                  {language
                    ? "Peasant's house where they see how he twists tobacco"
                    : "Casa de campesino donde ven como tuerce el tabaco"}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-xl-7 p-0">
          <Carousel controls={false} fade>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../vinales1.jpg"
                  alt="vinales"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../vinales2.jpg"
                  alt="vinales"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../vinales3.jpg"
                  alt="vinales"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </article>
        <article className="row col-lg-6 m-0 p-0 ">
          <div className="col-lg-6 col-xl-5 px-2 ">
            <img
              className="img-fluid ourWork-icon my-3 rounded"
              src="..//icons/3ciudades-icon.png"
              alt="3ciudades"
            />
            <h4 className="title-color">Varadero - 3 ciudades</h4>
            <div className="ourWork-body">
              <li>{language ? "Santa Clara" : "Santa Clara"}</li>
              <ul type="none" className="ourWork-ul ps-2 m-0">
                <li>{language ? "Che's Mausoleum" : "Mausoleo del Che"}</li>
                <li>{language ? "Parke Vidal" : "Parke Vidal"}</li>
                <li>{language ? "Monument to the armored train" : "Monumento al tren blindado"}</li>
              </ul>
              <li>{language ? "Trinidad" : "Trinidad"}</li>
              <ul type="none" className="ourWork-ul ps-2 m-0">
                <li>{language ? "Manaca Isnaga Tower" : "Torre de Manaca Isnaga"}</li>
                <li>{language ? "Valley of the sugar mills" : "Valle d los ingenios"}</li>
                <li>{language ? "Chara court bar" : "Bar cancha chara"}</li>
                <li>{language ? "Walk through the city" : "Paseo por la ciudad"}</li>
              </ul>
              <li>{language ? "Cienfuegos" : "Cienfuegos"}</li>
              <ul type="none" className="ourWork-ul ps-2 m-0">
                <li>{language ? "Fat tip" : "Punta gorda"}</li>
                <li>{language ? "Statue of Beni More" : "Estatua de Beni More"}</li>
                <li>{language ? "Marti Park" : "Parque Marti"}</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-xl-7 p-0">
          <Carousel controls={false} fade>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../ciudad0.jpg"
                  alt="ciudad"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../ciudad1.jpg"
                  alt="ciudad"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../ciudad2.jpg"
                  alt="ciudad"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../ciudad4.jpg"
                  alt="ciudad"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../ciudad5.jpg"
                  alt="ciudad"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../ciudad6.jpg"
                  alt="ciudad"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../ciudad7.jpg"
                  alt="ciudad"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid ourWork-img"
                  src="../ciudad8.jpg"
                  alt="ciudad"
                />
              </Carousel.Item>

            </Carousel>
          </div>
        </article>
      </div>
    </section>
  );
};
