interface StatusProps {
  children: React.ReactNode;
  variant?: "live" | "soon";
}

export default function Status({
  children,
  variant = "live",
}: StatusProps) {
  return (
    <span
      className={
        variant === "live"
          ? "rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
          : "rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
      }
    >
      {children}
    </span>
  );
}