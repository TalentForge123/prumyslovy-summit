import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">Průmyslový Summit</div>
          <div className="hidden md:flex gap-6">
            <Link href="/program" className="hover:underline">Program</Link>
            <Link href="/partneri" className="hover:underline">Partneři</Link>
            <Link href="/vstupenky" className="hover:underline">Vstupenky</Link>
            <Link href="/kontakt" className="hover:underline">Kontakt</Link>
          </div>
        </div>
      </nav>

      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Průmyslový Summit 2025</h1>
        <p className="text-lg mb-6">
          Klíčové setkání lídrů průmyslu, technologií a inovací. 14. listopadu 2025 v PVA Expo Praha.
        </p>
        <Button className="text-lg px-8 py-4">Získat vstupenku</Button>
      </section>
    </main>
  );
}
