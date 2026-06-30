interface TerminalProps {
  title: string;
  children: React.ReactNode;
}

export default function Terminal({
  title,
  children,
}: TerminalProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950">

      <div className="border-b border-slate-800 px-6 py-4">

        <p className="text-sm text-slate-400">
          {title}
        </p>

      </div>

      <div className="overflow-auto p-8">

        {children}

      </div>

    </div>
  );
}