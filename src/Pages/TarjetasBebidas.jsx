import bebida1 from "../assets/Bebidas/Aguas/Agua sin gas.png"
import bebida2 from "../assets/Bebidas/Cervezas/Heineken.png"
import bebida3 from "../assets/Bebidas/Gaseosas/Coca común.png"

const TarjetasBebidas = () => {
  return (
    <>
      <div className="bg-amber-400">
        <div id="container" className="w-11/12 mx-auto">
          <div className="flex flex-col justify-around sm:flex-row">
            {/*Inicio Tarjeta 1 */}
            <div className="sm:w-1/4 p-2 mt-32">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-28"
                    src={bebida1}
                    alt=""
                  />
                </div>
                <h2 className="text-3xl font-medium text-black font-courgette">Aguas / aguas saborizadas</h2>
              </div>
            </div>
            {/*Inicio Tarjeta 2 */}
            <div className="sm:w-1/4 p-2 mt-32">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full -mt-32"
                    src={bebida2}
                    alt=""
                  />
                </div>
                <h2 className="text-3xl font-medium text-black font-courgette mt-7">Cervezas</h2>
              </div>
            </div>
            {/*Inicio Tarjeta 3 */}
            <div className="sm:w-1/4 p-2 mt-32">
              <div className="bg-amber-300 px-6 py-8 rounded-lg shadow-lg text-center">
                <div className="mb-3">
                  <img
                    className="w-auto mx-auto rounded-full h-[350px] -mt-28"
                    src={bebida3}
                    alt=""
                  />
                </div>
                <h2 className="text-3xl font-medium text-black font-courgette mt-2">Gaseosas</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default TarjetasBebidas