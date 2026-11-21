import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Custom 404 so we can set robots without inheriting the homepage canonical.
// Next.js also injects noindex on not-found routes; this export makes the
// intended policy explicit and overrides the root layout's index, follow.
export const metadata = {
  title: "Page not found",
  description: "This page does not exist on Externus Media.",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function NotFound() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main className="px-6 py-20 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
        <p className="text-lg text-gray-300 mb-8">
          This page could not be found.
        </p>
        <Link
          href="/"
          className="text-lime-400 hover:text-lime-300 transition font-medium"
        >
          Back to the homepage
        </Link>
      </main>
      <Footer />
    </div>
  );
}
