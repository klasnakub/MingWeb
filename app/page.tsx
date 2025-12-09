import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900">
      <Hero />

      {/* Placeholder for future sections */}
      <section className="min-h-screen bg-neutral-950 flex items-center justify-center text-white/20">
        <p className="text-xl font-light tracking-widest uppercase">
          More stories coming soon...
        </p>
      </section>
    </main>
  );
}
