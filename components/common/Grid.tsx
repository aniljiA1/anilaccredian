export default function Grid({
  children,
  cols = 3,
}: {
  children: React.ReactNode;
  cols?: number;
}) {
  return (
    <div
      className={`grid gap-6 ${
        cols === 2
          ? "md:grid-cols-2"
          : cols === 4
            ? "md:grid-cols-4"
            : "md:grid-cols-3"
      }`}
    >
      {children}
    </div>
  );
}
