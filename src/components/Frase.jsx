import { Card } from "react-bootstrap";

const Frase = ({ datoPersonaje }) => {
  return (
    <section className="my-5">
      <h2>{datoPersonaje.character}</h2>
      <hr />
      <img
        className="mb-3"
        src={datoPersonaje.image}
        alt={datoPersonaje.character}
      />
      <Card>
        <Card.Body>
          <figure>
            <blockquote className="blockquote">
              <p>
                Shoplifting is a victimless crime, like punching someone in the
                dark.
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              {datoPersonaje.character} in
              <cite title="Source Title">The simpsons</cite>
            </figcaption>
          </figure>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Frase;
