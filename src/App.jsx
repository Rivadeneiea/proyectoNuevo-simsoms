import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
function App() {
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    consultarApi();
  }, []);
  const consultarApi = async () => {
    try {
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const dato = await respuesta.json();
      console.log(dato[0]);
      setPersonaje(dato[0]);
    } catch (error) {
      console.log(error);
      // dejar un msj intuitivo para el usuario
    }
  };
  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpson" className="w-50" />
        <Frase datoPersonaje={personaje}></Frase>
        <Button variant="warning" onClick={consultarApi}>
          Obtener frase
        </Button>
      </Container>
    </>
  );
}

export default App;
