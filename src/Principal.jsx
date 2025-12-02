import "./Estilos1.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Pag0(props) {
  return (
    <div className="fondo0">
      <h1>Descubre la verdadera magia de la Navidad</h1>
      <div className="cont0">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="/imagenes/contenido1.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              ¿Sabías que muchas de nuestras tradiciones tienen cientos de años?
              Sumérgete en el origen de esta fiesta y redescubre su significado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
function Pag1(props) {
  return <div className="fondo1"></div>;
}
function Pag2(props) {
  return (
    <div className="fondo2">
      <h1>Esta es la pagina 2</h1>
    </div>
  );
}

function Principal(props) {
  return (
    <div className="padre">
      <div className="baner">La Navidad</div>
      <div className="menu">
        <ul>
          <span>
            <Link to="/">Inicio</Link>
          </span>
          <span>
            <Link to="/pag1">Navidad En Bolivia</Link>
          </span>
          <span>
            <Link to="/pag2">Navidad En El Mundo</Link>
          </span>
        </ul>
      </div>

      <div className="contenido">
        <Routes>
          <Route path="/" element={<Pag0></Pag0>}></Route>
          <Route path="/pag1" element={<Pag1></Pag1>}></Route>
          <Route path="/pag2" element={<Pag2></Pag2>}></Route>
        </Routes>
      </div>
      <footer>
        <div>pie de pagina</div>
      </footer>
    </div>
  );
}
export default Principal;
