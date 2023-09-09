import { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { LanguageContext } from "./LanguageContext";


// eslint-disable-next-line react/prop-types
export const ModalMAp = ({ show, handleClose, sitie }) => {
  const { language } = useContext(LanguageContext);

  const title = (sitie) => {
    switch (sitie) {
      case 0:
        return "Viñales";
      case 1:
        return "Las Terrazas";
      case 2:
        return "Soroa";
      case 3:
        return "La Habana";
      case 4:
        return "Matanzas";
      case 5:
        return "Ciénaga de Zapata";
      case 6:
        return "Varadero";
      case 7:
        return "Cienfuegos";
      case 8:
        return "Trinidad";
      case 9:
        return "Santa Clara";
      default:
        break;
    }
  };

  const img1 = (sitie) => {
    switch (sitie) {
      case 0:
        return "../vinales.jpg";
      case 1:
        return "../terrazas.jpg";
      case 2:
        return "../soroa.JPG";
      case 3:
        return "../habana.png";
      case 4:
        return "../matanzas.jpg";
      case 5:
        return "../Zienaga.jpg";
      case 6:
        return "../varadero.jpg";
      case 7:
        return "../cienfuegos.jpg";
      case 8:
        return "../trinidad.jpg";
      case 9:
        return "../santaClara.jpg";
      default:
        break;
    }
  };

  const titleBody = (sitie) => {
    switch (sitie) {
      case 0:
        return language ? "" : "titulo algo asi quiero poner";
      case 1:
        return language ? "" : "titulo algo asi quiero poner";
      case 2:
        return language ? "" : "titulo algo asi quiero poner";
      case 3:
        return language ? "" : "titulo algo asi quiero poner";
      case 4:
        return language ? "" : "titulo algo asi quiero poner";
      case 5:
        return language ? "" : "titulo algo asi quiero poner";
      case 6:
        return language ? "" : "titulo algo asi quiero poner";
      case 7:
        return language ? "" : "titulo algo asi quiero poner";
      case 8:
        return language ? "" : "titulo algo asi quiero poner";
      case 9:
        return language ? "" : "titulo algo asi quiero poner";
      default:
        break;
    }
  };

  const textBody = (sitie) => {
    switch (sitie) {
      case 0:
        return language
          ? ""
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
      case 1:
        return language
          ? ""
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
      case 2:
        return language
          ? ""
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
      case 3:
        return language
          ? ""
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
      default:
      case 4:
        return language
          ? ""
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
      case 5:
        return language
          ? ""
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
      case 6:
        return language
          ? ""
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
      case 7:
        return language
          ? ""
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
      case 8:
        return language
          ? ""
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
      case 9:
        return language
          ? ""
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
    }
  };

  return (
    <section>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="display-5 fs-w">
            <img
              className="modalIcon"
              src="../icons/citie-icon.png"
              alt="icon-img"
            />
            {title(sitie)}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid w-100 h-30vh"
                src={img1(sitie)}
                alt="sitie-img"
              />
            </div>
            <div className="col-lg-6">
              <h3 className="pt-2">{titleBody(sitie)}</h3>
              <p>{textBody(sitie)}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};
