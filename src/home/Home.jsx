import { FaHandPointRight, FaRegHandPointDown } from 'react-icons/fa';
import qbq from '../assets/QBQ-Image-1.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            {/* <section className='bg-[#f58255] pb-5'>
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
            <p className='bg-[#777334] text-white text-3xl text-center m-2 rounded-lg py-2 px-20 my-5'>
                  Information: 01713 42 90 60 
                </p>
                <p className='border-double border-[6px] rounded-lg mx-2 border-black text-3xl p-2 my-5'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto iure ducimus natus atque fuga, voluptatem consequuntur soluta delectus eos! Ab, in unde! Non facilis, nemo libero velit consectetur laboriosam voluptates dicta nihil.
                </p>
            </section> */}

          <div className='flex md:flex-row flex-col gap-10 bg-[#E4965D] lg:px-56  md:py-20'>

            <section className="md:w-1/2 ">
                        <img className='rounded-xl' src={qbq} alt="" />
            </section>
            <section >
                <p className='text-xl font-medium'>বিষয় ভিত্তিক</p>

                <h1 className='text-4xl font-semibold py-2'>তাফসীরুল কুরআন বিল কুরআন</h1>

                <div className='Allign'><FaHandPointRight className='icon' /> <p className='Text'>লেখকঃ শাইখ আবদুর রহমান বিন মুবারক আলী</p></div>
                <div className='Allign'><FaHandPointRight className=' text-white text-[] ' /> <p className='Text'>কুরআনের আলোকে ১৪ বছর গবেষনার বাংলা ব্যাখ্যা সহ বিষয়ভিত্তিক সমাধান</p></div>
                <div className='Allign'><FaHandPointRight className='icon' /> <p className='Text'>পবিত্র কুরআন দিয়ে কুরআনের তাফসীর</p></div>
                <div className='Allign'><FaHandPointRight className='icon' /> <p className='Text'>সর্বোচ্চ বিক্রিত তাফসির কিতাব</p></div>

                <div>
                হাদিয়াঃ ১০৯০/- টাকা
                </div>

                <p>সারাদেশে ক্যাশ অন হোম ডেলিভারি</p>

                <button>অর্ডার করতে এখানে ক্লিক করুন <FaRegHandPointDown /> </button>

            </section>
          </div>
        </div>
    );
};

export default Home;

// http://https//:offer.boisodai.com/step/gem/