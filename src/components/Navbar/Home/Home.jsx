import img_chef from '../../../assets/img_chef.png';
import img_pizza from '../../../assets/pizza.png';


const Home = () => {
    return(
        <div className='home'>
            <div className='h-[51vh] flex justify-center items-end mb-10'>
                <div className='fondo_chef w-[20vw] flex'>
                <img className='relative ml-[-93px] mt-[-50px]' src={img_chef} alt="" />
                <img className='h-[18vh] absolute ml-[15rem] mt-[2rem]' src={img_pizza} alt="" />
                
                </div>
                
            </div>

            <div className='flex justify-center'>
                <h1 className='font-courgette text-[38px]'>
                    Nuestros productos calidad 100% premium
                </h1>
            </div>

        </div>
    )
}

export default Home 