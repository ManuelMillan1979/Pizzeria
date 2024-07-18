
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

const TarjetaEmpanada = ({ empanadas, seleccionarProducto }) => (
  <>

    {empanadas.map((item) => (
      <div key={item.id} className="w-full sm:w-1/2  xl:w-1/3 p-2 mt-32">
        <div className=" px-6 py-8 rounded-lg shadow-lg text-center flex flex-col h-full">
          <div className="mb-3">
            <img className="w-auto mx-auto rounded-full -mt-28" src={item.img} alt={item.name} />
          </div>
          <h2 className="text-xl font-medium text-black font-courgette flex-grow">
            {item.name} <span className="text-red-500"> ${item.price} c/u</span>
          </h2>
          <span className="text-black block mb-5 flex-grow">{item.ingredients.join(', ')}</span>
          <div className="flex justify-end w-full mt-auto">
            <Link to={'/empanada'}>
              <button onClick={() => seleccionarProducto(item)} className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full">+Info</button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </>
);

const TarjetasEmpanadas = ({ empanadas, seleccionarProducto }) => (
  <div className="home">
    <Link className='m-auto' to={'/'}>
      <div className="w-12 px-12 py-12">
        <IoIosArrowBack className='sm:text-4xl' />
      </div>
    </Link>
    <div id="container" className="flex justify-center ">
      <div className="w-[80%] flex flex-wrap ">
        <TarjetaEmpanada empanadas={empanadas} seleccionarProducto={seleccionarProducto} />
      </div>

    </div>
  </div>
);

export default TarjetasEmpanadas;
