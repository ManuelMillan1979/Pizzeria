import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-[#E74423] w-full flex justify-around ">

            <div className="w-[65%] flex items-center">
                <img className="w-40 ml-3 sm:w-60 md:w-[20rem] 2xl:w-[30rem]" src="/Logo.png" alt="" />
            </div>

            <div className=" flex justify-around items-center w-[160px] sm:w-[150px] md:w-[200px] lg:w-[300px]">
                <div>
                    <FaFacebookF className="text-white w-4 size-[40px] sm:size-[37px] 2xl:size-[50px] "  />
                </div>
                <div>
                    <FaTelegramPlane className="text-white w-6 size-[40px] sm:size-[37px] 2xl:size-[50px] "  />
                </div>
                <div>
                    <FaInstagram className="text-white w-6 size-[40px] sm:size-[37px] 2xl:size-[50px] " />
                </div>
                <Link to={'/tu_pedido'}>
                <FaCartShopping className="text-white w-6 size-[60px] sm:size-[37px] 2xl:size-[50px] " />
                </Link>
            </div>


        </div>
    )
}

export default Navbar
