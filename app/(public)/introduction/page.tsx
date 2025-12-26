import { Code2, Layers, Smartphone, Zap, Bot, Globe } from "lucide-react";

export default function IntroductionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
                Welcome to NISHANT.DEV
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Where Systems Thinking Meets{" "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                  Product Execution
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              NISHANT.DEV is a personal engineering workspace — not a static portfolio. It’s where AI systems are architected, mobile applications are refined, event-scale platforms are shipped, and ideas are validated under real-world constraints.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded border border-border/50 bg-card/50 p-6 sm:p-10 backdrop-blur-sm space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
                About the Developer
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                A Systems-First Engineer
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                I work at the intersection of system architecture, product engineering, and applied AI. My focus is on building reliable software that scales — technically, operationally, and humanly.
              </p>

              <p>
                From AI-powered university ecosystems and legal assistants to offline-first iOS applications and event-scale platforms, my work prioritizes clear boundaries, deliberate trade-offs, and long-term maintainability over surface-level complexity.
              </p>

              <p>
                This space documents that process — the decisions, iterations, and systems that survive beyond the first release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
              ENGINEERING FOCUS
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built Through Real-World Constraints
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "System-Centric Development",
                description:
                  "I design software as systems, not screens — focusing on architecture, data flow, and long-term behavior instead of short-lived visual demos.",
              },
              {
                icon: Bot,
                title: "AI with Boundaries",
                description:
                  "AI assistants and workflows built with constrained prompts, role-based intelligence, and human-in-the-loop validation to ensure reliability over blind automation.",
              },
              {
                icon: Smartphone,
                title: "Offline-First Mobile Apps",
                description:
                  "Native iOS applications engineered for reliability — designed to work without constant connectivity, with accessibility and calm UX as first-class concerns.",
              },
              {
                icon: Zap,
                title: "Execution at Real Scale",
                description:
                  "Platforms and websites delivered for university-scale events, handling real traffic, fixed deadlines, and cross-team dependencies under pressure.",
              },
              {
                icon: Layers,
                title: "Process-Driven Engineering",
                description:
                  "Experienced working with Agile and Scrum teams — breaking problems into deliverable increments and shipping consistently instead of chasing perfection.",
              },
              {
                icon: Globe,
                title: "Built in the Open",
                description:
                  "Projects, experiments, and problem-solving activity maintained across public platforms, reflecting consistency, learning velocity, and execution.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
