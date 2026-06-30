import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles = {
    primary:
      "inline-flex items-center rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700",

    secondary:
      "inline-flex items-center rounded-xl border border-slate-300 px-7 py-4 font-semibold text-slate-900 transition duration-200 hover:bg-slate-50",

    ghost:
      "inline-flex items-center font-semibold text-blue-600 transition duration-200 hover:text-blue-700",
  };

  return (
    <Link
      href={href}
      className={`${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
