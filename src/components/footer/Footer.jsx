import CopyrightFooter from './CopyrightFooter'
import whatsapp from "../../assets/icons/footer-icons/whatsapp logo.png"
import linkedIn from "../../assets/icons/footer-icons/linkedin logo.png"
import facebook from "../../assets/icons/footer-icons/Social icon.png"
import instagram from "../../assets/icons/footer-icons/Social icon-1.png"
import logoipsum from "../../assets/icons/footer-icons/logoipsum.png"
const Footer = () => {
    return (
        <footer >
            <div className='w-[1536px] h-[341px] bg-gradient-footer'>

                {/* details */}
                <section className='w-[1280px] h-[244px] flex justify-evenly pt-[41px] mx-[128px]'>
                    <div className='w-[272px]'>
                        <img src={logoipsum} alt="logoipsum" className='w-[138px] h-[45px]' />
                        <p className='text-[#fff] font-sans font-normal text-[14px] pt-[15.53px]'>India's first platform dedicated to simplifying partner search</p>
                    </div>

                    <div>
                        <p className='w-[101.33px] text-white text-[14px] font-sans'>COMPANY</p>
                    </div>

                    <div>
                        <p className='w-[101.33px] text-white text-[14px] font-sans'>SOLUTIONS</p>
                    </div>

                    <div>
                        <p className='w-[101.33px] text-white text-[14px] font-sans'>RESOURCES</p>
                    </div>

                    <div>
                        <p className='w-[101.33px] text-white text-[14px] font-sans'>SUPPORT</p>
                    </div>

                    <div>
                        <p className='w-[101.33px] text-white text-[14px] font-sans'>LEGAL</p>
                    </div>

                </section>

                {/* dividing line */}
                <section className='w-[1280px] border-[1px] px-[128px] mx-auto flex-shrink-0 stroke-1 text-[#fff]'>

                </section>

                {/* address and links */}
                <section className='w-[1280px] h-[97px] flex justify-between items-center'>
                    <p className='mx-auto text-[#fff] font-sans text-[14px] font-normal'>
                        Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra
                    </p>
                    {/* social media icons */}
                    <div className='w-[168px] h-[24px] flex-shrink-0 flex gap-[24px]'>
                        <span>
                            <img className='text-white' src={facebook} alt="facebook" />
                        </span>
                        <span>
                            <img className='text-white' src={instagram} alt="instagram" />
                        </span>
                        <span>
                            <img className='text-white' src={linkedIn} alt="linkedin" />
                        </span>
                        <span>
                            <img className='text-white' src={whatsapp} alt="whatsapp" />
                        </span>
                    </div>
                </section>
            </div>
            <CopyrightFooter />
        </footer>
    )
}

export default Footer
