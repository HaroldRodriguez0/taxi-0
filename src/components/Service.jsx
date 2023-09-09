import { useContext, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LanguageContext } from "./LanguageContext";
import { ModalService } from "./ModalService";

export const Service = () => {
  AOS.init();
  
  const { language, refService } = useContext(LanguageContext);
  const [service, setService] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <section ref={refService} className="h-100 w-100">
      <div className="img-fixe">
        <article className="bg-t text-center d-flex align-items-center justify-content-center">
          <div 
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true">
            <h3>{language ? "OUR COMPANY" : "NUESTRA EMPRESA"}</h3>
            <p className="mb-1">
              {language
                ? "Your safety is our priority."
                : "Tu seguridad es nuestra prioridad."}
            </p>
          </div>
        </article>
        <article className="bg-w text-center ">
          <div className="w-100 h-w d-flex flex-column justify-content-center align-items-center">
            <div className="w-100 pt-3 d-flex justify-content-around">
              <img
                className="service-icon"
                src="../icons/banderaCuba.png"
                alt="parada"
              />
              <h2 className="display-2">
                <b>{language ? "Services" : "Servicios"}</b>
              </h2>
              <img
                className="service-icon"
                src="../icons/huellaCuba.png"
                alt="parada"
              />
            </div>
            <div className="row w-100 hover-service ">
              <div className="col-6 col-md-3 py-3 d-flex flex-column align-items-center justify-content-center">
                <img
                  onClick={() => {handleShow(); setService(1);}}
                  className="img-size"
                  src="../icons/recogida.png"
                  alt="recogida"
                />
                <h5 className="pt-2">{language ? "pickup" : "recogida"}</h5>
              </div>
              <div className="col-6 col-md-3 py-3 d-flex flex-column align-items-center justify-content-center">
                <img
                  onClick={() => {handleShow(); setService(2);}}
                  className="img-size"
                  src="../icons/traslados.png"
                  alt="recogida"
                />
                <h5 className="pt-2">{language ? "transfers" : "traslados"}</h5>
              </div>
              <div className="col-6 col-md-3 py-3 d-flex flex-column align-items-center justify-content-center">
                <img
                  onClick={() => {handleShow(); setService(3);}}
                  className="img-size"
                  src="../icons/circuitos.png"
                  alt="recogida"
                />
                <h5 className="pt-2">{language ? "circuits" : "circuitos"}</h5>
              </div>
              <div className="col-6 col-md-3 py-3 d-flex flex-column align-items-center justify-content-center">
                <img
                  onClick={() => {handleShow(); setService(4);}}
                  className="img-size"
                  src="../icons/maleta.png"
                  alt="recogida"
                />
                <h5 className="pt-2">{language ? "excursion" : "excursión"}</h5>
              </div>
            </div>
          </div>
        </article>
        <article className="bg-t text-center d-flex align-items-center justify-content-center">
          <div 
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true">
            <h3 >{language ? "PERSONALIZED PLAN" : "PLAN PERSONALIZADO"}</h3>
            <div className="service-number-hvr">
              <a href="tel:5353760295" className="service-info ">+53 53760295</a>
            </div>
            <p className="mb-1">{language ? "We focus on customer needs" : "Nos enfocamos en las necesidades del cliente."}</p>
          </div>
        </article>
      </div>
      <ModalService show={show} handleClose={handleClose} service={service} />
    </section>
  );
};
