type LogoProps = {
  className?: string;
};

export default function Logo({
  className = "",
}: LogoProps) {
  return (
    <h1
      className={`
        font-[family-name:var(--font-inter)]
        font-extrabold
        leading-none
        tracking-[-0.055em]
        whitespace-nowrap
        select-none
        ${className}
      `}
    >
      <span className="text-[var(--nativee-dark)] dark:text-white">
        Native
      </span>

      <span className="text-[var(--nativee-blue)]">
        e
      </span>
    </h1>
  );
}