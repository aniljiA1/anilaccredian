// components/ui/Card.tsx
export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="p-6 bg-white shadow rounded-xl">{children}</div>;
}
