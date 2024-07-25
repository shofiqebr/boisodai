import banner from '../assets/banner.png'

const Home = () => {
    return (
        <div>
            <section className='bg-[#f58255] pb-5'>
                <div className='px-2 py-10 '>

                <img className='rounded-xl h-80'  src={banner} alt="" />
                </div>

                <h1 className='text-3xl font-medium text-center px-20'>Important book for All Muslims!</h1>
                <p className='bg-black text-yellow-500 text-3xl text-center m-2 rounded-xl py-2'>
                    The Greatest entrepreneur HAZRAT MUHAMMAD  
                </p>

                <p className='border my-5  border-black text-center mx-2 text-4xl px-12 py-2 text-purple-800 font-semibold'>Guidelines for career and business</p>


                <p className='text-center text-3xl text-blue-600 font-semibold'>Cash on Home Delivery to whole country</p>

                <div className='bg-[#eb8a64]'>
                <p className='border my-5  border-black text-center mx-2 text-4xl px-12 py-2 text-purple-800 font-semibold'>Price 480/- in 30% Discount</p>
                <p className='bg-green-700 text-white text-3xl text-center m-2 rounded-lg py-2  px-28'>
                    Click here to order  
                </p>
                </div>
            </section>




            <section>
            <p className='bg-[#777334] text-white text-3xl text-center m-2 rounded-lg py-2 px-20'>
                  Information: 01713 42 90 60 
                </p>
            </section>
        </div>
    );
};

export default Home;

// http://https//:offer.boisodai.com/step/gem/