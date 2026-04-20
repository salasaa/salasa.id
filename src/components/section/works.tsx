"use client";

import { motion } from "framer-motion";

// 1. Definisikan Interface agar kode bersih
interface Role {
  title: string;
  company?: string; // Opsional jika berbeda dari header
  period: string;
  achievements: string[]; // Mengganti 'achievements.map((ach, aIdx) => (' menjadi array untuk bullet points
  tech: string[];
}

interface WorkExperience {
  company: string;
  logo: string; // Tambahkan path logo di sini
  location: string;
  period: string;
  roles: Role[];
}

// 2. Data yang sudah dioptimasi untuk HR
const workExperiences: WorkExperience[] = [
  {
    company: "Professional Career",
    logo: "/salasaid-new-logo.png",
    location: "Semarang, Indonesia",
    period: "2021 - Present",
    roles: [
      {
        title: "IT Support Specialist",
        period: "2023 - Present",
        achievements: [
          "Optimized enterprise network infrastructure, ensuring 99.9% connectivity uptime for corporate operations.",
          "Streamlined system troubleshooting processes, reducing average response time by 30%.",
          "Managed automated backup systems and server health monitoring to ensure 100% data integrity.",
        ],
        tech: ["Network Admin", "Server Management", "Infrastructure"],
      },
      {
        title: "Technical Support & Web Enthusiast",
        company: "Indoteckno",
        period: "2021 - 2023",
        achievements: [
          "Delivered high-quality hardware and software support for diverse client needs.",
          "Self-developed internal web tools and landing pages to improve team information sharing.",
          "Mastered core programming fundamentals while maintaining full-time technical responsibilities.",
        ],
        tech: ["Hardware Support", "JavaScript", "Client Relations"],
      },
    ],
  },
  {
    company: "Education & Growth",
    logo: "/salasaid-new-logo.png",
    location: "Indonesia",
    period: "2016 - 2025",
    roles: [
      {
        title: "Full-stack Web Development",
        company: "Bootcamp",
        period: "2025",
        achievements: [
          "Built scalable web applications like Arcbook and Cartify using modern tech stacks.",
          "Implemented rigorous quality assurance and acceptance criteria for bug-free deployments.",
          "Collaborated on agile sprints to deliver production-ready digital solutions.",
        ],
        tech: ["Next.js", "TypeScript", "Bun", "PostgreSQL"],
      },
      {
        title: "B.E. in Chemical Engineering",
        period: "Graduated 2020",
        achievements: [
          "Developed strong systematic logic and complex analytical thinking through engineering principles.",
          "Applied mathematical modeling to solve intricate process-related problems.",
          "Successfully pivoted to IT industry by leveraging engineering problem-solving methodologies.",
        ],
        tech: ["Analytical Thinking", "Systems Logic", "Problem Solving"],
      },
    ],
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f8] dark:bg-zinc-950 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Halaman - Sejajar Kiri */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white tracking-tighter">
            Work <span className="text-neutral-500 font-medium">&</span>{" "}
            Experience
          </h1>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-2xl text-lg">
            Career journey and professional experiences that have shaped my
            skills and passion for web development.
          </p>
        </motion.div>

        {/* List Pengalaman */}
        <div className="space-y-20">
          {workExperiences.map((exp, idx) => (
            <section key={idx} className="relative">
              <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                {/* Info Perusahaan/Waktu */}
                <div className="md:w-1/3">
                  <h2 className="text-2xl font-bold dark:text-white">
                    {exp.company}
                  </h2>
                  <p className="text-neutral-500 text-sm mt-1">
                    {exp.location}
                  </p>
                  <p className="text-green-500 font-mono text-xs mt-2">
                    {exp.period}
                  </p>
                </div>

                {/* Detail Peran */}
                <div className="md:w-2/3 space-y-12">
                  {exp.roles.map((role, rIdx) => (
                    <div key={rIdx} className="group">
                      <h3 className="text-xl font-semibold dark:text-neutral-200">
                        {role.title}
                      </h3>
                      <p className="text-sm text-green-500 font-mono mt-1">
                        {role.period}
                      </p>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 flex items-center gap-2">
                        {exp.logo && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-6 h-6 object-contain inline-block dark:invert"
                          />
                        )}
                        {role.company && ` ${role.company}`}
                      </span>

                      <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed italic">
                        {role.achievements.map((ach, aIdx) => (
                          <span key={aIdx} className="block">
                            • {ach}
                          </span>
                        ))}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {role.tech.map((t) => (
                          <span
                            key={t}
                            className="bg-muted/60 text-foreground border px-2 py-1.5 text-xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
