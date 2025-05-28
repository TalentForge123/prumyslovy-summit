import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">Průmyslový Summit</div>
          <div className="hidden md:flex gap-6">
            <Link href="/program">Program</Link>
            <Link href="/partneri">Partneři</Link>
            <Link href="/vstupenky">Vstupenky</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </div>
      </nav>

      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Průmyslový Summit 2025</h1>
        <p className="text-lg mb-6">
          Klíčové setkání lídrů průmyslu, technologií a inovací. 14. listopadu 2025 v PVA Expo Praha.
        </p>
        <a href="/vstupenky" className="bg-black text-white px-6 py-3 rounded inline-block text-lg">
          Získat vstupenku
        </a>
      </section>
    </main>
  );
}
