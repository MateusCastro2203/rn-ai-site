"use client";

import { ArrowRight, Github, Package } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20" />

      <div className="relative container mx-auto max-w-6xl text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t("hero.title")
              .split("React Native")
              .map((part, index) =>
                index === 0 ? (
                  <span key={index}>{part}</span>
                ) : (
                  <span key={index}>
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      React Native
                    </span>
                    {part}
                  </span>
                )
              )}
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.npmjs.com/package/rn-ai-optimize"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-sm font-medium text-white shadow transition-all hover:bg-blue-700 hover:shadow-lg hover:scale-105 w-full sm:w-auto"
            >
              <Package className="h-4 w-4" />
              {t("hero.viewNpm")}
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="https://github.com/MateusCastro2203/rn-ai-optmize"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black px-8 py-4 text-sm font-medium shadow-sm transition-all hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg hover:scale-105 w-full sm:w-auto"
            >
              <Github className="h-4 w-4" />
              {t("hero.viewGithub")}
            </a>
          </div>

          {/* Code preview */}
          <div className="mt-16 mx-auto max-w-2xl">
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <code className="text-sm text-left block">
                <span className="text-blue-600 dark:text-blue-400">$</span>{" "}
                <span className="text-foreground">
                  npx rn-ai-optimize analyze ./screens
                </span>
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
