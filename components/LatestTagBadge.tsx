"use client";

import { useEffect, useRef, useState } from "react";

type LatestTagBadgeProps = {
  fallbackTag: string;
};

export default function LatestTagBadge({ fallbackTag }: LatestTagBadgeProps) {
  const [latestTag, setLatestTag] = useState(fallbackTag);
  const [isFading, setIsFading] = useState(false);
  const latestTagRef = useRef(fallbackTag);

  useEffect(() => {
    let isActive = true;

    const loadTag = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/ImgForger/imgforge/tags",
        );
        if (!res.ok) {
          return;
        }
        const tags = await res.json();
        const tagName = tags?.[0]?.name;
        if (isActive && tagName && tagName !== latestTagRef.current) {
          setIsFading(true);
          window.setTimeout(() => {
            if (!isActive) {
              return;
            }
            setLatestTag(tagName);
            latestTagRef.current = tagName;
            setIsFading(false);
          }, 150);
        }
      } catch {
        // Keep fallback tag on failure.
      }
    };

    loadTag();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <span
      className={`transition-opacity duration-200 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {`${latestTag} is now available`}
    </span>
  );
}
