import { FaCartShopping, FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";


const BebidasVarias = ({ productoSeleccionado, agregarAlCarrito }) => {
  return (


      <div key={productoSeleccionado.id} className="home flex flex-col justify-center h-screen ">
        <Link className='' to={'/TarjetasBebidas'}>
          <div className="w-12 px-12 py-12">
            <IoIosArrowBack className='sm:text-4xl' />
          </div>
        </Link>
        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-10 max-w-xs md:max-w-3xl mx-auto bg-amber-300">
          <div className="w-full md:w-1/3 bg-amber300 grid place-items-center">
            <img src={productoSeleccionado.img} alt={productoSeleccionado.name} className="h-[12rem] object-cover mx-auto  transform scale-150 " />
          </div>
          <div className="rectangule11 w-full md:w-2/3  flex flex-col justify-between space-y-2 p-3 gap-6">
            <div className="flex flex-row justify-between items-center">
              <p className="text-black text-3xl font-courgette hidden md:block">
                {productoSeleccionado.name}
              </p>
              <div className="flex items-center space-x-6">
                <button><FaCirclePlus className="h-10 w-8 text-black" /></button>
                <p className="text-3xl text-black">1</p>
                <button><FaCircleMinus className="h-10 w-8 text-black" /></button>
              </div>
              <div className="hidden md:flex items-center px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                <FaCartShopping className="text-red-500 text-5xl" />
              </div>
            </div>
            <h3 className="font-arial text-black md:text-2xl text-xl">
              {productoSeleccionado.description.join(', ')}
            </h3>
            <div className="flex flex-row gap-4">
             
            <div className="flex flex-row justify-between items-center">
              <p className="text-3xl font-courgette text-black">
                Precio total:
                <span className="text-3xl font-normal text-red-500"> $790</span>
              </p>
              <Link to={'/tu_pedido'} >
                <button onClick={() => agregarAlCarrito(productoSeleccionado)} className="bg-red-500  px-10 py-2 rounded-lg text-white text-xl font-arial">
                  Agregar
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>

      </div>
  );
};

export default BebidasVarias;