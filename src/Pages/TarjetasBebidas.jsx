
import bebida1 from "../assets/Bebidas/Aguas/Agua sin gas.png";
import bebida2 from "../assets/Bebidas/Cervezas/Heineken.png";
import bebida3 from "../assets/Bebidas/Gaseosas/Coca común.png";

const bebidasData = [
  { img: bebida1, title: "Aguas / aguas saborizadas" },
  { img: bebida2, title: "Cervezas" },
  { img: bebida3, title: "Gaseosas" },
];

const TarjetaBebida = ({ img, title }) => (
  <div className="sm:w-1/4 p-2 mt-32 flex flex-col">
    <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center flex flex-col h-full">
      <div className="mb-3">
        <img className="w-auto mx-auto rounded-full -mt-28" src={img} alt={title} />
      </div>
      <h2 className="text-3xl font-medium text-black font-courgette flex-grow">{title}</h2>
    </div>
  </div>
);

const TarjetasBebidas = () => (
  <div className="bg-amber-400 h-[700px]">
    <div id="container" className="w-11/12 mx-auto">
      <div className="flex flex-col justify-around sm:flex-row">
        {bebidasData.map((bebida, index) => (
          <TarjetaBebida key={index} {...bebida} />
        ))}
      </div>
    </div>
  </div>
);

export default TarjetasBebidas;
