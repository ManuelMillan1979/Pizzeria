import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import img_chef from "../../assets/img_chef.png";
import remolo1 from "../../assets/Don_remolo_1.png";
import empanadas from "../../assets/empanadas.png";
import gaseosas from "../../assets/gaseosas.png";
import postres from "../../assets/postres.png";
import dato from '../../components/Apis/Apis.jsx'



    const { pizzas } = dato;
    const Home = () => {
        const [currentImage, setCurrentImage] = useState(pizzas[0].img);
        const [currentIndex, setCurrentIndex] = useState(0);


        const images = pizzas.map(element => element.img);
        console.log(images);

        const clickImg = () => {
            const nextImageIndex = (currentIndex + 1) % images.length;
            setCurrentImage(images[nextImageIndex]);
            setCurrentIndex(nextImageIndex);
        };

        useEffect(() => {
            console.log(currentIndex);
        }, [currentIndex]);
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
                        <Link to="/TarjetasPizzas">
                            <img className=' mx-auto  w-[14rem] mt-[-51px] md:w-32 ' src={remolo1} alt="" />
                            <p className=' font-courgette text-center my-6 text-lg mx-auto '>Pizzas</p>
                        </Link>
                    </div>
                    <div className=' rectangle11 w-64 mb-16 md:w-42'>
                        <Link to="/TarjetasEmpanadas">
                            <img className='mx-auto w-[15rem] mt-[-48px] md:w-36' src={empanadas} alt="" />
                            <p className='font-courgette text-center my-6 text-lg mx-auto'>Empanadas</p>
                        </Link>
                    </div>
                    <div className='rectangle11 w-64 mb-16  md:w-42'>
                        <Link to="/TarjetasBebidas">
                            <img className='mx-auto xs:w-[5rem] mt-[-88px]  md:w-16 ' src={gaseosas} alt="" />
                            <p className='font-courgette text-center my-6 text-lg mx-auto'>Bebidas</p>
                        </Link>
                    </div>
                    <div className='rectangle11 w-64 mb-16 md:w-42'>
                        <img className='mx-auto w-48 mt-[-70px] md:w-36 ' src={postres} alt="" />
                        <p className='font-courgette text-center my-6 text-lg mx-auto'>Postres</p>
                    </div>



                </div>


            </div>
        );
    }

    export default Home;

