interface FeatureProps {
  title: string;
  description: string;
}

export default function Feature({
  title,
  description,
}: FeatureProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}