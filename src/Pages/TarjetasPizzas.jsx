
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const TarjetasPizzas = ({ Pizza, seleccionarProducto }) => {
  return (
    <div className="home h-full">
      <Link className='m-auto' to={'/'}>
        <div className="px-12 py-12">
          <IoIosArrowBack className='sm:text-4xl' />
        </div>
      </Link>
      <div id="container" className="w-4/5 mx-auto">
        <div className="flex flex-wrap justify-center">
          {Pizza.map((pizza) => (
            <div key={pizza.id} className="w-full sm:w-1/2  xl:w-1/4 p-2 mt-32">
              <div className=" h-full px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img className="w-auto mx-auto rounded-full -mt-20" src={pizza.img} alt={pizza.name} />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">{pizza.name} <span className="text-red-500">${pizza.price}</span></h2>
                <span className="text-black block mb-5"> {pizza.ingredients.join(', ')}</span>
                <div className="flex justify-end w-full">
                  <Link to="/pizza">
                    <button onClick={() => seleccionarProducto(pizza)} className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full">+Info</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TarjetasPizzas;
