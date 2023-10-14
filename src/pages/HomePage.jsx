import About from '../components/about/About';
import Footer from '../components/footer/Footer'
import HeroSection from '../components/header/HeroSection';
import Joining from '../components/joining/Joining';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Joining />
      <About />
      <Footer />
    </div>
  )
}

export default HomePage;
