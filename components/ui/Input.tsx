import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input {...props} className={`w-full border p-3 rounded-lg ${className}`} />
  );
}
