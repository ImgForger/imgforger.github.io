import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Vend_Sans } from "next/font/google";
import SearchDialog from "@/components/search";

const font = Vend_Sans({
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Imgforge",
  description: "Image Processing Reimagined in Rust",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://imgforger.github.io",
  ),
  icons: {
    icon: "/logo.svg",
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            SearchDialog,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
