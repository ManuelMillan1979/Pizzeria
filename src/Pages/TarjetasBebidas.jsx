

import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const TarjetasBebidas = ({ bebidas, seleccionarProducto }) => {
  return (
    <div className="home h-auto">
      <Link className='m-auto' to={'/'}>
        <div className="px-12 py-12">
          <IoIosArrowBack className='sm:text-4xl' />
        </div>
      </Link>
      <div id="container" className="w-4/5 mx-auto">
      <div className="flex flex-wrap justify-center">
  {bebidas[0].cervezas.map((cerveza) => (
    <div key={cerveza.id} className="sm:w-1/4 p-2 mt-32">
      <div className="h-full px-6 py-8 rounded-lg shadow-lg text-center flex flex-col">
        <div className="mb-3 flex-shrink-0">
          <img className=" h-[17rem] object-cover mx-auto rounded-full" src={cerveza.img} alt={cerveza.name} />
        </div>
        <h2 className="text-xl font-medium text-black font-courgette">{cerveza.name} <span className="text-red-500">${cerveza.price}</span></h2>
        <span className="text-black block mb-5">{cerveza.description.join(', ')}</span>
        <div className="flex justify-end w-full mt-auto">
          <Link to="/bebidas-varias">
            <button onClick={() => seleccionarProducto(cerveza)} className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full">+Info</button>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>


<div className="flex flex-wrap justify-center">
  {bebidas[0].gaseosas.map((gaseosa) => (
    <div key={gaseosa.id} className="sm:w-1/4 p-2 mt-32">
      <div className="h-full px-6 py-8 rounded-lg shadow-lg text-center flex flex-col">
        <div className="mb-3 flex-shrink-0">
          <img className=" h-[17rem] object-cover mx-auto " src={gaseosa.img} alt={gaseosa.name} />
        </div>
        <h2 className="text-xl font-medium text-black font-courgette">{gaseosa.name} <span className="text-red-500">${gaseosa.price}</span></h2>
        <span className="text-black block mb-5">{gaseosa.description.join(', ')}</span>
        <div className="flex justify-end w-full mt-auto">
          <Link to="/bebidas-varias">
            <button onClick={() => seleccionarProducto(gaseosa)} className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full">+Info</button>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

<div className="flex flex-wrap justify-center">
  {bebidas[0].aguas.map((agua) => (
    <div key={agua.id} className="sm:w-1/4 p-2 mt-32">
      <div className="h-full px-6 py-8 rounded-lg shadow-lg text-center flex flex-col">
        <div className="mb-3 flex-shrink-0">
          <img className=" h-[17rem] object-cover mx-auto rounded-full" src={agua.img} alt={agua.name} />
        </div>
        <h2 className="text-xl font-medium text-black font-courgette">{agua.name} <span className="text-red-500">${agua.price}</span></h2>
        <span className="text-black block mb-5">{agua.description.join(', ')}</span>
        <div className="flex justify-end w-full mt-auto">
          <Link to="/bebidas-varias">
            <button onClick={() => seleccionarProducto(agua)} className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full">+Info</button>
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

export default TarjetasBebidas;
