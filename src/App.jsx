
import { useRef, useState } from 'react';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { LanguageContext } from './components/LanguageContext';
import { Map } from './components/Map';
import { NavBar } from './components/NavBar';
import { OurCars } from './components/OurCars';
import { OurWork } from './components/OurWork';
import { Service } from './components/Service';
import { Whatsapp } from './components/Whatsapp';
import { Coments } from './components/Coments';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


export const App = () => {

  const refService = useRef();
  const refOurCar = useRef();
  const refSitie = useRef();
  const refContact = useRef();
  const [language, setLanguage] = useState(true)

  return (
    <LanguageContext.Provider value={{
      language, setLanguage, refService, refOurCar, refSitie, refContact
    }}>
  
        <Whatsapp />

        <NavBar />

        <Home />

        <Service />

        <OurWork />

        <OurCars />

        <Coments />

        <Map />

        <Contact />
  
      </LanguageContext.Provider>
      
    )
}
