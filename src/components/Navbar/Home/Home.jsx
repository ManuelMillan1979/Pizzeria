import { useState } from 'react';
import img_chef from '../../../assets/img_chef.png';
import pizza_1 from '../../../assets/pizza_1.png';
import pizza_2 from '../../../assets/pizza_2.png';
import pizza_3 from '../../../assets/pizza_3.png';
import pizza_4 from '../../../assets/pizza_4.png';
import pizza_5 from '../../../assets/pizza_5.png';
import remolo1 from '../../../assets/Don_remolo_1.png';
import empanadas from '../../../assets/empanadas.png';
import gaseosas from '../../../assets/gaseosas.png';
import postres from '../../../assets/postres.png';
const Home = () => {
    const [currentImage, setCurrentImage] = useState(remolo1);

    const images = [pizza_1, pizza_2, pizza_3, pizza_4, pizza_5, remolo1];

    const clickImg = () => {
        const nextImageIndex = (images.indexOf(currentImage) + 1) % images.length;
        setCurrentImage(images[nextImageIndex]);
    };


    return (
        <div className='home xs:h-[167vh] 2xl:h-[100vh] '>
            <div className='h-[303px] 2xl:h-[51vh] flex justify-center items-end mb-10'>
                <div className='fondo_chef w-[224px] 2xl:w-[20vw] flex' onClick={clickImg}>
                    <img className='relative ml-[-40px] 2xl:ml-[-93px] mt-[-50px]' src={img_chef} alt="" />
                    <img className=' absolute xs:h-[13vh] ml-[8rem] mt-[-1rem] 2xl:ml-[15rem] mt-[2rem]' src={currentImage} alt="" />

                </div>

            </div>

            <div className='flex justify-center'>
                <h1 className='font-courgette text-[16px] 2xl:text-[38px]'>
                    Nuestros productos calidad 100% premium
                </h1>
            </div>

            <div className=' xs:h-[100vh] flex flex-wrap  mt-[7rem] 2xl:h-[26vh] flex justify-center '>
                <div className='rectangle11 xs:w-[57%] h-[10rem] 2xl:w-[13%] flex justify-center flex-col'>
                    <img className='relative xs:w-[38vw] ml-[43px] mb-[61px] mt-[-49px] 2xl:w-[8vw] ml-[48px] mb-[61px] mt-[-67px]' src={remolo1} alt="" />
                    <p className='relative h-[77px] mt-[-67px] flex justify-center items-center font-courgette text-[15px] 2xl:text-[30px]'>Pizzas</p>
                </div>
                <div className='rectangle11 xs:w-[57%] h-[10rem] 2xl:w-[13%] flex justify-center flex-col'>
                    <img className='relative xs:w-[38vw] ml-[43px] mb-[61px] mt-[-49px] 2xl:w-[10vw] ml-[29px] mb-[61px] mt-[-67px]' src={empanadas} alt="" />
                    <p className='relative h-[77px] mt-[-67px] flex justify-center items-center font-courgette 2xl:text-[30px]'>Empanadas</p>
                </div>
                <div className='rectangle11 xs:w-[57%] h-[10rem] 2xl:w-[13%] flex justify-center flex-col'>
                    <img className='relative xs:w-[15vw] ml-[88px] mb-[61px] mt-[-67px] 2xl:w-[3.4vw] ' src={gaseosas} alt="" />
                    <p className='relative h-[77px] mt-[-67px] flex justify-center items-center font-courgette 2xl:text-[30px]'>Bebidas</p>
                </div>
                <div className='rectangle11 xs:w-[57%] h-[10rem] 2xl:w-[13%] flex justify-center flex-col'>
                    <img className='relative xs:w-[38vw] ml-[43px] mb-[61px] mt-[-49px] 2xl:w-[8vw] ml-[48px] mb-[61px] mt-[-67px]' src={postres} alt="" />
                    <p className='relative h-[77px] mt-[-67px] flex justify-center items-center font-courgette 2xl:text-[30px]'>Postres</p>
                </div>



            </div>

        </div>
    )
}

export default Home 