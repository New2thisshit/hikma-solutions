/** The Hikma "H" mark, drawn from the original logo geometry. */
export default function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="14 14 36 36"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20 20H28V44H20V20Z" fill="var(--ink)" />
      <path d="M36 20H44V44H36V20Z" fill="var(--accent)" />
      <path d="M28 30H36V34H28V30Z" fill="var(--muted)" />
    </svg>
  );
}
