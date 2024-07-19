import { IoIosArrowBack } from "react-icons/io";
import remolo1 from "../../assets/Don_remolo_1.png";
import empanadas from "../../assets/empanadas.png";
import gaseosas from "../../assets/gaseosas.png";
import postres from "../../assets/postres.png";
import { Link } from "react-router-dom";

const NavbarInterno = () => {
    return(
        <div className="flex">
        <Link className='lg:m-auto' to={'/'}>
          <div className="px-6 pt-12">
            <IoIosArrowBack className='text-4xl sm:text-4xl' />
          </div>
        </Link>
        <div className=" bg-[#FAD469] shadow-lg hidden lg:block lg:flex w-[90%] h-24 mr-5 sm:mr-20 rounded-b-2xl flex justify-evenly items-center  font-courgette text-4xl sm:text-5xl">
          <div className=' '>
            <Link to="/TarjetasPizzas" className="flex">
              <p className=' font-courgette text-center my-auto text-xl mr-3 '>Pizzas</p>
              <div className="w-24 h-24">
                <img className=' mx-auto w-full h-full  transition-transform duration-300 transform hover:scale-125 ' src={remolo1} alt="pizzas" />
              </div>
            </Link>
          </div>
          <div className=' '>
            <Link to="/TarjetasEmpanadas" className="flex">
              <p className=' font-courgette text-center my-auto text-xl mr-3 '>Empanadas</p>
              <div className="w-24 h-24">
                <img className=' mx-auto w-ful h-full  transition-transform duration-300 transform hover:scale-125 ' src={empanadas} alt="empanadas" />
              </div>
            </Link>
          </div>
          <div className=''>
            <Link to="/tarjetasBebidas" className="flex">
              <p className=' font-courgette text-center my-auto text-xl mr-3  '>Gaseosas</p>
              <div className="w-24 h-24">
                <img className=' mx-auto w-ful h-full  transition-transform duration-300 transform hover:scale-125 ' src={gaseosas} alt="gaseosas" />
              </div>
            </Link>
          </div>
          <div className=' '>
            <Link to="/tarjetas-Postres" className="flex">
              <p className=' font-courgette text-center my-auto text-xl mr-3  '>Postres</p>
              <div className="w-24 h-24">
                <img className=' mx-auto w-ful h-full  transition-transform duration-300 transform hover:scale-125 ' src={postres} alt="postres" />
              </div>
            </Link>
          </div>
          
        </div>
      </div>

    )
}

export default NavbarInterno 