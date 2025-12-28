import { ProjectsPageContent } from "@/components/public/projects/projects-page-content";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nishantbhardwaj.er';

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore open source projects, experiments, and tools. From web applications to systems programming, dive into the code.",
  keywords: ["open source", "projects", "web development", "systems programming", "experiments"],
  openGraph: {
    title: "Projects — NISHANT.DEV",
    description: "Explore open source projects, experiments, and tools.",
    url: `${baseUrl}/projects`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/profile-image-projects.png`,
        width: 1200,
        height: 630,
        alt: "NISHANT.DEV Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — NISHANT.DEV",
    description: "Explore open source projects, experiments, and tools.",
    images: [`${baseUrl}/profile-image-projects.png`],
  },
  alternates: {
    canonical: `${baseUrl}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <ProjectsPageContent />
    </div>
  );
}
