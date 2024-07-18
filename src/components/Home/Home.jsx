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
            <div className='home  md:flex flex-col justify-evenly '>
                <div>
                    
                </div>
                <div className='h-[376px] md:h-[503px] lg:h-[376px]  flex justify-center items-end mb-10 2xl:h-lg 2xl:mt-36'>
                    <div className='fondo_chef w-80 md:w-[310px] 2xl:w-96 flex' onClick={clickImg}>
                        <img className=' ml-[-40px] 2xl:ml-[-93px] mt-[-50px]' src={img_chef} alt="" />
                        <img className='  h-40 ml-[-6rem]  xs:mt-[10px]  sm:mt-[8px] md:h-[147px] 2xl:h-[12rem] 2xl:ml-[-56px] 2xl:mt-[10px]' src={currentImage} alt="" />

                    </div>

                </div>

                <div className='flex justify-center'>
                    <h1 className='font-courgette text-[20px] md:text-[30px] 2xl:text-[40px]'>
                        Nuestros productos calidad 100% premium
                    </h1>
                </div>

                <div className='md:h-[48vh] flex flex-col items-center mt-20 sm:flex-row justify-center md:pt-14 xl:mb-16'>
                    <div className='rectangle11 w-64 xl:w-80 mb-16 md:w-42  '>
                        <Link to="/TarjetasPizzas">
                            <img className=' mx-auto  sm:w-[7rem] mt-[-51px] xl:w-48 ' src={remolo1} alt="" />
                            <p className=' font-courgette text-center my-6 text-lg mx-auto '>Pizzas</p>
                        </Link>
                    </div>
                    <div className=' rectangle11 w-64 xl:w-80 mb-16 md:w-42'>
                        <Link to="/TarjetasEmpanadas">
                            <img className='mx-auto sm:w-[130px] mt-[-48px] xl:w-56' src={empanadas} alt="" />
                            <p className='font-courgette text-center my-6 text-lg mx-auto'>Empanadas</p>
                        </Link>
                    </div>
                    <div className='rectangle11 w-64 xl:w-80 mb-16  md:w-42'>
                        <Link to="/TarjetasBebidas">
                            <img className='mx-auto sm:w-[60px] mt-[-68px] sm:mt-[-88px]  xl:w-[91px] ' src={gaseosas} alt="" />
                            <p className='font-courgette text-center my-6 text-lg mx-auto'>Bebidas</p>
                        </Link>
                    </div>
                    <div className='rectangle11 w-64 xl:w-80 mb-16 md:w-42'>
                        <Link to={'/tarjetas-Postres'}>
                        <img className='mx-auto sm:w-[133px] mt-[-70px] xl:w-[211px] ' src={postres} alt="" />
                        <p className='font-courgette text-center my-6 text-lg mx-auto'>Postres</p>
                        </Link>
                    </div>



                </div>


            </div>
        );
    }

    export default Home;

