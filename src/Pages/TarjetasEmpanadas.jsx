import { Link } from 'react-router-dom';
import empanadas1 from "../assets/Empanadas/100_ Carne.png";
import empanadas2 from "../assets/Empanadas/Calabaza.png";
import empanadas3 from "../assets/Empanadas/Bondio agri.png";
import empanadas4 from "../assets/Empanadas/Full panceta.png";
import empanadas5 from "../assets/Empanadas/Pollo a la bbq.png";
import empanadas6 from "../assets/Empanadas/Pollo al wok.png";

const TarjetasEmpanadas = () => {
  return (
    <>
      <div className="bg-amber-400">
        <div id="container" className="w-11/12 mx-auto">
          <div className="flex flex-col justify-around sm:flex-row">
            {/*Inicio Tarjeta 1 */}
            <div className="sm:w-1/4 p-2 mt-32">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-28"
                    src={empanadas1}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">100% Carne<span className="text-red-500"> $850 c/u</span></h2>
                <span className="text-black block mb-5">
                  Carne cortada a cuchillo, cebolla, morrón y aceitunas verdes.
                </span>
                <div className="flex justify-end w-full">
                <Link to="/EmpanadaCarne100">
                  <button
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            {/*Inicio Tarjeta 2 */}
            <div className="sm:w-1/4 p-2 mt-32">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-28"
                    src={empanadas2}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette mt-20">Calabaza <span className="text-red-500"> $790 c/u</span></h2>
                <span className="text-black block mb-5">
                  Calabaza y queso muzzarella.
                </span>
                <div className="flex justify-end w-full">
                <Link to="/EmpanadaCalabaza">
                  <button
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            {/*Inicio Tarjeta 3 */}
            <div className="sm:w-1/4 p-2 mt-32">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-28"
                    src={empanadas3}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette mt-9">Pork agri <span className="text-red-500"> $880 c/u</span></h2>
                <span className="text-black block mb-5">
                  Solomillo de cerdo, panceta y ciruela.
                </span>
                <div className="flex justify-end w-full">
                <Link to="/EmpanadaPorkAgri">
                  <button
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-around sm:flex-row mt-28">
            {/*Inicio Tarjeta 4 */}
            <div className="sm:w-1/4 p-2">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-28"
                    src={empanadas4}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">Full panceta <span className="text-red-500"> $830 c/u</span></h2>
                <span className="text-black block mb-5">
                  Panceta, chorizo colorado, queso gratinado y huevo.
                </span>
                <div className="flex justify-end w-full">
                <Link to="/EmpanadaFullPanceta">
                  <button
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            {/*Inicio Tarjeta 5 */}
            <div className="sm:w-1/4 p-2">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-28"
                    src={empanadas5}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette mt-9">Pollo BBQ <span className="text-red-500"> $810 c/u</span></h2>
                <span className="text-black block mb-5">
                  Pechuga de pollo, barbacoa y cebolla.
                </span>
                <div className="flex justify-end w-full">
                <Link to="/EmpanadaPolloBBQ">
                  <button
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                  </Link>
                </div>
              </div>
            </div>
            {/*Inicio Tarjeta 3 */}
            <div className="sm:w-1/4 p-2">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-28"
                    src={empanadas6}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">Pollo al wok <span className="text-red-500"> $840 c/u</span></h2>
                <span className="text-black block mb-5">
                  Pollo crujiente, arroz condimentado y pimientos.
                </span>
                <div className="flex justify-end w-full">
                <Link to="/EmpanadaPolloAlWok">
                  <button
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TarjetasEmpanadas;


