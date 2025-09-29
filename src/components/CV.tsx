"use client";

import { useState, useEffect } from "react";
import { Mail, Link as LinkIcon, MapPin, Phone, GraduationCap, Briefcase, Award, BookOpen, Code2, Cpu, Printer, Twitter as TwitterIcon, Moon, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// === Edit this data only ===
const data = {
  name: "Difan Jia",
  tagline: "PhD Student · HCI & Visualization · XR/AR",
  //roleTarget: "Applying: Autodesk PhD Intern, HCI & Visualization Research",
  contact: {
    email: "difan.jia@utdallas.edu",
    phone: "7632289947", // format as you prefer
    location: "Richardson, TX, USA",
    links: [
      { label: "Twitter/X", href: "https://x.com/KeithMaxwell99", icon: TwitterIcon },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=M3bt3kAAAAAJ&view_op=list_works&gmla=AH8HC4zdvVWaErg9cqDlAVxAzk__x1TLWmo_AHXt5TBC9h1JsJvZhRCU5erscQWu4wj4vKa7axlXDZVekL1P3euw", icon: LinkIcon },
    ],
  },
  education: [
    {
      school: "The University of Texas at Dallas",
      degree: "Ph.D., Computer Science (Advisor: Prof. Liang He)",
      period: "Aug 2025 – May 2030 (expected)",
      details: ["Graduate Teaching Assistant"],
    },
    {
      school: "University of Minnesota",
      degree: "B.A., Computer Science (GPA 3.67)",
      period: "Sep 2023 – Jun 2025",
      details: ["Undergraduate Research Opportunities Program (UROP) recipient, Undergrad Teaching Assistant"],
    },
    {
      school: "University of Shanghai for Science and Technology",
      degree: "B.E., Electronic Instrument & Measuring Technology",
      period: "Sep 2020 – Jun 2023",
      details: ["Model United Nations"],
    },
  ],
  experience: [
    {
      org: "The University of Texas at Dallas",
      title: "Graduate Teaching Assistant",
      period: "Aug 2025 – Present",
      bullets: [
        "Support graduate-level CS courses; mentor students while pursuing Ph.D. under Prof. Liang He.",
      ],
    },
    {
      org: "University of Minnesota Twin Cities",
      title: "Undergraduate Teaching Assistant, CSCI 3041 (Algorithms & Data Structures)",
      period: "Sep 2024 – May 2025",
      bullets: [
        "Led problem-solving sessions and office hours; graded programming assignments with rubric-driven feedback.",
      ],
    },
    {
      org: "University of Minnesota Twin Cities",
      title: "Undergraduate Research Assistant (Advisor: Prof. Chen Zhu‑Tian)",
      period: "Apr 2024 – May 2025",
      bullets: [
        "Co-authored two papers in AR/HCI & visualization; contributed to study design, Unity/AVP/Quest3 prototypes, and analysis.",
      ],
    },
  ],
  projects: [
    {
      name: "Reality Proxy — Fluid interactions with real-world objects in MR via abstract representations (UIST'25)",
      period: "2024 – 2025",
      role: "Co-author (2nd)",
      stack: ["Unity", "C#", "Apple Vision Pro"],
      link: "https://arxiv.org/abs/2507.17248",
      bullets: [
        "Built proxy-based MR interactions that decouple selection from physical constraints; enabled skimming, brushing, and semantic grouping.",
        "Implemented lazy-follow proxies and constraint-preserving layouts; supported attribute-based filtering via AI-enriched scene structure.",
        "Expert review with 10 XR specialists indicated utility and usability; open-sourced core prototype.",
      ],
    },
    {
      name: "AR-Embedded Visualizations & AI Reliance in Spatial Decision Making (under CHI'26 review)",
      period: "2024 – 2025",
      role: "Co-author (2nd)",
      stack: ["Unity", "ARKit", "Apple Vision Pro", "Empirical Study"],
      link: "https://arxiv.org/abs/2507.14316",
      bullets: [
        "Compared AR see-through vs. 2D minimap for time‑critical spatial target selection with AI suggestions.",
        "User study (N=32) found higher inappropriate reliance in AR (over‑reliance), yet improved spatial mapping & egocentric imagery.",
        "Derived design implications for human‑AI collaboration in AR under time pressure.",
      ],
    },
  ],
  skills: {
    programming: ["Python", "Next.js", "TypeScript", "C#"],
    frameworks: ["Unity", "OpenXR", "ARKit/ARCore"],
    platforms: ["Apple Vision Pro", "Meta Quest 3"],
    research: ["User Studies", "Prototyping"],
  },
  awards: [
    { name: "Undergraduate Research Opportunities Program (UROP)", org: "University of Minnesota", year: "2025 Spring" },
  ],
  languages: [
    { name: "Chinese", level: "Native / Fluent" },
    { name: "English", level: "Professional Working Proficiency" }, // adjust as you prefer
  ],
};
// === End editable data ===

export default function CV() {
  const [isDark, setIsDark] = useState(false);

  // 初始化主题
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  // 切换主题
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  // Dev check ("test case"): ensure every contact link has a usable icon; otherwise warn & fall back
  if (typeof window !== 'undefined') {
    try {
      data.contact.links.forEach((l) => {
        if (typeof l.icon !== 'function') {
          console.warn(`[CV] Missing icon for link "${l.label}", falling back to LinkIcon.`);
        }
      });
    } catch {}
  }

  return (
    <div className="mx-auto max-w-5xl p-6 print:p-0 text-sm leading-6 text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 min-h-screen transition-colors">
      {/* Header */}
      <header className="flex items-start justify-between gap-4 border-b border-zinc-200 dark:border-zinc-700 pb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{data.name}</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">{data.tagline}</p>
          <p className="text-zinc-900 dark:text-zinc-100 mt-1 font-medium">{data.roleTarget}</p>
        </div>
        <div className="flex flex-col items-end gap-1 text-zinc-700 dark:text-zinc-300">
          <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> <a className="underline hover:text-zinc-900 dark:hover:text-zinc-100" href={`mailto:${data.contact.email}`}>{data.contact.email}</a></div>
          <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> <span>{data.contact.phone}</span></div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> <span>{data.contact.location}</span></div>
          <div className="flex flex-wrap gap-3 mt-1">
            {data.contact.links.map((l, i) => {
              const IconComp = typeof l.icon === 'function' ? l.icon : LinkIcon; // fallback safety
              return (
                <a key={i} href={l.href} className="inline-flex items-center gap-1 underline hover:text-zinc-900 dark:hover:text-zinc-100"><IconComp className="h-4 w-4"/> {l.label}</a>
              );
            })}
          </div>
          <div className="flex gap-2 mt-2 print:hidden">
            <Button onClick={toggleTheme} size="sm" variant="outline">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button onClick={() => window.print()} size="sm" variant="secondary"><Printer className="h-4 w-4 mr-2"/>Print / PDF</Button>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Left column */}
        <section className="lg:col-span-2 space-y-6">
          <Section title="Education" icon={GraduationCap}>
            {data.education.map((e, i) => (
              <Item key={i} title={`${e.school} — ${e.degree}`} right={e.period}>
                <ul className="list-disc ml-5 mt-1">
                  {e.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </Item>
            ))}
          </Section>

          <Section title="Experience" icon={Briefcase}>
            {data.experience.map((ex, i) => (
              <Item key={i} title={`${ex.org} — ${ex.title}`} right={ex.period}>
                <ul className="list-disc ml-5 mt-1">
                  {ex.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </Item>
            ))}
          </Section>

          <Section title="Research Projects & Publications" icon={BookOpen}>
            {data.projects.map((p, i) => (
              <Card key={i} className="border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{p.name}</h3>
                      <p className="text-zinc-600 dark:text-zinc-400 mt-1">{p.role} · {p.period}</p>
                    </div>
                    <a href={p.link} className="underline text-zinc-800 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100">View</a>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.stack.map((s, k) => <Badge key={k} variant="secondary">{s}</Badge>)}
                  </div>
                  <ul className="list-disc ml-5 mt-2">
                    {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </Section>
        </section>

        {/* Right column */}
        <aside className="space-y-6">
          <Section title="Skills" icon={Code2}>
            <TagRow label="Programming" items={data.skills.programming}/>
            <TagRow label="Frameworks" items={data.skills.frameworks}/>
            <TagRow label="Platforms" items={data.skills.platforms}/>
            <TagRow label="Research" items={data.skills.research}/>
          </Section>

          <Section title="Awards" icon={Award}>
            {data.awards.map((a, i) => (
              <Item key={i} title={a.name} right={a.year || ""}>
                <p className="text-zinc-700">{a.org}</p>
              </Item>
            ))}
          </Section>

          <Section title="Languages" icon={Cpu}>
            <ul className="mt-1 space-y-1">
              {data.languages.map((l, i) => (
                <li key={i} className="flex items-center justify-between"><span>{l.name}</span><span className="text-zinc-600">{l.level}</span></li>
              ))}
            </ul>
          </Section>
        </aside>
      </div>
    </div>
  );
}

function Section({ title, icon: Icon, children }: { title: string; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2"><Icon className="h-5 w-5"/><h2 className="text-lg font-semibold tracking-tight">{title}</h2></div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Item({ title, right, children }: { title: string; right?: string; children?: React.ReactNode }) {
  return (
    <div className="border-b border-zinc-200 dark:border-zinc-700 pb-2 last:border-0">
      <div className="flex items-start justify-between gap-4">
        <p className="font-medium text-zinc-900 dark:text-zinc-100">{title}</p>
        {right ? <p className="text-zinc-600 dark:text-zinc-400 whitespace-nowrap">{right}</p> : null}
      </div>
      {children}
    </div>
  );
}

function TagRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="mt-1">
      <p className="text-zinc-700 dark:text-zinc-300 font-medium">{label}</p>
      <div className="mt-1 flex flex-wrap gap-2">
        {items.map((t, i) => <Badge key={i} variant="secondary">{t}</Badge>)}
      </div>
    </div>
  );
}