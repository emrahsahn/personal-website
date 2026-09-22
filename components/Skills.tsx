"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Layers,
  Database,
  Wrench,
  LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const categoryIcons: Record<string, LucideIcon> = {
  languages: Code2,
  ai: Brain,
  backend_web: Layers,
  data: Database,
  tools: Wrench,
};

const categoryGradients: Record<string, string> = {
  languages: "from-accent-purple/15 via-accent-pink/5 to-transparent",
  ai: "from-accent-pink/15 via-accent-purple/5 to-transparent",
  backend_web: "from-accent-blue/15 via-accent-purple/5 to-transparent",
  data: "from-accent-orange/15 via-accent-pink/5 to-transparent",
  tools: "from-emerald-500/15 via-accent-blue/5 to-transparent",
};

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <SectionWrapper id="skills">
      <SectionTitle title={t("title")} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, catIndex) => {
          const Icon = categoryIcons[category.key] || Code2;
          const gradient = categoryGradients[category.key] || "";

          return (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group flex flex-col"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-accent-purple/40 transition-colors">
                  <Icon className="text-accent-purple" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:gradient-text transition-all">
                  {t(`categories.${category.key}`)}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.05 + skillIndex * 0.03,
                    }}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-xs md:text-sm hover:border-accent-purple/40 hover:text-white hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

