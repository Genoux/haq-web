import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  text: string;
  url: string;
  variant?:
    | "default"
    | "bg-blue"
    | "outline-black"
    | "bg-black"
    | "bg-white"
    | "disabled";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  text,
  url,
  variant = "default",
  size = "md",
}: ButtonProps) {
  // Define classes for different button variants
  const baseClasses = "py-3 uppercase rounded-sm";
  const variants = {
    default: "bg-primary text-secondary",
    "bg-blue": "bg-gradient-blue text-white",
    "outline-black": "border border-black text-black",
    "bg-black": "bg-black text-white border border-black",
    "bg-white": "bg-none text-black border border-white text-white",
    disabled: "bg-black text-white opacity-30 pointer-events-none",
  };

  const sizes = {
    sm: "text-sm px-4",
    md: "text-md px-6",
    lg: "text-lg px-12",
  };

  const button = (
    <button
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        "transition-all duration-200 font-bold hover:opacity-80",
      )}
    >
      {text}
    </button>
  );

  return variant === "disabled" ? (
    button
  ) : (
    <Link target="_blank" href={url}>
      {button}
    </Link>
  );
}
