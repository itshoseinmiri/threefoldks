type PlaceholderProps = {
  /** Optional label describing what asset belongs here. */
  label?: string;
  className?: string;
};

/**
 * Empty asset slot. Marks where an image/illustration/media will go later.
 * Renders a neutral box with a subtle diagonal pattern and an optional label.
 */
export default function Placeholder({ label, className = "" }: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label ? `Placeholder: ${label}` : "Placeholder"}
      className={`flex items-center justify-center overflow-hidden rounded-xl border border-dashed border-border bg-subtle text-xs font-medium tracking-wide text-faint ${className}`}
    >
      {label ?? "Asset"}
    </div>
  );
}
