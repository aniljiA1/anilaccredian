import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
        alt="Hero"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Grow Your Business Faster
        </h1>

        <p className="mt-4 text-lg max-w-xl">
          Scale your enterprise with powerful tools and insights.
        </p>

        <button className="mt-6 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </section>
  );
}
