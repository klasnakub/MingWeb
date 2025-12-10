import type { Metadata } from "next";
import { Outfit, Prompt } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });
const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "Ming's Journey",
  description: "A digital diary for Ming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} ${prompt.variable} bg-pink-lavender text-vampire-black antialiased`}>{children}</body>
    </html>
  );
}
