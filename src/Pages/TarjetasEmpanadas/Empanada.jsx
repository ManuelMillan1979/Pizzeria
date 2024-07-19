import { FaCartShopping, FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavbarInterno from "../../components/NavbarInterno/NavbarInterno";

const Empanada = ({ productoSeleccionado, agregarAlCarrito }) => {
  return (
    <div className="home  ">
       <NavbarInterno/>
      <div key={productoSeleccionado.id} className=" h-[85vh] lg:flex flex-col justify-center ">
       
        <div className="bg-[#FAD469] relative mb-10 flex flex-col xl:max-w-full lg:flex-row md:items-center md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-10 w-xs md:w-3/4 mx-auto ">
          <div className="w-full md:w-1/3  grid place-items-center">
            <img
              src={productoSeleccionado.img}
              alt="napo espacial"
              className="lg:transform lg:scale-150  lg:-ml-60"
            />
          </div>
          <div className="w-full space-y-2 p-3 gap-6">
            <div className="flex justify-center sm:flex-row sm:justify-between items-center">
              <p className="text-black text-3xl font-courgette mr-3">
                {productoSeleccionado.name}
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
                <Link to={'/tu_pedido'}>
                  <FaCartShopping className="text-red-500 text-5xl" />
                </Link>
              </div>
            </div>
            <h3 className="font-arial text-black md:text-2xl text-xl">
              {productoSeleccionado.ingredients.join(', ')}
            </h3>
            <div className="flex flex-row gap-4">
              <div>
                <img src={productoSeleccionado.imgIngredients} className=" h-28" />
              </div>

            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-2xl font-courgette text-black">
                Precio total:
                <span className="text-2xl font-normal text-red-500">
                  {" "}
                  {productoSeleccionado.price}
                </span>
              </p>
              <Link to={'/tu_pedido'}>
                <button onClick={() => agregarAlCarrito(productoSeleccionado)} className="bg-red-500  px-8 py-2 rounded-lg text-white text-xl font-arial">
                  Agregar
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Empanada