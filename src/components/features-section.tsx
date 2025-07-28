"use client";

import { Brain, Zap, Terminal, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t("features.analysis.title"),
      description: t("features.analysis.description"),
    },
    {
      icon: Lightbulb,
      title: t("features.ai.title"),
      description: t("features.ai.description"),
    },
    {
      icon: Terminal,
      title: t("features.cli.title"),
      description: t("features.cli.description"),
    },
    {
      icon: Zap,
      title: t("features.feedback.title"),
      description: t("features.feedback.description"),
    },
  ];
  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("features.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
