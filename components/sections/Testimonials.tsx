import Image from "next/image";
import SectionHeading from "../common/SectionHeading";
import Container from "../layout/Container";

export default function Testimonials() {
  const data = [
    {
      name: "Rahul Sharma",
      role: "Founder, StartupX",
      text: "This platform completely transformed how we manage our business.",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Priya Mehta",
      role: "Operations Manager",
      text: "The automation tools saved us countless hours every week.",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Amit Verma",
      role: "CEO, TechCorp",
      text: "Highly recommended for any growing enterprise.",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-100">
      <Container>
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Trusted by businesses worldwide"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((t, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition duration-300"
            >
              <p className="text-gray-600 leading-relaxed">“{t.text}”</p>

              <div className="flex items-center mt-6">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />

                <div className="ml-4">
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
