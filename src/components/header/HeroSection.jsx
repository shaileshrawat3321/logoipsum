import arrow from "../../assets/icons/header-icons/Down arrow.png"
import logo from "../../assets/icons/header-icons/logoipsum.png"
import pic1 from "../../assets/images/herosection/Picture1.png"
import pic2 from "../../assets/images/herosection/Picture2.png"
import pic3 from "../../assets/images/herosection/Picture3.png"

const HeroSection = () => {
    return (
        <main className='w-[1536px] h-[803px] bg-gradient-hero relative mb-[132px]'>
            {/* topbar */}
            <section className='w-[1536px] h-[85px] flex'>

                <div className="w-[138px] h-[45px] flex-shrink-0 py-[20px] ml-[127px] mr-8">

                    <img src={logo} alt="logo" />
                </div>
                <div className="flex items-center p-4">
                    <p className="w-[87px] h-[27px] text-[#000] font-poppins font-bold text-[18px]">Solutions</p>
                    <img src={arrow} alt="down arrow" />
                </div>
                <div className="flex items-center p-4">
                    <p className="w-[87px] h-[27px] text-[#000] font-poppins font-bold text-[18px]">Features</p>
                    <img src={arrow} alt="down arrow" />
                </div>
                <div className="flex items-center p-4">
                    <p className="w-[51px] h-[27px] text-[#000] font-poppins font-bold text-[18px]">Blogs</p>
                </div>
                <div className="flex items-center p-4">
                    <p className="w-[87px] h-[27px] text-[#000] font-poppins font-bold text-[18px]">About</p>
                    <img src={arrow} alt="down arrow" />
                </div>
                <div className="flex items-center p-4">
                    <p className="w-[51px] h-[27px] text-[#000] font-poppins font-bold text-[18px]">Contact</p>
                </div>

                <div className="flex items-center justify-center flex-shrink-0 gap-[16px] ml-[272px]">
                    <button className="w-[100px] h-[46px] rounded-[10px] text-buttonBlue font-poppins font-bold text-[16px] py-[10px] px-[20px] m-[1.5px] border-[1.5px] border-buttonBlue">
                        Login
                    </button>
                    <button className="w-[100px] h-[46px] rounded-[10px] py-[10px] px-[20px] text-[#fff] font-poppins text-[16px] font-bold leading-[26px] bg-buttonBlue">
                        Register
                    </button>
                </div>
            </section>


            {/* bg */}
            <section className='w-[1536px] h-[508px] absolute'>

                {/* left side container */}
                <div className='flex flex-col ml-[128px] pt-[170px] pb-[184px]'>
                    <div className='w-[670px] h-[160px]'>
                        <h1 className='text-[65px] font-bold not-italic font-poppins leading-[80px]'>Find
                            <span className='text-transparent bg-clip-text bg-text-gradient font-poppins'> Partners </span>
                            (CAs) available online</h1>
                    </div>

                    {/* description */}
                    <div className='w-[676px] h-[55px] mt-[16px] mb-[60px]'>
                        <p className='font-normal text-gray text-[20px] font-sans leading-[30px]'>CONNECT with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
                    </div>

                    {/* rectangle */}
                    <div className='w-[670px] h-[73px] bg-[#fff] flex-shrink-0 border border-[#BFBFBF] rounded-[10px] divide-solid flex justify-between items-center'>
                        <input
                            className='w-[384px] h-[19.585px] flex-shrink-0 text-[18px] font-bold font-inter ml-[30px]'
                            type="text" name='name' placeholder='Search by name' />
                        <button
                            className='w-[183px] h-[73px] flex-shrink-0 rounded-[10px] bg-buttonBlue'
                        >
                            <p className='my-[27px] mx-[65px] text-center text-[16px] leading-normal font-inter text-[#fff]'>Search</p>
                        </button>
                    </div>
                </div>
            </section>

            {/* right side photos section */}
            <section className="absolute flex w-[629.741px] items-start gap-[16.793px] mb-[105px] mt-[126px] mr-[40.26] ml-[866px]">
                <img
                    className="pt-[83.966px]"
                    src={pic1} alt="demo" />
                <img src={pic2} alt="demo" />
                <img
                    className="pt-[42px]"
                    src={pic3} alt="demo" />
            </section>


            <section className='w-[1536px] h-[210px] mt-[507px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1536" height="210" viewBox="0 0 1536 210" fill="none">
                    <path d="M0 210H1536V80.0669V0L0 192.622V210Z" fill="#FAFBFC" />
                </svg>
            </section>
        </main>
    )
}

export default HeroSection
