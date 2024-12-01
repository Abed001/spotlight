
import About from "./components/About";
import Contact from './components/Contact';
import Faq from './components/Faq';
import Header from './components/Header';
import MainHero from './components/MainHero';
import MainHeroImage from './components/MainHeroImage';
import Product from './components/Product';
import Footer from './components/Footer';
function App() {
  return (

    <div className={`bg-background grid  overflow-hidden`}>
      <div className={` relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>

      <Product />

      <Faq />

      <About />

      <Contact />

      <Footer />

    </div>
  );
};


export default App
