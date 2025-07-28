"use client";

import { Github, Package, Mail, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer
      id="contact"
      className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                <img
                  src="/assets/icon.svg"
                  alt="RN AI Optimize"
                  className="h-5 w-5"
                />
              </div>
              <span className="text-xl font-bold">RN AI Optimize</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs">
              {t("footer.description")}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              {t("footer.links")}
            </h3>
            <div className="space-y-2">
              <a
                href="https://www.npmjs.com/package/rn-ai-optimize"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Package className="h-4 w-4" />
                {t("footer.npmPackage")}
              </a>
              <a
                href="https://github.com/MateusCastro2203/rn-ai-optmize"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" />
                {t("footer.githubRepo")}
              </a>
              <a
                href="mailto:mateustcastro@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                {t("footer.contact")}
              </a>
            </div>
          </div>

          {/* Quick start */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              {t("footer.quickStart")}
            </h3>
            <div className="rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3">
              <code className="text-xs font-mono text-gray-900 dark:text-white">
                npx rn-ai-optimize analyze ./screens
              </code>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              {t("footer.quickStartDesc")}
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t("footer.copyright")}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <span>{t("footer.madeWith")}</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>{t("footer.forCommunity")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
