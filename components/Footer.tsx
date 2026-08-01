export default function Footer() {
  return (
    <footer className="bg-smoke px-4 py-8 mt-12">
      <div className="container mx-auto text-smokeWhite text-center">
        <div className="mb-2">SmokeGrill — Parrilladas y ahumados premium</div>
        <div className="text-xs text-zinc-400">Tel: 0000-0000 · Email: contacto@smokegrill.local</div>
        <div className="text-xs text-zinc-500 mt-4">© {new Date().getFullYear()} SmokeGrill</div>
      </div>
    </footer>
  );
}
