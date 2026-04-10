"use client";

import { motion } from "framer-motion";

const workExperiences = [
  {
    company: "Professional Journey",
    location: "Semarang, Indonesia",
    period: "2021 - Present",
    roles: [
      {
        title: "Full-stack Developer & QA",
        description: `Selama lebih dari dua tahun, saya mendalami pengembangan aplikasi web dan penjaminan kualitas. 
        Di sini saya membangun sistem seperti Arcbook dan Cartify. Fokus utama saya adalah memastikan kode tidak hanya 
        berjalan, tapi juga skalabel dan bebas dari bug melalui acceptance criteria yang ketat.`,
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      },
      {
        title: "Quality Assurance Specialist",
        description: `Mengelola pengujian fitur registrasi, OCR, dan manajemen transaksi. 
        Saya memastikan setiap fitur memenuhi standar sebelum diluncurkan ke pengguna akhir.`,
        tech: ["Test Cases", "Automation", "Reporting"],
      },
    ],
  },
  {
    company: "Educational Background",
    location: "University",
    period: "Pre-2021",
    roles: [
      {
        title: "Chemical Engineering Student",
        description: `Meskipun berawal dari Teknik Kimia, di sinilah logika penyelesaian masalah saya terbentuk. 
        Transisi ke dunia IT adalah keputusan terbesar yang saya ambil karena passion yang kuat di bidang teknologi.`,
        tech: ["Problem Solving", "Logic", "Analysis"],
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
          <h1 className="text-4xl md:text-6xl font-bold dark:text-white tracking-tighter">
            Work <span className="text-green-500">&</span> Experience
          </h1>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-2xl text-lg">
            Detail perjalanan karir dan proyek yang telah saya kerjakan selama
            beberapa tahun terakhir.
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
                      <h3 className="text-xl font-semibold dark:text-neutral-200 group-hover:text-green-500 transition-colors">
                        {role.title}
                      </h3>
                      <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed italic">
                        {role.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {role.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-[10px] border border-neutral-200 dark:border-white/10 rounded-full dark:text-neutral-300 bg-zinc-50 dark:bg-zinc-900"
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
