import { Link } from 'react-router-dom';
import empanadas1 from "../assets/Empanadas/100_ Carne.png";
import empanadas2 from "../assets/Empanadas/Calabaza.png";
import empanadas3 from "../assets/Empanadas/Bondio agri.png";
import empanadas4 from "../assets/Empanadas/Full panceta.png";
import empanadas5 from "../assets/Empanadas/Pollo a la bbq.png";
import empanadas6 from "../assets/Empanadas/Pollo al wok.png";

const empanadasData = [
  { img: empanadas1, title: "100% Carne", price: 850, description: "Carne cortada a cuchillo, cebolla, morrón y aceitunas verdes.", link: "/EmpanadaCarne100" },
  { img: empanadas2, title: "Calabaza", price: 790, description: "Calabaza y queso muzzarella.", link: "/EmpanadaCalabaza" },
  { img: empanadas3, title: "Pork agri", price: 880, description: "Solomillo de cerdo, panceta y ciruela.", link: "/EmpanadaPorkAgri" },
  { img: empanadas4, title: "Full panceta", price: 830, description: "Panceta, chorizo colorado, queso gratinado y huevo.", link: "/EmpanadaFullPanceta" },
  { img: empanadas5, title: "Pollo BBQ", price: 810, description: "Pechuga de pollo, barbacoa y cebolla.", link: "/EmpanadaPolloBBQ" },
  { img: empanadas6, title: "Pollo al wok", price: 840, description: "Pollo crujiente, arroz condimentado y pimientos.", link: "/EmpanadaPolloAlWok" },
];

const TarjetaEmpanada = ({ img, title, price, description, link }) => (
  <div className="sm:w-1/4 p-2 mt-32 flex flex-col">
    <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center flex flex-col h-full">
      <div className="mb-3">
        <img className="w-auto mx-auto rounded-full -mt-28" src={img} alt={title} />
      </div>
      <h2 className="text-xl font-medium text-black font-courgette flex-grow">{title} <span className="text-red-500"> ${price} c/u</span></h2>
      <span className="text-black block mb-5 flex-grow">{description}</span>
      <div className="flex justify-end w-full mt-auto">
        <Link to={link}>
          <button className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full">+Info</button>
        </Link>
      </div>
    </div>
  </div>
);

const TarjetasEmpanadas = () => (
  <div className="bg-amber-400">
    <div id="container" className="w-11/12 mx-auto">
      <div className="flex flex-col justify-around sm:flex-row">
        {empanadasData.slice(0, 3).map((empanada, index) => (
          <TarjetaEmpanada key={index} {...empanada} />
        ))}
      </div>
      <div className="flex flex-col justify-around sm:flex-row mt-28">
        {empanadasData.slice(3).map((empanada, index) => (
          <TarjetaEmpanada key={index} {...empanada} />
        ))}
      </div>
    </div>
  </div>
);

export default TarjetasEmpanadas;
