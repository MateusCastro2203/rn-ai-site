"use client";

import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function ExampleSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [typedText, setTypedText] = useState("");

  const command = "npx rn-ai-optimize analyze ./screens";
  const output = t("example.output");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < output.length) {
        setTypedText(output.slice(0, typedText.length + 1));
      }
    }, 30);

    return () => clearTimeout(timer);
  }, [typedText, output]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="examples" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("example.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("example.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Command input */}
          <div className="mb-8">
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-mono">
                    $
                  </span>
                  <code className="text-gray-900 dark:text-white font-mono">
                    {command}
                  </code>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Terminal output */}
          <div className="terminal">
            <div className="terminal-content">
              <pre className="text-sm leading-relaxed whitespace-pre-wrap">
                {typedText}
                <span className="typing-animation">|</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
