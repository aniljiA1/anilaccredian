import { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  text: string;
};

export default function Badge({ text, className = "", ...props }: BadgeProps) {
  return (
    <span
      {...props}
      className={`bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm ${className}`}
    >
      {text}
    </span>
  );
}
