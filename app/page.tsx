import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-lavender">
      <Hero />

      {/* Placeholder for future sections */}
      <section className="min-h-screen bg-pink-lavender flex items-center justify-center text-vampire-black/20">
        <p className="text-xl font-light tracking-widest uppercase">
          More stories coming soon...
        </p>
      </section>
    </main>
  );
}
