import Link from "next/link";
import Placeholder from "./ui/Placeholder";

type JournalCardProps = {
  category: string;
  title: string;
};

export default function JournalCard({ category, title }: JournalCardProps) {
  return (
    <Link href="#" className="group flex flex-col gap-4">
      {/* Article cover slot */}
      <Placeholder label="cover image" className="aspect-[16/10] w-full" />
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-faint">
          {category}
        </span>
        <h3 className="text-lg font-medium leading-snug tracking-tight text-foreground group-hover:underline">
          {title}
        </h3>
      </div>
    </Link>
  );
}
