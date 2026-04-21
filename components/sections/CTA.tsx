import Container from "../layout/Container";

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Get Started?
          </h2>

          <p className="mt-4 text-lg text-blue-100 max-w-xl mx-auto">
            Join thousands of businesses scaling with our platform.
          </p>

          <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </Container>
    </section>
  );
}
