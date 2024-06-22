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
        <div className='home  md:h-[140vh] md:flex flex-col justify-evenly lg:h-auto'>
            <div className='h-[376px]  flex justify-center items-end mb-10 2xl:h-lg 2xl:mt-36'>
                <div className='fondo_chef w-80 md:w-[310px] 2xl:w-96 flex' onClick={clickImg}>
                    <img className=' ml-[-40px] 2xl:ml-[-93px] mt-[-50px]' src={img_chef} alt="" />
                    <img className='  h-40 ml-[-6rem]  xs:mt-[10px]  sm:mt-[8px] md:h-[147px] 2xl:h-[12rem] 2xl:ml-[-56px] 2xl:mt-[10px]' src={currentImage} alt="" />

                </div>

            </div>

            <div className='flex justify-center'>
                <h1 className='font-courgette text-[16px] md:text-[34px] 2xl:text-[38px]'>
                    Nuestros productos calidad 100% premium
                </h1>
            </div>

            <div className='flex flex-col items-center mt-20 sm:flex-row justify-center md:pt-14 xl:mb-16'>
                <div className='rectangle11 w-64 mb-16 md:w-42  '>
                    <img className=' mx-auto  w-[14rem] mt-[-51px] md:w-32 ' src={remolo1} alt="" />
                    <p className=' font-courgette text-center my-6 text-lg mx-auto '>Pizzas</p>
                </div>
                <div className=' rectangle11 w-64 mb-16 md:w-42'>
                    <img className='mx-auto w-[15rem] mt-[-48px] md:w-36' src={empanadas} alt="" />
                    <p className='font-courgette text-center my-6 text-lg mx-auto'>Empanadas</p>
                </div>
                <div className='rectangle11 w-64 mb-16  md:w-42'>
                    <img className='mx-auto xs:w-[5rem] mt-[-88px]  md:w-16 ' src={gaseosas} alt="" />
                    <p className='font-courgette text-center my-6 text-lg mx-auto'>Bebidas</p>
                </div>
                <div className='rectangle11 w-64 mb-16 md:w-42'>
                    <img className='mx-auto w-48 mt-[-70px] md:w-36 ' src={postres} alt="" />
                    <p className='font-courgette text-center my-6 text-lg mx-auto'>Postres</p>
                </div>



            </div>

        </div>
    )
}

export default Home 