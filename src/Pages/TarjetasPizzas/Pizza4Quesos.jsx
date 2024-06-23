import { FaCartShopping, FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import CuatroQuesos from "../../assets/Pizzas/4 quesos.png";
import quesoMuzzarella from "../../assets/Condimentos/Pizzas/Muzzarella.png";
import provolone from "../../assets/Condimentos/Pizzas/Provolone.png";
import gruyere from "../../assets/Condimentos/Pizzas/Gruyere.png";
import roquefort from "../../assets/Condimentos/Pizzas/Roquefort.png";

const Pizza4Quesos = () => {
  return (
    <>
    <div className="flex flex-col justify-center h-screen bg-amber-400">
        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-10 max-w-xs md:max-w-3xl mx-auto bg-amber-300">
          <div className="w-full md:w-1/3 bg-amber300 grid place-items-center">
            <img
              src={CuatroQuesos}
              alt="napo espacial"
              className="transform scale-150 -ml-60"
            />
          </div>
          <div className="w-full md:w-2/3 bg-amber-300 flex flex-col justify-between space-y-2 p-3 gap-6">
            <div className="flex flex-row justify-between items-center">
              <p className="text-black text-3xl font-courgette hidden md:block">
                4 quesos
              </p>
              <div className="flex items-center space-x-6">
                <button>
                  <FaCirclePlus className="h-10 w-8 text-black" />
                </button>
                <p className="text-3xl text-black">1</p>
                <button>
                  <FaCircleMinus className="h-10 w-8 text-black" />
                </button>
              </div>
              <div className="hidden md:flex items-center px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                <FaCartShopping className="text-red-500 text-5xl" />
              </div>
            </div>
            <h3 className="font-arial text-black md:text-2xl text-xl">
              Queso muzzarella, rodajas de tomate, aceitunas y champignon.
            </h3>
            <div className="flex flex-row gap-4">
              <div>
                <img src={quesoMuzzarella} className="w-44 h-28" />
              </div>
              <div>
                <img src={provolone} className="w-44 h-24" />
              </div>
              <div>
                <img src={gruyere} className="w-44 h-24" />
              </div>
              <div>
                <img src={roquefort} className="w-44 h-24" />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-2xl font-courgette text-black">
                Precio total:
                <span className="text-2xl font-normal text-red-500">
                  {" "}
                  $13700
                </span>
              </p>
              <button className="bg-red-500  px-8 py-2 rounded-lg text-white text-xl font-arial">
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Pizza4Quesos