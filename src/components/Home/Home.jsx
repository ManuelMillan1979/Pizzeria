import { useState } from 'react';
import img_chef from '../../assets/img_chef.png';
import pizza_1 from '../../assets/pizza.png';
import pizza_2 from '../../assets/pizza_2.png';
import pizza_3 from '../../assets/pizza_3.png';
import pizza_4 from '../../assets/pizza_4.png';
import pizza_5 from '../../assets/pizza_5.png';
import remolo1 from '../../assets/Don_remolo_1.png';
import empanadas from '../../assets/empanadas.png';
import gaseosas from '../../assets/gaseosas.png';
import postres from '../../assets/postres.png';
const Home = () => {
    const [currentImage, setCurrentImage] = useState(remolo1);

    const images = [pizza_1, pizza_2, pizza_3, pizza_4, pizza_5, remolo1];

    const clickImg = () => {
        const nextImageIndex = (images.indexOf(currentImage) + 1) % images.length;
        setCurrentImage(images[nextImageIndex]);
    };


    return (
        <div className='home md:flex flex-col justify-center'>
            <div className='h-[376px] 2xl:h-[51vh] flex justify-center items-end mb-10'>
                <div className='fondo_chef xs:w-[277px] md:w-[310px] 2xl:w-[20vw] flex' onClick={clickImg}>
                    <img className=' ml-[-40px] 2xl:ml-[-93px] mt-[-50px]' src={img_chef} alt="" />
                    <img className='  xs:h-[15vh] ml-[-5rem] mt-[-1rem] sm:mt-[-9px] md:h-[147px] 2xl:h-[12rem] 2xl:ml-[-56px] 2xl:mt-[10px]' src={currentImage} alt="" />

                </div>

            </div>

            <div className='flex justify-center'>
                <h1 className='font-courgette text-[16px] md:text-[34px] 2xl:text-[38px]'>
                    Nuestros productos calidad 100% premium
                </h1>
            </div>

            <div className=' xs:h-[100vh] sm:h-[55vh] justify-center lg:h-[28vh] flex flex-wrap  mt-[7rem] 2xl:h-[27vh]  flex justify-center '>
                <div className='rectangle11 xs:w-[225px] h-[10rem] sm:mr-2  2xl:w-[13%] flex justify-center flex-col'>
                    <img className=' xs:w-[141px] mx-[42px] mb-[61px] mt-[-49px] sm:w-[105px] 2xl:w-[8vw] 2xl:ml-[48px]  ' src={remolo1} alt="" />
                    <p className='h-[77px] mt-[-67px] flex justify-center items-center font-courgette text-[15px] 2xl:text-[30px]'>Pizzas</p>
                </div>
                <div className='rectangle11 xs:w-[225px] h-[10rem] sm:mr-2 2xl:w-[13%] flex justify-center flex-col'>
                    <img className=' xs:w-[141px] mx-[42px] mb-[61px] mt-[-49px] sm:w-[105px] 2xl:w-[10vw] 2xl:ml-[29px] ' src={empanadas} alt="" />
                    <p className=' h-[77px] mt-[-67px] flex justify-center items-center font-courgette 2xl:text-[30px]'>Empanadas</p>
                </div>
                <div className='rectangle11 xs:w-[225px] h-[10rem] sm:mr-2 2xl:w-[13%] flex justify-center flex-col'>
                    <img className=' xs:w-[80px] mx-[70px] mb-[61px] mt-[-67px] sm:w-[49px] 2xl:w-[3.4vw] 2xl:ml-[84px] ' src={gaseosas} alt="" />
                    <p className='h-[77px] mt-[-67px] flex justify-center items-center font-courgette 2xl:text-[30px]'>Bebidas</p>
                </div>
                <div className='rectangle11 xs:w-[225px] h-[10rem] sm:mr-2 2xl:w-[13%] flex justify-center flex-col'>
                    <img className=' xs:w-[141px] mx-[42px] mb-[61px] mt-[-49px] sm:w-[105px] 2xl:w-[8vw] 2xl:ml-[48px] ' src={postres} alt="" />
                    <p className=' h-[77px] mt-[-67px] flex justify-center items-center font-courgette 2xl:text-[30px]'>Postres</p>
                </div>



            </div>

        </div>
    )
}

export default Home 