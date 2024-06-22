import { useState } from "react";
import { Link } from "react-router-dom";
import img_chef from "../../assets/img_chef.png";
import pizza_1 from "../../assets/pizza.png";
import pizza_2 from "../../assets/pizza_2.png";
import pizza_3 from "../../assets/pizza_3.png";
import pizza_4 from "../../assets/pizza_4.png";
import pizza_5 from "../../assets/pizza_5.png";
import remolo1 from "../../assets/Don_remolo_1.png";
import empanadas from "../../assets/empanadas.png";
import gaseosas from "../../assets/gaseosas.png";
import postres from "../../assets/postres.png";
const Home = () => {
  const [currentImage, setCurrentImage] = useState(remolo1);

  const images = [pizza_1, pizza_2, pizza_3, pizza_4, pizza_5, remolo1];

  const clickImg = () => {
    const nextImageIndex = (images.indexOf(currentImage) + 1) % images.length;
    setCurrentImage(images[nextImageIndex]);
  };

  return (
    <div className="home xs:h-[167vh] 2xl:h-full ">
      <div className="h-[303px] 2xl:h-[51vh] flex justify-center items-end mb-10">
        <div
          className="fondo_chef w-[224px] 2xl:w-[20vw] flex"
          onClick={clickImg}
        >
          <img
            className="relative ml-[-40px] 2xl:ml-[-93px] mt-[-50px]"
            src={img_chef}
            alt=""
          />
          <img
            className=" absolute xs:h-[13vh] ml-[8rem] mt-[-1rem] sm:w-[108px] mt-[-9px] md:ml-[128px] mt-[-12px] lg:ml-[141px] xl:ml-[141px] 2xl:ml-[245px] 2xl:w-[10vw] 2xl:mt-[21px]"
            src={currentImage}
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-center">
        <h1 className="font-courgette text-[16px] 2xl:text-[38px]">
          Nuestros productos calidad 100% premium
        </h1>
      </div>

      <div className=" xs:h-[100vh] flex flex-wrap  mt-[7rem] sm:justify-center  2xl:h-[26vh] flex justify-center ">
        <div className="rectangle11 xs:w-[57%] h-[10rem] sm:mr-2 2xl:w-[13%] flex justify-center flex-col">
        <Link to="/TarjetasPizzas">
          <img
            className="relative xs:w-[38vw] ml-[43px] mb-[61px] mt-[-49px] sm:w-[105px] ml-[31px] mr-[31px] 2xl:w-[8vw] ml-[48px] mb-[61px] mt-[-67px]"
            src={remolo1}
            alt=""
          />
          <p className="relative h-[77px] mt-[-67px] flex justify-center items-center font-courgette text-[15px] 2xl:text-[30px]">
            Pizzas
          </p>
          </Link>
        </div>
        <div className="rectangle11 xs:w-[57%] h-[10rem] sm:mr-2 2xl:w-[13%] flex justify-center flex-col">
        <Link to="/TarjetasEmpanadas">
          <img
            className="relative xs:w-[38vw] ml-[43px] mb-[61px] mt-[-49px] sm:w-[105px] ml-[31px] mr-[31px]  2xl:w-[10vw] ml-[29px] mb-[61px] mt-[-67px]"
            src={empanadas}
            alt=""
          />
          <p className="relative h-[77px] mt-[-67px] flex justify-center items-center font-courgette 2xl:text-[30px]">
            Empanadas
          </p>
          </Link>
        </div>
        <div className="rectangle11 xs:w-[57%] h-[10rem] sm:mr-2 2xl:w-[13%] flex justify-center flex-col">
        <Link to="/TarjetasBebidas">
          <img
            className="relative xs:w-[15vw] ml-[88px] mb-[61px] mt-[-67px] sm:w-[49px] ml-[51px] mr-[51px] 2xl:w-[3.4vw] "
            src={gaseosas}
            alt=""
          />
          <p className="relative h-[77px] mt-[-67px] flex justify-center items-center font-courgette 2xl:text-[30px]">
            Bebidas
          </p>
          </Link>
        </div>
        <div className="rectangle11 xs:w-[57%] h-[10rem] sm:mr-2 2xl:w-[13%] flex justify-center flex-col">
          <img
            className="relative xs:w-[38vw] ml-[43px] mb-[61px] mt-[-49px] sm:w-[105px] ml-[31px] mr-[31px] 2xl:w-[8vw] ml-[48px] mb-[61px] mt-[-67px]"
            src={postres}
            alt=""
          />
          <p className="relative h-[77px] mt-[-67px] flex justify-center items-center font-courgette 2xl:text-[30px]">
            Postres
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
