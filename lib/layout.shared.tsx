import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo"
          >
            <title>Imgforge Logo</title>
            <path d="M112 416H400V448H112V416Z" fill="currentColor" />
            <path
              d="M160 416C160 356 180 316 220 296V224H292V296C332 316 352 356 352 416H160Z"
              fill="currentColor"
            />
            <rect
              x="128"
              y="224"
              width="256"
              height="32"
              rx="4"
              fill="currentColor"
            />
            <path
              d="M320 32L240 192H304L224 352L368 160H288L320 32Z"
              fill="#F59E0B"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-bold">Imgforge</span>
        </div>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [],
  };
}
