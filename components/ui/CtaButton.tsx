import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const VARIANT_CLASS: Record<Variant, string> = {
  // グレージュ→ゴールドのグラデーション。高級感のあるCTA。
  primary:
    "bg-gradient-to-r from-lumiere-secondary to-lumiere-accent text-lumiere-bg hover:opacity-90",
  secondary:
    "border border-lumiere-accent text-lumiere-accent bg-transparent hover:bg-lumiere-accent/10",
  ghost: "text-lumiere-text dark:text-lumiere-text-dark hover:opacity-70",
};

const SIZE_CLASS: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type CtaButtonProps = {
  variant?: Variant;
  size?: Size;
  href: string;
  children: ReactNode;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href">;

export function CtaButton({
  variant = "primary",
  size = "lg",
  href,
  external,
  className,
  children,
  ...rest
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-luxe font-serif tracking-wider transition-opacity duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lumiere-accent";
  const composed = `${base} ${VARIANT_CLASS[variant]} ${SIZE_CLASS[size]} ${className ?? ""}`;

  if (external) {
    return (
      <a href={href} className={composed} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={composed} {...rest}>
      {children}
    </Link>
  );
}
