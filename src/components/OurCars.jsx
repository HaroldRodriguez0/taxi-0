import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import AOS from "aos";
import "aos/dist/aos.css";

export const OurCars = () => {
  AOS.init();
  const { language, refOurCar } = useContext(LanguageContext);
  {
    language ? "" : "Lugares de interés";
  }

  return (
    <section
      ref={refOurCar}
      className="container row justify-content-center w-100 my-4 mx-auto p-0 "
    >
      <div className="col-9 col-md-6 py-4 border max-w-ourCars">
        <h2 className="nameCars">{language ? "Name Car" : "Name Car"}</h2>
        <img
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-once="true"
          className="img-fluid imgOurCars"
          src="../carroHorizontal1.png"
          alt="image-taxi"
        />
        <h5 className="titleCars">
          {language ? "Algun titulo apropiado" : "Algun titulo apropiado"}
        </h5>
        <ul className="ul-fs">
          <li>{language ? "Fixed price" : 'Precio fijo'}</li>
          <li>{language ? "English-speaking driver" : 'Conductor de habla inglesa'}</li>
          <li>{language ? "Automated flight and train tracking" : 'Seguimiento automatizado de vuelos y trenes'}</li>
          <li>{language ? "45 minutes waiting time after landing" : '45 minutos de espera después del aterrizaje.'}</li>
          <li>{language ? "Pickup with name sign in arrivals hall" : 'Recogida con cartel con el nombre en la sala de llegadas.'}</li>
          <li>{language ? "Children seats available on request" : 'Asientos para niños disponibles bajo petición.'}</li>
        </ul>
      </div>
      <div className="col-9 col-md-6 py-4 border max-w-ourCars">
        <h2 className="nameCars">{language ? "Name Car" : "Name Car"}</h2>
        <img
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-once="true"
          className="img-fluid imgOurCars"
          src="../carroHorizontal2.png"
          alt="image-taxi"
        />
        <h5 className="titleCars">
          {language ? "Algun titulo apropiado" : "Algun titulo apropiado"}
        </h5>
        <ul className="ul-fs">
          <li>{language ? "Fixed price" : 'Precio fijo'}</li>
          <li>{language ? "English-speaking driver" : 'Conductor de habla inglesa'}</li>
          <li>{language ? "Automated flight and train tracking" : 'Seguimiento automatizado de vuelos y trenes'}</li>
          <li>{language ? "45 minutes waiting time after landing" : '45 minutos de espera después del aterrizaje.'}</li>
          <li>{language ? "Pickup with name sign in arrivals hall" : 'Recogida con cartel con el nombre en la sala de llegadas.'}</li>
          <li>{language ? "Children seats available on request" : 'Asientos para niños disponibles bajo petición.'}</li>
        </ul>
      </div>
    </section>
  );
};
