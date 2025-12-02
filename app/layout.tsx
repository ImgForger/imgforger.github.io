import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { Metadata } from "next";
import { Vend_Sans } from "next/font/google";
import SearchDialog from "@/components/search";

const font = Vend_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imgforge",
  description: "Image Processing Reimagined in Rust",
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
