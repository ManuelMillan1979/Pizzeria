import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="bg-[#E74423] w-full flex justify-around ">

            <div className="w-[45%]">
                <img className="w-40 sm:w-60 md:w-[20rem] 2xl:w-[30rem]" src="/Logo.png" alt="" />
            </div>

            <div className=" flex justify-around items-center w-[90px] sm:w-[150px] md:w-[200px] lg:w-[300px]">
                <div>
                    <FaFacebookF className="text-white w-4 size-[20px] sm:size-[37px] 2xl:size-[50px] "  />
                </div>
                <div>
                    <FaInstagram className="text-white w-6 size-[20px] sm:size-[37px] 2xl:size-[50px] " />
                </div>
            </div>


        </div>
    )
}

export default Navbar 