import search from "../../assets/icons/about-icons/search.png"
import enquire from "../../assets/icons/about-icons/enquire.png"
import tableReport from "../../assets/icons/about-icons/table-report.png"
import degree from "../../assets/icons/about-icons/degree.svg"
import boyImg from "../../assets/images/about/boy.png"
import girlImg from "../../assets/images/about/girl.png"


const About = () => {
    return (
        <main className='w-[1280px] h-[615px] bg-red-50 ml-[128px] mb-[132px]'>


            {/* heading */}
            <div className='w-[670px] h-[196px]'>
                <h1 className='text-[65px] font-poppins font-bold leading-normal'> <span className='text-transparent bg-clip-text bg-text-gradient'>All-in-One </span> platform that Makes Easier</h1>
            </div>

            {/* description */}
            <div className='w-[604px] h-[114px]'>
                <p className='text-[24px] font-normal leading-[38px] text-black not-italic font-poppins'>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>
            </div>

            {/* services */}

            {/* search */}
            <div className="mt-[32px] flex gap-[18px]">
                <img className="w-[65px] h-[65px]" src={search} alt="search" />
                <div className="w-[205px] h-[96px]">
                    <p className="font-poppins text-[20px] text-black font-normal leading-[32px] not-italic">
                        <span className="font-bold">SEARCH </span>
                        for vital company information
                    </p>
                </div>
            </div>

            {/* table report */}
            <div className="mt-[32px] flex gap-[18px]">
                <img className="w-[65px] h-[65px]" src={tableReport} alt="table report" />
                <div className="w-[205px] h-[96px]">
                    <p className="font-poppins text-[20px] text-black font-normal leading-[32px] not-italic">
                        <span className="font-bold">RESEARCH </span>
                        and generate reports that drive growth
                    </p>
                </div>
            </div>

            {/* enquire */}
            <div className="mt-[32px] flex gap-[18px] absolute top-[2270px] left-[527px]">
                <img className="w-[65px] h-[65px]" src={enquire} alt="enquire" />
                <div className="w-[205px] h-[96px]">
                    <p className="font-poppins text-[20px] text-black font-normal leading-[32px] not-italic">
                        <span className="font-bold">CONNECT </span>
                        with the resources to meet your business needs
                    </p>
                </div>
            </div>

            {/* degree */}
            <div className="mt-[32px] flex gap-[18px] absolute top-[2400px] left-[527px]">
                <img className="w-[65px] h-[65px]" src={degree} alt="degree" />
                <div className="w-[205px] h-[96px]">
                    <p className="font-poppins text-[20px] text-black font-normal leading-[32px] not-italic">
                        <span className="font-bold">ACADEMY </span>
                        to give you the skills for success in your career
                    </p>
                </div>
            </div>

            <div className="absolute top-[2233.47px] left-[788.65px]">
                <img src={girlImg} alt="girl with laptop" />
            </div>

            <div className="absolute left-[1039.57px] top-[1967.25px]">
                <img src={boyImg} alt="boy with notebook" />
            </div>

        </main>
    )
}

export default About
