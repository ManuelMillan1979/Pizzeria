import React from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const TuPedido = ({ carrito, agregarAlCarrito, eliminarDelCarrito }) => {
    // Calcular el precio total
    const precioTotal = carrito.reduce((total, item) => total + item.price * item.cantidad, 0);

    return (
        <div className={`home sm:${carrito.length > 0 ? 'h-auto' : 'h-[100vh]'} sm:flex flex-col justify-between lg:h-[100vh]`}>
            <div className="flex justify-center">
                <Link className='m-auto' to={'/'}>
                    <div>
                        <IoIosArrowBack className='sm:text-4xl' />
                    </div>
                </Link>
                <p className="home w-[90%] h-24 mr-5 sm:mr-20 rounded-b-lg flex justify-center items-center shadow-lg font-courgette sm:text-5xl">
                    Tu pedido
                </p>
            </div>

            <div className=''>
                <div className='flex flex-col mx-4 sm:mx-24'>
                    <div className="h-40 w-1/2 flex justify-center items-center">
                        <h2 className="font-courgette sm:text-5xl">
                            Resumen de tu pedido
                        </h2>
                    </div>
                    {carrito.map((item) => (
                        <div key={item.id} className='w-full flex justify-between'>
                            <div className="w-[71%] flex justify-center">
                                <div className='flex'>
                                    <div className='md:mr-5 lg:mr-20'>
                                        <img className='md:[6rem] lg:h-[12rem]' src={item.img} alt={item.name} />
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h2 className='font-courgette sm:text-3xl'>
                                            {item.name}
                                        </h2>
                                        <p className='font-courgette sm:text-2xl ml-4'>
                                            ${item.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-20 sm:w-60 sm:h-16 rounded-lg flex justify-around items-center border border-black'>
                                    <Link onClick={() => eliminarDelCarrito(item.name)}>
                                        <FaRegTrashAlt className='sm:text-2xl' />
                                    </Link>
                                    <p className='sm:text-3xl'>
                                        {item.cantidad}
                                    </p>
                                    <Link onClick={() => agregarAlCarrito(item)}>
                                        <IoIosAddCircleOutline className='sm:text-2xl' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='h-80 md:h-80 lg:h-48 flex flex-col justify-between items-end mr-4 sm:mr-24 mb-10'>
                    <div className=''>
                        <h2 className='text-red-500 font-courgette sm:text-3xl'>
                        <a href="http://www.aqui colocar el home de la pagina.com" className='text-red-500 font-courgette sm:text-3xl'>
                        ¿Te tienta algo más?  falta aca colocar el home
                        </a>
                        </h2>
                    </div>
                    <div className='flex'>
                        <p className='font-courgette sm:text-3xl'>
                            Precio total:
                        </p>
                        <p className='text-red-500 ml-3 font-courgette sm:text-3xl'>
                            $ {precioTotal}
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full rounded-t-lg shadow-custom-top'>
                <div className='h-36 flex justify-between items-center mx-4 sm:mx-24'>
                    <h1 className='font-bonanova font-semibol sm:text-2xl'>
                        El pago solo se realiza en efectivo y con delivery propio del local.
                    </h1>
                    <div className='sm:w-80'>
                        <Link to={'#'} className='w-36 h-10 sm:w-80 sm:h-20 flex justify-center items-center rounded-lg text-white font-bonanova font-normal sm:text-3xl bg-green-500'>
                            Enviar mi pedido
                            <div className='ml-1 sm:ml-5'>
                                <FaWhatsapp className='sm:text-4xl' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuPedido;
