"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    slug: "vice-president-strategy-social-media",
    title: "Vice President — Strategy & Social Media",
    excerpt:
      "Led strategy and execution across technical initiatives, large-scale events, and digital presence. Oversaw cross-functional teams responsible for outreach, branding, and platform-level communication.",
    date: "Sep 17, 2025",
    readTime: "Present",
    category: "leadership",
    tags: ["strategy", "social-media", "events", "branding", "communication", "outreach", "leadership"],
    author: {
      name: "Galgotias Tech Council",
      avatar: "/gtc-logo.png",
      role: "Core Team",
    },
    featured: true,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    slug: "vice-president-events",
    title: "Vice President - Events",
    excerpt:
      "Owned the end-to-end technical and operational execution of large-scale university events, translating vision into structured systems, timelines, and deployable platforms.",
    date: "Oct 10, 2024",
    readTime: "1 Year",
    category: "leadership",
    tags: ["event-tech", "leadership", "execution", "venue-management", "timeline-management", "communication", "engagement-building"],
    author: {
      name: "Galgotias Tech Council",
      avatar: "/gtc-logo.png",
      role: "Core Team",
    },
    featured: false,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    slug: "vice-event-director",
    title: "Vice Event Director",
    excerpt:
      "Directed the planning and execution of a university-scale annual technical festival, owning timelines, system readiness, and cross-team coordination under fixed delivery windows.",
    date: "Mar 5, 2025",
    readTime: "4 Months",
    category: "leadership",
    tags: ["event-tech", "leadership", "execution", "venue-management", "timeline-management", "communication", "engagement-building"],
    author: {
      name: "Galgotias Tech Conclave",
      avatar: "/gtc-25-logo.png",
      role: "Annual Technical Fest, Galgotias University",
    },
    featured: false,
    color: "from-primary/20 to-emerald-500/20",
  },
  {
    id: 4,
    slug: "ios-student-developer",
    title: "iOS Student Developer",
    excerpt:
      "Worked as an iOS developer within a small, cross-functional team to design and deliver a production-ready wellness application, following Agile development practices and iterative delivery.",
    date: "Sep 1, 2024",
    readTime: "1 Year",
    category: "iOS Development",
    tags: ["ios", "agile", "product-development", "UIKit", "Xcode", "Swift", "SwiftUI", "Restful APIs", "Aws"],
    author: {
      name: "iOS Development Center",
      avatar: "/gu.png",
      role: "Galgotias University",
    },
    featured: true,
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: 5,
    slug: "ios-developer-intern",
    title: "iOS Developer Intern",
    excerpt:
      "Contributed as an iOS developer within an enterprise Agile team, working on a Fleet Management System designed for operational tracking, reliability, and scalability.",
    date: "Mar 10, 2025",
    readTime: "1 Month",
    category: "iOS Development, Internship",
    tags: ["ios", "enterprise-systems", "agile", "product-development", "UIKit", "Xcode", "Swift", "SwiftUI", "Restful APIs", "Supabase"],
    author: {
      name: "Infosys",
      avatar: "/infosys.png",
      role: "Mysore, Karnataka",
    },
    featured: true,
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    id: 6,
    slug: "android-developer-intern",
    title: "Android Developer Intern",
    excerpt:
      "Contributed as an Android developer within an enterprise Agile team, working on a Fleet Management System designed for operational tracking, reliability, and scalability.",
    date: "Jun 1, 2025",
    readTime: "1 Month",
    category: "Android Development, Internship",
    tags: ["android", "mobile-systems", "product-development", "Jetpack Compose", "Kotlin", "AndroidX", "Restful APIs", "Supabase"],
    author: {
      name: "Celebal Technologies",
      avatar: "/celebal.png",
      role: "Virtual Internship",
    },
    featured: false,
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    id: 7,
    slug: "subject-matter-expert",
    title: "Subject Matter Expert",
    excerpt:
      "Served as a Subject Matter Expert responsible for the technical evaluation of project submissions during the Bhartiya Antariksha Hackathon, conducted in collaboration with ISRO.",
    date: "Jul 1, 2024",
    readTime: "3 Month",
    category: "Evaluation",
    tags: ["evaluation", "systems-thinking", "space-tech", "isro"],
    author: {
      name: "Bhartiya Antariksha Hackathon",
      avatar: "/isro.png",
      role: "Hack2Skill",
    },
    featured: false,
    color: "from-purple-500/20 to-pink-500/20",
  },
]

export function BlogList() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="space-y-6">
      {blogPosts.map((post, index) => (
        <article
          key={post.id}
          className={cn(
            "group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 sm:p-7 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 active:scale-[0.995] hover-lift opacity-0",
            isVisible && "animate-fade-in-up",
            post.featured && "ring-1 ring-primary/20",
          )}
          style={{ animationDelay: `${index * 80 + 100}ms` }}
        >

          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
              post.color,
            )}
          />

          <div className="relative z-0">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-lg border border-border/80 bg-secondary/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-foreground">
                {post.category}
              </span>
              {post.featured && (
                <span className="rounded-lg border border-primary/50 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary">
                  featured
                </span>
              )}
              <div className="ml-auto flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
            </div>

            <h2 className="mb-3 text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
              {post.title}
            </h2>

            <p className="mb-5 text-sm sm:text-base leading-relaxed text-muted-foreground line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9 border border-border">
                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback className="bg-secondary text-xs font-mono">
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{post.author.name}</span>
                  <span className="text-xs text-muted-foreground">{post.author.role}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-secondary/40 px-2 py-1 font-mono text-[10px] text-muted-foreground transition-colors group-hover:bg-secondary/60"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
        </article>
      ))}
    </div>
  )
}
