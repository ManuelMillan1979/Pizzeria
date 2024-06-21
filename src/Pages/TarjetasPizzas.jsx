import pizza_1 from "../assets/Pizzas/Muzzarela (2).png";
import pizza_2 from "../assets/Pizzas/Napolitana.png";
import pizza_3 from "../assets/Pizzas/Napo especial.png";
import pizza_4 from "../assets/Pizzas/Napo power.png";
import pizza_5 from "../assets/Pizzas/Caprese.png";
import pizza_6 from "../assets/Pizzas/4 quesos.png";
import pizza_7 from "../assets/Pizzas/Calabresa.png";
import pizza_8 from "../assets/Pizzas/Napo especial.png";
import pizza_9 from "../assets/Pizzas/100_ Panceta.png";
import pizza_10 from "../assets/Pizzas/Pepperoni.png";
import pizza_11 from "../assets/Pizzas/Veggie.png";
import pizza_12 from "../assets/Pizzas/Veggi power.png";
import pizza_13 from "../assets/Pizzas/Pollo especial.png";
import pizza_14 from "../assets/Pizzas/Super especial.png";


const TarjetasPizzas = () => {
  return (
    <>
      <div className="bg-amber-400">
        <div id="container" className="w-4/5 mx-auto">
          <div className="flex flex-col sm:flex-row">
            {/*Inicio Tarjeta 1 */}
            <div className="sm:w-1/4 p-2 mt-32">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-20"
                    src={pizza_1}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">Muzzarella <span className="text-red-500">$11300</span></h2>
                <span className="text-black block mb-5">
                  Salsa de tomate, queso muzzarella y orégano.
                </span>
                <div className="flex justify-end w-full">
                  <button
                    href="#"
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                </div>
              </div>
            </div>
            {/*Inicio Tarjeta 2 */}
            <div className="sm:w-1/4 p-2 mt-32">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-20"
                    src={pizza_2}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">Napolitana<span className="text-red-500"> $12500</span></h2>
                <span className="text-black block mb-5">
                  Salsa de tomate, muzzarella, ajo y perejil.
                </span>
                <div className="flex justify-end w-full">
                  <button
                    href="#"
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                </div>
              </div>
            </div>
            {/*Inicio Tarjeta 3 */}
            <div className="sm:w-1/4 p-2 mt-32">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-20"
                    src={pizza_3}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">Napo esp. <span className="text-red-500"> $14900</span></h2>
                <span className="text-black block mb-5">
                  Queso muzzarella, tomate, ajo y cebolla.
                </span>
                <div className="flex justify-end w-full">
                  <button
                    href="#"
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                </div>
              </div>
            </div>
            {/*Inicio Tarjeta 4 */}
            <div className="sm:w-1/4 p-2 mt-32">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-20"
                    src={pizza_4}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">Napo power <span className="text-red-500"> $14800</span></h2>
                <span className="text-black block mb-5">
                  Muzzarella, tomate, aceitunas y champignon.
                </span>
                <div className="flex justify-end w-full">
                  <button
                    href="#"
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                </div>
              </div>
            </div>
            {/*Fin trajeta 4 */}
            {/*Inicio Tarjeta 5 */}
            <div className="sm:w-1/4 p-2 mt-32">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-20"
                    src={pizza_5}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">Capresse <span className="text-red-500"> $11900</span></h2>
                <span className="text-black block mb-5">
                  cherry, muzzarella, oliva negra y albahaca.
                </span>
                <div className="flex justify-end w-full">
                  <button
                    href="#"
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                </div>
              </div>
            </div>
            {/*Fin trajeta 4 */}
          </div>
          <div className="flex flex-col sm:flex-row mt-20">
            {/*Inicio Tarjeta 6 */}
            <div className="sm:w-1/4 p-2">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-20"
                    src={pizza_6}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">4 quesos <span className="text-red-500"> $13700</span></h2>
                <span className="text-black block mb-5">
                  Muzzarella, provolone, gruyere y roquefort.
                </span>
                <div className="flex justify-end w-full">
                  <button
                    href="#"
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                </div>
              </div>
            </div>
            {/*Inicio Tarjeta 7*/}
            <div className="sm:w-1/4 p-2">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-20"
                    src={pizza_7}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">Calabresa <span className="text-red-500"> $14200</span></h2>
                <span className="text-black block mb-5">
                Tomate, longaniza, pimientos y cebolla.
                </span>
                <div className="flex justify-end w-full">
                  <button
                    href="#"
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                </div>
              </div>
            </div>
            {/*Inicio Tarjeta 8 */}
            <div className="sm:w-1/4 p-2">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-20"
                    src={pizza_8}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">Don Rémolo <span className="text-red-500"> $13700</span></h2>
                <span className="text-black block mb-5">
                  Muzzarella, longaniza, panceta, pollo, oregano.
                </span>
                <div className="flex justify-end w-full">
                  <button
                    href="#"
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                </div>
              </div>
            </div>
            {/*Inicio Tarjeta 9 */}
            <div className="sm:w-1/4 p-2">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-20"
                    src={pizza_9}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">All panceta <span className="text-red-500"> $14200</span></h2>
                <span className="text-black block mb-5">
                  Ajíes, muzarella, panceta y champignon.
                </span>
                <div className="flex justify-end w-full">
                  <button
                    href="#"
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                </div>
              </div>
            </div>
            {/*Fin trajeta 4 */}
            {/*Inicio Tarjeta 10 */}
            <div className="sm:w-1/4 p-2">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-20"
                    src={pizza_10}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">Pepperoni <span className="text-red-500"> $13700</span></h2>
                <span className="text-black block mb-5">
                  salsa de tomate, queso muzzarella y pepperoni.
                </span>
                <div className="flex justify-end w-full">
                  <button
                    href="#"
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                </div>
              </div>
            </div>
            {/*Fin trajeta 4 */}
          </div>
          <div className="flex flex-col sm:flex-row mt-20">
            {/*Inicio Tarjeta 11 */}
            <div className="sm:w-1/4 p-2">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-20"
                    src={pizza_11}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">Veggie <span className="text-red-500"> $11500</span></h2>
                <span className="text-black block mb-5">
                  Queso muzzarella, espinaca, pimientos y olivas negras.
                </span>
                <div className="flex justify-end w-full">
                  <button
                    href="#"
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                </div>
              </div>
            </div>
            {/*Inicio Tarjeta 12 */}
            <div className="sm:w-1/4 p-2">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-20"
                    src={pizza_12}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">Veggie power <span className="text-red-500"> $12800</span></h2>
                <span className="text-black block mb-5">
                  Muzzarella, espinaca, pimientos y olivas negras.
                </span>
                <div className="flex justify-end w-full">
                  <button
                    href="#"
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                </div>
              </div>
            </div>
            {/*Inicio Tarjeta 13 */}
            <div className="sm:w-1/4 p-2">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-20"
                    src={pizza_13}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">Pollo espaecial <span className="text-red-500"> $13700</span></h2>
                <span className="text-black block mb-5">
                  Muzzarella, trozos de pollo, tomate cherry y champignon.
                </span>
                <div className="flex justify-end w-full">
                  <button
                    href="#"
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                </div>
              </div>
            </div>
            {/*Inicio Tarjeta 14 */}
            <div className="sm:w-1/4 p-2">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-20"
                    src={pizza_14}
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">4 quesos <span className="text-red-500"> $15300</span></h2>
                <span className="text-black block mb-5">
                  Mix de gustos: Pepperoni, napolitana panceta y 4 quesos.
                </span>
                <div className="flex justify-end w-full">
                  <button
                    href="#"
                    className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full"
                  >
                    +Info
                  </button>
                </div>
              </div>
            </div>
            {/*Fin trajeta 4 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TarjetasPizzas;
