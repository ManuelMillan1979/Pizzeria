import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';


const TuPedido = ({ carrito, agregarAlCarrito, eliminarDelCarrito }) => {

   

    const precioTotal = carrito.reduce((total, item) => total + item.price * item.cantidad, 0);

    const MensajeWhatsApp = () => {
        let mensaje = "Hola Don Rémolo, me gustaría hacer un pedido:\n\n";
        carrito.forEach(item => {
            mensaje += `${item.cantidad} x ${item.name} = $${item.price * item.cantidad}\n`;
        });
        mensaje += `\nPrecio total: $${precioTotal}`;
        return mensaje;
    };

    const mensajeWhatsApp = MensajeWhatsApp();
    const numeroWhatsApp = "pongan el numero whatsapp al que van enviar el pedido , va todo seguido sin espacios"; 

    return (
        <div className={`home ${carrito.length > 0 ? 'h-auto' : 'h-screen'} sm:flex flex-col justify-between`}>
            <div className="flex justify-center">
                <Link className='m-auto' to={'/'}>
                    <div>
                        <IoIosArrowBack className='text-4xl sm:text-4xl' />
                    </div>
                </Link>
                <p className="home w-[90%] h-24 mr-5 sm:mr-20 rounded-b-lg flex justify-center items-center shadow-lg font-courgette text-4xl sm:text-5xl">
                    Tu pedido
                </p>
            </div>

            <div >
                <div className='flex flex-col mx-4 sm:mx-24'>
                    <div className="h-40 w-full sm:w-1/2 flex justify-center items-center">
                        <h2 className="font-courgette text-3xl sm:text-5xl">
                            Resumen de tu pedido
                        </h2>
                    </div>
                    {carrito.map((item) => (
                        <div key={item.id} className='w-full flex sm:justify-between border-t-[1px] border-black xl:border-0'>
                            <div className="w-full ">
                                <div className='flex flex-col xl:justify-around xl:flex-row'>
                                    <div className="w-64 h-64 flex items-center justify-center overflow-hidden rounded-lg">
                                        <img className="max-w-full max-h-full object-contain" src={item.img} alt={item.name} />
                                    </div>

                                    <div className='w-1/3 flex justify-between items-center'>
                                        <h2 className='font-courgette text-3xl sm:text-3xl'>
                                            {item.name}
                                        </h2>
                                        <p className='font-courgette text-2xl sm:text-2xl ml-4'>
                                            ${item.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='w-32 h-10 sm:w-60 sm:h-16 rounded-lg flex justify-around items-center border border-black'>
                                    <Link onClick={() => eliminarDelCarrito(item.name)}>
                                        <FaRegTrashAlt className='text-2xl sm:text-2xl' />
                                    </Link>
                                    <p className='text-2xl sm:text-3xl'>
                                        {item.cantidad}
                                    </p>
                                    <Link onClick={() => agregarAlCarrito(item)}>
                                        <IoIosAddCircleOutline className='text-2xl sm:text-2xl' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='h-80 md:h-80 lg:h-48 flex flex-col justify-between items-end mr-4 sm:mr-24 mb-10'>
                    <div className=''>
                        <h2 className='text-red-500 font-courgette ml-5 mt-20'>
                            <Link to={'/'} className='text-red-500 font-courgette text-xl sm:text-3xl'>
                                ¿Te tienta algo más?  
                            </Link>
                        </h2>
                    </div>
                    <div className='flex'>
                        <p className='font-courgette text-2xl sm:text-3xl'>
                            Precio total:
                        </p>
                        <p className='text-red-500 ml-3 font-courgette text-2xl sm:text-3xl'>
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
                        <a 
                            href={`https://wa.me/${543413154914}?text=${encodeURIComponent(mensajeWhatsApp)}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='w-36 h-10 sm:w-80 sm:h-20 flex justify-center items-center rounded-lg text-white font-bonanova font-normal sm:text-3xl bg-green-500'
                        >
                            Enviar mi pedido
                            <div className='ml-1 sm:ml-5'>
                                <FaWhatsapp className='sm:text-4xl' />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TuPedido;
