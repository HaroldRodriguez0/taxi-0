import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from "@emailjs/browser";
import { useContext, useRef } from "react";
import { LanguageContext } from "./LanguageContext";
import { SgvFacebook, SgvInstagram, SgvTwitter, SgvYoutube } from "../assets/svg";

export const Contact = () => {
  const form = useRef();

  const { language, refContact } = useContext(LanguageContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8vlojj4",
        "template_quv6ofk",
        form.current,
        "SPkXvX_RCPuhsK88h"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section ref={refContact} className="bg-dark pt-4">
      <Container className="flex-column footer-text-color container">
        <Row className="w-100">
          <Col md={6}>
            <h2 className="footer-title py-2">
              {language ? "Contact details" : "Detalles de contacto"}
            </h2>
            <h5 className="m-0">{language ? "General Manager" : "General Manager"}</h5>
            <h2 className="mb-3 footer-info-color">Oriel ... ...</h2>
            <h5 className="m-0">{language ? "Phone number" : "Phone number"}</h5>
            <div className="service-number-hvr">
              <a href="tel:5353760295" className="mb-5 footer-info-color">
              +53 53760295
            </a>
            </div>
            
          </Col>
          <Col md={6} className="pt-4">
            <form ref={form} onSubmit={sendEmail} className="px-auto">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  name="user_email"
                  className="form-control"
                  placeholder="You Email"
                  type="email"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  {language ? "Comments" : "Comentarios"}
                </label>
                <textarea
                  name="message"
                  className="form-control resize"
                  placeholder="write your Comments"
                  autoComplete="off"
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <button className="btn btn-lg btn-warning" type="submit">
                  {language ? "Submit" : "Enviar"}
                </button>
              </div>
            </form>
          </Col>
        </Row>
        <Row className="w-100 pt-3">
          <Col>
            <section className="container text-center">
        
              <nav className="d-flex justify-content-evenly py-2 footer-link">
                <a>
                  <SgvFacebook />
                </a>
                <a>
                  <SgvInstagram />
                </a>
                <a>
                  <SgvTwitter />
                </a>
                <a>
                  <SgvYoutube />
                </a>
              </nav>
              <small className="text-white d-inline-block mb-3">
                &copy;
                {language
                  ? "2023 TaxiVaradero your best option"
                  : "TaxiVaradero 2023 tu mejor opción"}
              </small>
            </section>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
