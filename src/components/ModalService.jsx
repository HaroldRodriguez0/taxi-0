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


  const titleBody = (service) => {
    switch (service) {
      case 1:  
        return language ? "At your disposal" : "A tu disposición";
      case 2:
        return language ? "To the place you want" : "Al sitio que desees";
      case 3:
        return language ? "algun titulo" : "algun titulo";
      case 4:
        return language ? "Live the experience" : "Vive la experiencia";
      default:
        break;
    }
  };

  const textBody = (service) => {
    switch (service) {
      case 1:  
        return language 
          ? "We pick up at the Varadero and Havana airports and take you to the destination you want."
          : "Realizamos recogidas en los aeropuertos de Varadero y La Habana y lo llevamos al destino que desee.";
      case 2:
        return language 
          ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate excepturi nemo deleniti ipsum magnam at expedita facere quo alias."
          : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate excepturi nemo deleniti ipsum magnam at expedita facere quo alias.";
      case 3:
        return language 
          ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate excepturi nemo deleniti ipsum magnam at expedita facere quo alias."
          : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate excepturi nemo deleniti ipsum magnam at expedita facere quo alias.";
      case 4:
        return language 
          ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate excepturi nemo deleniti ipsum magnam at expedita facere quo alias."
          : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate excepturi nemo deleniti ipsum magnam at expedita facere quo alias.";
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
            <div className="">
              <h3 className="pt-2">{ titleBody( service )}</h3>
              <p>{ textBody( service )}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};
