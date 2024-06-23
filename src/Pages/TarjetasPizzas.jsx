
import { Link } from "react-router-dom";
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

const pizzas = [
  { src: pizza_1, name: "Muzzarella", price: 11300, desc: "Salsa de tomate, queso muzzarella y orégano.", link: "/PizzaMuzzarella" },
  { src: pizza_2, name: "Napolitana", price: 12500, desc: "Salsa de tomate, muzzarella, ajo y perejil.", link: "/PizzaNapolitana" },
  { src: pizza_3, name: "Napo esp.", price: 14900, desc: "Queso muzzarella, tomate, ajo y cebolla.", link: "/PizzaNapoEspecial" },
  { src: pizza_4, name: "Napo power", price: 14800, desc: "Muzzarella, tomate, aceitunas y champignon.", link: "/PizzaNapoPower" },
  { src: pizza_5, name: "Capresse", price: 11900, desc: "Cherry, muzzarella, oliva negra y albahaca.", link: "/PizzaCapresse" },
  { src: pizza_6, name: "4 quesos", price: 13700, desc: "Muzzarella, provolone, gruyere y roquefort.", link: "/Pizza4quesos" },
  { src: pizza_7, name: "Calabresa", price: 14200, desc: "Tomate, longaniza, pimientos y cebolla.", link: "/PizzaCalabresa" },
  { src: pizza_8, name: "Don Rémolo", price: 13700, desc: "Muzzarella, longaniza, panceta, pollo, oregano.", link: "/PizzaDonRemolo" },
  { src: pizza_9, name: "All panceta", price: 14200, desc: "Ajíes, muzarella, panceta y champignon.", link: "/PizzaAllPanceta" },
  { src: pizza_10, name: "Pepperoni", price: 13700, desc: "Salsa de tomate, queso muzzarella y pepperoni.", link: "/PizzaPepperoni" },
  { src: pizza_11, name: "Veggie", price: 11500, desc: "Queso muzzarella, espinaca, pimientos y olivas negras.", link: "/PizzaVeggie" },
  { src: pizza_12, name: "Veggie power", price: 12800, desc: "Muzzarella, espinaca, pimientos y olivas negras.", link: "/PizzaVeggiePower" },
  { src: pizza_13, name: "Pollo especial", price: 13700, desc: "Muzzarella, trozos de pollo, tomate cherry y champignon.", link: "/PizzaPolloEspecial" },
  { src: pizza_14, name: "Super espacial", price: 15300, desc: "Mix de gustos: Pepperoni, napolitana panceta y 4 quesos.", link: "/PizzaSuperEspecial" }
];

const TarjetasPizzas = () => {
  return (
    <div className="bg-amber-400 h-full">
      <div id="container" className="w-4/5 mx-auto">
        <div className="flex flex-wrap justify-center">
          {pizzas.map((pizza, index) => (
            <div key={index} className="sm:w-1/4 p-2 mt-32">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img className="w-auto mx-auto rounded-full -mt-20" src={pizza.src} alt={pizza.name} />
                </div>
                <h2 className="text-xl font-medium text-black font-courgette">{pizza.name} <span className="text-red-500">${pizza.price}</span></h2>
                <span className="text-black block mb-5">{pizza.desc}</span>
                <div className="flex justify-end w-full">
                  <Link to={pizza.link}>
                    <button className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-full">+Info</button>
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
