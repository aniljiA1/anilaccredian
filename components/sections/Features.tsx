import SectionHeading from "../common/SectionHeading";
import Container from "../layout/Container";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <Container>
        <SectionHeading title="Features" subtitle="What we offer" />

        <div className="grid md:grid-cols-3 gap-6">
          {["Analytics", "Automation", "Insights"].map((item) => (
            <div
              key={item}
              className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="text-gray-500 mt-2">
                Powerful tools to scale your business efficiently.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
