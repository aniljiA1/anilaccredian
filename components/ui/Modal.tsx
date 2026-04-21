// components/ui/Modal.tsx
export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">{children}</div>
    </div>
  );
}
