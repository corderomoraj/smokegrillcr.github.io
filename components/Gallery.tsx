export default function Gallery() {
  const images = ['/images/brisket.jpg', '/images/ribs.jpg', '/images/pulled.jpg'];
  return (
    <div id="gallery" className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src) => (
        <div key={src} className="h-44 overflow-hidden rounded">
          <img src={src} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}
