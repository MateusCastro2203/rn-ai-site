"use client";

import { useState } from "react";
import { Copy, Check, Download, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function InstallationSection() {
  const { t } = useLanguage();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const installationMethods = [
    {
      title: t("installation.global.title"),
      description: t("installation.global.description"),
      command: "npm install -g rn-ai-optimize",
      usage: "rn-ai-optimize analyze ./screens",
      icon: Download,
    },
    {
      title: t("installation.npx.title"),
      description: t("installation.npx.description"),
      command: "npx rn-ai-optimize analyze ./screens",
      usage: t("installation.npx.usage"),
      icon: Zap,
    },
  ];

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section
      id="installation"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("installation.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("installation.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {installationMethods.map((method, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <method.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {method.description}
                  </p>
                </div>
              </div>

              {/* Command */}
              <div className="mb-4">
                <div className="rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3">
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono text-gray-900 dark:text-white">
                      {method.command}
                    </code>
                    <button
                      onClick={() => copyToClipboard(method.command, index)}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {copiedIndex === index ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Usage */}
              {method.usage !== t("installation.npx.usage") && (
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {t("installation.global.usage")}
                  </p>
                  <div className="rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3">
                    <code className="text-sm font-mono text-gray-900 dark:text-white">
                      {method.usage}
                    </code>
                  </div>
                </div>
              )}

              {method.usage === t("installation.npx.usage") && (
                <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                  <Check className="h-4 w-4" />
                  <span>{method.usage}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-lg bg-blue-50 dark:bg-blue-950/20 px-4 py-2 text-sm text-blue-700 dark:text-blue-300">
            <Zap className="h-4 w-4" />
            <span>{t("installation.recommendation")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
