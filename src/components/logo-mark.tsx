export default function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="12" fill="#f4a51c" />
      <polygon
        points="32,8 39,15 49,15 49,25 56,32 49,39 49,49 39,49 32,56 25,49 15,49 15,39 8,32 15,25 15,15 25,15"
        fill="#1c2245"
      />
      <rect x="25" y="25" width="14" height="14" fill="#f4a51c" transform="rotate(45 32 32)" />
    </svg>
  );
}
