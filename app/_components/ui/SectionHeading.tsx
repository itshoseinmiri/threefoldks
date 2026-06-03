import Link from "next/link";

type SectionHeadingProps = {
  title: string;
  description?: string;
  action?: { label: string; href: string };
};

export default function SectionHeading({
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-end justify-between gap-8">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-2xl text-base leading-7 text-muted">
            {description}
          </p>
        )}
      </div>
      {action && (
        <Link
          href={action.href}
          className="shrink-0 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          {action.label} →
        </Link>
      )}
    </div>
  );
}
