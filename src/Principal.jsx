import "./Estilos1.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import jpg1 from "./assets/imagenes/1.webp";
import jpg2 from "./assets/imagenes/2.webp";
import jpg3 from "./assets/imagenes/3.webp";
import jpg4 from "./assets/imagenes/4.webp";
import jpg5 from "./assets/imagenes/5.webp";
import jpg6 from "./assets/imagenes/6.webp";

function Pag0(props) {
  return (
    <div className="fondo0">
      <h1>Danzas de Bolivia</h1>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={jpg1}
              className="d-block w-100 carousel-img-fix"
              alt="Danza 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={jpg2}
              className="d-block w-100 carousel-img-fix"
              alt="Danza 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={jpg3}
              className="d-block w-100 carousel-img-fix"
              alt="Danza 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src={jpg4}
              className="d-block w-100 carousel-img-fix"
              alt="Danza 4"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

function Pag1(props) {
  return (
    <div className="fondo1">
      <div className="card card-personalizada">
        <div className="contenedor-imagenes">
          <img src={jpg5} className="img-mitad" alt="Imagen 5" />
          <img src={jpg6} className="img-mitad" alt="Imagen 6" />
        </div>
        <div className="card-body">
          <h2>Danzas de Bolivia</h2>
          <p className="card-text">
            Estas son algunas de las danzas tradicionales de Bolivia que
            representan nuestra cultura.
          </p>
        </div>
      </div>
    </div>
  );
}

function Principal(props) {
  return (
    <div className="padre">
      <div className="titulo">Centro Cultural de Danzas Boliviana</div>

      <div className="menu">
        <ul>
          <span className="menuit">
            <Link to="/">Imagenes de las danzas </Link>
          </span>
          <span className="menuit">
            <Link to="/pag1">Mas danzas </Link>
          </span>
        </ul>
      </div>

      <div className="carrera">Informatica - Programacion Web 2 - INF-122</div>

      <div className="contenido">
        <Routes>
          <Route path="/" element={<Pag0 />} />
          <Route path="/pag1" element={<Pag1 />} />
        </Routes>
      </div>

      <div className="redes">
        <ul>
          <li className="redesit">
            <h3>
              <a
                href="https://www.facebook.com/henrydario.chipanaergueta"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </h3>
          </li>
          <li className="redesit">
            <h3>
              <a
                href="https://www.instagram.com/henrydario_chipana/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </h3>
          </li>
        </ul>
      </div>
      <footer className="pie">
        <div>@Henry Dario Chipana Ergueta - 2025</div>
      </footer>
    </div>
  );
}

export default Principal;
