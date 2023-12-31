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
  const consultarApi = () => {
    try {
      const respuesta = fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    } catch (error) {
      console.log(error);
      // dejar un msj intuitivo para el usuario
    }
  };
  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpson" className="w-50" />
        <Frase></Frase>
        <Button variant="warning">Obtener frase</Button>
      </Container>
    </>
  );
}

export default App;
