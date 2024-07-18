
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const TarjetasPostres = ({ postres, seleccionarProducto }) => {
  return (
    <div className="home h-full">
      <Link className='m-auto' to={'/'}>
        <div className="px-12 py-12">
          <IoIosArrowBack className='sm:text-4xl' />
        </div>
      </Link>
      <div id="container" className="w-4/5 mx-auto">
        <div className="flex flex-wrap justify-center">
          {postres.map((item) => (
            <div key={item.id} className="sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2 mt-10">
              <div className=" flex flex-col justify-around h-full px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img className="w-auto mx-auto rounded-full -mt-20" src={item.img} alt={item.name} />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">{item.name} <span className="text-red-500">${item.price}</span></h2>
                <span className="text-black block mb-5"> {item.ingredients.join(', ')}</span>
                <div className="flex justify-end w-full">
                  <Link to="/pizza">
                    <button onClick={() => seleccionarProducto(item)} className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full">+Info</button>
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

export default TarjetasPostres;
