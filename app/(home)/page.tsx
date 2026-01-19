import {
  Activity,
  ArrowRight,
  Box,
  Cpu,
  Database,
  Github,
  Image as ImageIcon,
  Shield,
  Terminal,
  Zap,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

async function getLatestTag() {
  const res = await fetch(
    "https://api.github.com/repos/ImgForger/imgforge/tags",
    {
      next: { revalidate: 3600 },
    },
  );
  const tags = await res.json();
  return tags[0]?.name || "v0.9.0";
}

export default async function HomePage() {
  const latestTag = await getLatestTag();

  return (
    <main className="flex flex-col min-h-screen bg-fd-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fd-primary/10 text-fd-primary text-sm font-medium mb-6 border border-fd-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fd-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-fd-primary"></span>
              </span>
              {`${latestTag} is now available`}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-fd-foreground to-fd-foreground/70 mb-6">
              Image Processing <br />
              <span className="text-fd-primary">Reimagined in Rust</span>
            </h1>
            <p className="text-lg md:text-xl text-fd-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              A secure, blazing-fast image proxy built on Axum and libvips.
              Resize, optimize, and deliver images with ease. Drop-in compatible
              with imgproxy URLs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-fd-primary text-fd-primary-foreground font-semibold hover:opacity-90 transition-all hover:shadow-lg hover:shadow-fd-primary/25"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://github.com/imgforger/imgforge"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-fd-card border border-fd-border text-fd-foreground hover:bg-fd-accent/50 transition-all"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-fd-card/50 border-y border-fd-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose imgforge?
            </h2>
            <p className="text-fd-muted-foreground max-w-2xl mx-auto">
              Built for production environments where performance, security, and
              reliability are non-negotiable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-amber-500" />}
              title="Blazing Fast"
              description="Powered by Rust and libvips for low-latency processing and high throughput with minimal resource usage."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-emerald-500" />}
              title="Secure by Default"
              description="HMAC URL signing, source validation, and strict input checking protect your infrastructure from abuse."
            />
            <FeatureCard
              icon={<Database className="w-6 h-6 text-blue-500" />}
              title="Advanced Caching"
              description="Integrated Foyer cache engine supporting Memory, Disk, and Hybrid backends for optimal performance."
            />
            <FeatureCard
              icon={<Activity className="w-6 h-6 text-purple-500" />}
              title="Observability"
              description="Prometheus metrics and OpenTelemetry tracing baked in. monitor throughput, latency, and errors effortlessly."
            />
            <FeatureCard
              icon={<Box className="w-6 h-6 text-orange-500" />}
              title="Docker First"
              description="Production-ready container images and straightforward binary deployments. Kubernetes friendly."
            />
            <FeatureCard
              icon={<ImageIcon className="w-6 h-6 text-pink-500" />}
              title="Modern Formats"
              description="Automatic format negotiation and conversion to WebP, AVIF, and other modern image standards."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fd-accent text-fd-foreground text-sm font-medium">
                <Terminal className="w-4 h-4" /> Simple API
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Intuitive URL Structure
              </h2>
              <p className="text-fd-muted-foreground text-lg">
                Apply transformations by simply chaining options in the URL.
                Compatible with imgproxy for easy migration.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-green-500/10 text-green-500 mt-1">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">HMAC Signed</h3>
                    <p className="text-sm text-fd-muted-foreground">
                      Prevent URL tampering and resource exhaustion.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-500/10 text-blue-500 mt-1">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">On-the-fly Processing</h3>
                    <p className="text-sm text-fd-muted-foreground">
                      Resize, crop, and filter images in milliseconds.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="rounded-xl overflow-hidden border border-fd-border bg-fd-card shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-fd-border bg-fd-muted/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-xs text-fd-muted-foreground font-mono ml-2">
                    imgforge-request.sh
                  </div>
                </div>
                <div className="p-6 font-mono text-sm overflow-x-auto bg-neutral-950 text-neutral-300">
                  <div className="mb-4">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">signature</span> ={" "}
                    <span className="text-yellow-400">"7e2f...9a1b"</span>
                    {";"}
                  </div>
                  <div className="mb-4">
                    <span className="text-gray-500">
                      {"// Resize to 800x600, smart crop, quality 85"}
                    </span>
                  </div>
                  <div className="text-green-400">
                    https://imgforge.example.com/
                    <span className="text-yellow-400">{"{signature}"}</span>
                    <span className="text-blue-400">/resize:fill:800:600</span>
                    <span className="text-blue-400">/quality:85</span>
                    <span className="text-blue-400">/plain</span>
                    <br />
                    /https://images.unsplash.com/photo-123.jpg@webp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 bg-fd-primary/5 border-y border-fd-border/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Deploy Anywhere</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              href="/docs/10_deployment/10.1_deployment_automated"
              className="group"
            >
              <div className="p-8 rounded-xl bg-fd-card border border-fd-border hover:border-fd-primary/50 transition-all h-full flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Box className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Docker</h3>
                <p className="text-fd-muted-foreground mb-4">
                  Official images available on GHCR. Deploy with Docker Compose
                  or Kubernetes.
                </p>
                <span className="text-fd-primary text-sm font-medium flex items-center gap-1 group-hover:underline">
                  View Docker Guide <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
            <Link
              href="/docs/10_deployment/10.1_deployment_automated"
              className="group"
            >
              <div className="p-8 rounded-xl bg-fd-card border border-fd-border hover:border-fd-primary/50 transition-all h-full flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-slate-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Terminal className="w-8 h-8 text-slate-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Systemd / Binary</h3>
                <p className="text-fd-muted-foreground mb-4">
                  Single binary with no runtime dependencies (except libvips).
                  Easy systemd integration.
                </p>
                <span className="text-fd-primary text-sm font-medium flex items-center gap-1 group-hover:underline">
                  View Manual Deployment <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to speed up your images?
          </h2>
          <p className="text-xl text-fd-muted-foreground mb-10 max-w-2xl mx-auto">
            Get started with imgforge today and experience the power of
            Rust-based image processing.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/docs/1_installation"
              className="px-8 py-4 rounded-lg bg-fd-foreground text-fd-background font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Install Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-fd-card border border-fd-border hover:border-fd-primary/30 transition-colors shadow-sm">
      <div className="mb-4 p-2 w-fit rounded-lg bg-fd-background border border-fd-border">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-fd-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
