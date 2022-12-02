import About from '../components/About';
import Cover from '../components/Cover';
import Destination from '../components/Destination';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero'
import Mask from '../components/Mask';
import Offer from '../components/Offer';
import Product from '../components/Product';

export default function Home() {
  return (
    <>
      <Header />
      <main className="font-epilogue">
        <Hero />
        <About />
        <Product />
        <Cover />
        <Destination />
        <Offer/>
        <Mask/>
      </main>
      <Footer />
    </>
  );
}
