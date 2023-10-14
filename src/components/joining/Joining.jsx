import React from 'react'

const Joining = () => {
    return (
        <main className='w-[1542px] h-[897px] mx-auto mb-[132px]'>
            <div className='absolute top-[1022px] left-[0]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1536" height="757" viewBox="0 0 1536 757" fill="none">
                    <path d="M0.107497 567.266C-13.6344 640.276 0.107497 757 0.107497 757H1536V0C1536 0 1478 47.0138 1451 68C1341.67 152.976 1246.29 92.2517 1105.5 116C957.033 141.043 919.752 257.324 770.187 276.037C632.645 293.245 557.716 199.916 420.345 218.238C255.102 240.279 134.274 284.651 52.3705 418.468C19.8 471.682 11.4329 507.095 0.107497 567.266Z" fill="#DDF3FF" />
                </svg>
            </div>

            {/* heading */}
            <div className='absolute top-[935px] left-[433px]'>
                <div className='w-[670px] h-[98px] flex justify-center'>
                    <h1 className='text-[65px] font-poppins font-bold '>Want to <span className='text-transparent bg-clip-text bg-text-gradient'> Join </span> Us?</h1>
                </div>
            </div>

            <div className='absolute top-[1048px] left-[128px]'>
                <div className='w-[1280px] h-[38px] flex justify-center'>
                    <p className='font-normal leading-[38px] font-poppins text-[24px] text-[#000]'>To remain with us, it is essential that you diligently follow the steps provided</p>
                </div>
            </div>

            {/* note */}
            <div className='absolute top-[1780px] left-32'>
                <div className='w-[1280px] h-[52px]'>
                    <p className='text-black font-poppins text-[17px] font-normal leading-[26px]'>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span className='text-black font-poppins text-[17px] font-bold leading-[26px]'>every day</span> until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
                </div>
            </div>
        </main>
    )
}

export default Joining;
