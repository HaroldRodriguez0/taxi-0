import { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { ModalMAp } from "./ModalMap";

export const Map = () => {

  const { language, refSitie } = useContext(LanguageContext);
  const [sitie, setSitie] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const sities = [
    "Viñales",
    "Las_Terrazas",
    "Soroa",
    "Habana",
    "Matanzas",
    "Cienaga_de_Zapata",
    "Varadero",
    "Cienfuegos",
    "Trinidad",
    "Santa_Clara",
  ];

  return (
    <section ref={refSitie} className="bg-mapa d-relative">
      <div className="container text-center">
        <h2 className="pb-4">{language ? "Sities" : "Sitios"}</h2>
        <div className="p-relative">
          <img className="d-md-none img-fluid" src="../icons/mapaCuba-sm.png" />
          <img
            className="d-none d-md-block img-fluid mx-auto max-w"
            src="../icons/mapaCuba-lg.png"
          />
          {
          sities.map((sities, i) => (
            <img
              onClick={() => {handleShow(); setSitie(i);}}
              key={i}
              title={sities}

              className={`mapCuba-size ${sities}`
            }
              src="../icons/geo-alt-fill.svg"
            />
          ))}
        </div>
      </div>
      <ModalMAp show={show} handleClose={handleClose} sitie={sitie} />
    </section>
  );
};
