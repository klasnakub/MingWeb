import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-12 backdrop-blur-sm bg-white/30 border-b border-white/20 transition-all duration-300">
            <Link href="/" className="text-2xl font-bold tracking-widest text-wine-red hover:opacity-80 transition-opacity">
                Ming's Journey
            </Link>
            <div className="flex gap-6 md:gap-8">
                <Link href="/" className="text-vampire-black font-medium hover:text-wine-red transition-colors text-sm md:text-base tracking-wide">
                    HOME
                </Link>
                <Link href="/gallery" className="text-vampire-black font-medium hover:text-wine-red transition-colors text-sm md:text-base tracking-wide">
                    GALLERY
                </Link>
            </div>
        </nav>
    );
}
