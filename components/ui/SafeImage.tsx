"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

// Unsplash等の外部画像が読み込めなかった場合、
// ブランドカラー背景＋altテキストのフォールバックUIを表示する。
type SafeImageProps = Omit<ImageProps, "onError"> & {
  fallbackLabel?: string;
};

export function SafeImage({ fallbackLabel, className, alt, ...rest }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex h-full w-full items-center justify-center bg-lumiere-secondary/80 p-4 text-center text-sm text-lumiere-bg dark:bg-lumiere-secondary-dark ${className ?? ""}`}
      >
        <span className="font-serif">{fallbackLabel ?? alt}</span>
      </div>
    );
  }

  return (
    <Image
      {...rest}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
