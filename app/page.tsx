import Hero from '../components/Hero';
import ProductsGrid from '../components/ProductsGrid';
import Gallery from '../components/Gallery';
import WhySmokeGrill from '../components/WhySmokeGrill';
import WhatsAppButton from '../components/WhatsAppButton';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      
      <section className="my-20 py-12">
        <WhySmokeGrill />
      </section>
      
      <section className="my-20 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-smokeWhite mb-12 text-center">
          <span className="bg-gradient-to-r from-brandRed via-flame to-brandRed bg-clip-text text-transparent">Productos Destacados</span>
        </h2>
        <ProductsGrid />
      </section>
      
      <section className="my-20 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-smokeWhite mb-12 text-center">
          <span className="bg-gradient-to-r from-flame via-red-600 to-flame bg-clip-text text-transparent">Galería</span>
        </h2>
        <Gallery />
      </section>
      
      <WhatsAppButton />
    </div>
  );
}
