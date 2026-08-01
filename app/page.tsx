import Hero from '../components/Hero';
import ProductsGrid from '../components/ProductsGrid';
import Gallery from '../components/Gallery';
import WhySmokeGrill from '../components/WhySmokeGrill';
import WhatsAppButton from '../components/WhatsAppButton';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <section className="my-12">
        <WhySmokeGrill />
      </section>
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-smokeWhite mb-6">Productos destacados</h2>
        <ProductsGrid />
      </section>
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-smokeWhite mb-6">Galería</h2>
        <Gallery />
      </section>
      <WhatsAppButton />
    </div>
  );
}
