import { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { LanguageContext } from "./LanguageContext";

// eslint-disable-next-line react/prop-types
export const ModalService = ({ show, handleClose, service }) => {
  const { language } = useContext(LanguageContext);


  const title = (service) => {
    switch (service) {
      case 1:  
        return language ? "Pickup" : "Recogida";
      case 2:
        return language ? "Transfers" : "Traslados";
      case 3:
        return language ? "Circuits" : "Circuitos";
      case 4:
        return language ? "Excursion" : "Excursión";
      default:
        break;
    }
  };

  const icon = (service) => {
    switch (service) {
      case 1:  
        return "../icons/recogida.png";
      case 2:
        return "../icons/traslados.png";
      case 3:
        return "../icons/circuitos.png";
      case 4:
        return "../icons/maleta.png";
      default:
        break;
    }
  };

  const img = (service) => {
    switch (service) {
      case 1:  
        return window.innerWidth < 500 ?"../recogida-sm.jpg" :"../recogida-lg.jpg";
      case 2:
        return "../default-image.jpg";
      case 3:
        return "../default-image.jpg";
      case 4:
        return "../default-image.jpg";
      default:
        break;
    }
  };

  const titleBody = (service) => {
    switch (service) {
      case 1:  
        return language ? "Pickup" : "A tu disposición";
      case 2:
        return language ? "Pickup" : "Al sitio que desees";
      case 3:
        return language ? "Pickup" : "algun titulo";
      case 4:
        return language ? "Pickup" : "Vive la experiencia";
      default:
        break;
    }
  };

  const textBody = (service) => {
    switch (service) {
      case 1:  
        return language 
          ? "Pickup"
          : "Realizamos recogidas en los aeropuertos de Varadero y La Habana y lo llevamos al destino que desee.";
      case 2:
        return language 
          ? "Pickup"
          : "Realizamos recogidas en los aeropuertos de Varadero y La Habana y lo llevamos al destino que desee.";
      case 3:
        return language 
          ? "Pickup"
          : "Realizamos recogidas en los aeropuertos de Varadero y La Habana y lo llevamos al destino que desee.";
      case 4:
        return language 
          ? "Pickup"
          : "Realizamos recogidas en los aeropuertos de Varadero y La Habana y lo llevamos al destino que desee.";
      default:
        break;
    }
  };



  return (
    <section>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="display-5 fs-w">
            <img
              className="modalIcon"
              src={ icon( service )}
              alt="icon-img"
            />
            { title(service) }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid"
                src={ img( service )}
                alt="service-img"
              ></img>
            </div>
            <div className="col-lg-6">
              <h3 className="pt-2">{ titleBody( service )}</h3>
              <p>{ textBody( service )}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};
