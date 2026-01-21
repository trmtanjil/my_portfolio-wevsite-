import React, { useState } from "react";

function ShadcnRouterReloadSolveAndATagValidation() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      title: "🔁 Shadcn Router Reload Solve & <a> Tag Validation in Next.js",
      description:
        "When using shadcn/ui in Next.js, you may notice that clicking a button or link causes a full page reload or ESLint shows <a> tag validation errors. This section explains how to solve these issues correctly.",

      problemTitle: "❌ Common Problems",
      problems: [
        "Using <a> tag directly inside shadcn Button.",
        "Normal browser navigation instead of Next.js routing.",
        "Page reload causing state loss.",
        "ESLint error: anchor-is-valid.",
      ],

      whyTitle: "🤔 Why Page Reload Happens?",
      whyDesc:
        "The HTML <a> tag triggers a full page reload by default. Next.js maintains SPA behavior using client-side routing. That’s why we should use next/link instead of native anchors.",

      solutionTitle: "✅ Correct Solution (Best Practice)",
      solutions: [
        "Use next/link for all navigation.",
        "Use asChild with shadcn Button.",
        "Avoid direct <a> usage.",
      ],

      validationTitle: "⚠️ Why <a> Tag Validation Errors Occur?",
      validationPoints: [
        "<a> should not be used as a button.",
        "Avoid empty or invalid href.",
        "Use Next.js Link for navigation.",
      ],

      benefitsTitle: "🚀 Benefits of This Approach",
      benefits: [
        { title: "No Page Reload", text: "SPA behavior remains intact." },
        { title: "Better Performance", text: "Client-side navigation is faster." },
        { title: "No ESLint Errors", text: "Validation issues are eliminated." },
        { title: "Clean Code", text: "Maintainable and scalable architecture." },
      ],

      interviewQ: "Why should we use Next.js Link instead of anchor tag?",
      interviewA:
        "Next.js Link enables client-side navigation without full page reload, improves performance, preserves application state, and avoids validation issues.",
    },

    bn: {
      title: "🔁 Shadcn Router Reload Solve & <a> Tag Validation (বাংলা)",
      description:
        "Next.js এ shadcn/ui ব্যবহার করার সময় অনেক সময় দেখা যায় Button বা link ক্লিক করলে পুরো পেজ reload হয় অথবা ESLint থেকে <a> tag validation error আসে। এখানে এই সমস্যাগুলোর সঠিক সমাধান দেখানো হয়েছে।",

      problemTitle: "❌ সাধারণ সমস্যা",
      problems: [
        "shadcn Button এর ভিতরে সরাসরি <a> tag ব্যবহার করা।",
        "Next.js routing বাদ দিয়ে normal browser navigation হওয়া।",
        "Page reload হয়ে state হারিয়ে যাওয়া।",
        "ESLint error: anchor-is-valid.",
      ],

      whyTitle: "🤔 কেন Page Reload হয়?",
      whyDesc:
        "HTML এর <a> tag ডিফল্টভাবে পুরো পেজ reload করে। কিন্তু Next.js SPA behavior বজায় রাখতে client-side routing ব্যবহার করে। এজন্য আমাদের next/link ব্যবহার করা উচিত।",

      solutionTitle: "✅ সঠিক সমাধান (Best Practice)",
      solutions: [
        "সব navigation এর জন্য next/link ব্যবহার করা।",
        "shadcn Button এর সাথে asChild ব্যবহার করা।",
        "Direct <a> tag ব্যবহার এড়িয়ে চলা।",
      ],

      validationTitle: "⚠️ কেন <a> Tag Validation Error আসে?",
      validationPoints: [
        "<a> কে button হিসেবে ব্যবহার করা যাবে না।",
        "Invalid বা empty href দেওয়া যাবে না।",
        "Routing এর জন্য Next.js Link ব্যবহার করা উচিত।",
      ],

      benefitsTitle: "🚀 এই পদ্ধতির সুবিধা",
      benefits: [
        { title: "No Page Reload", text: "SPA behavior বজায় থাকে।" },
        { title: "Better Performance", text: "Navigation দ্রুত হয়।" },
        { title: "No ESLint Errors", text: "Validation সমস্যা দূর হয়।" },
        { title: "Clean Code", text: "কোড maintainable ও scalable হয়।" },
      ],

      interviewQ: "Anchor tag এর পরিবর্তে Next.js Link কেন ব্যবহার করা উচিত?",
      interviewA:
        "Next.js Link ব্যবহার করলে page reload হয় না, performance ভালো থাকে, state preserve থাকে এবং validation সমস্যা এড়ানো যায়।",
    },
  };

  const t = content[lang];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">

      {/* Language Toggle */}
      <div className="flex justify-end gap-3">
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            lang === "en" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          English
        </button>

        <button
          onClick={() => setLang("bn")}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            lang === "bn" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          বাংলা
        </button>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-4xl font-bold mb-3">{t.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{t.description}</p>
      </div>

      {/* Problems */}
      <div className="bg-red-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">{t.problemTitle}</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {t.problems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Why */}
      <div className="bg-yellow-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">{t.whyTitle}</h2>
        <p className="text-gray-700 leading-relaxed">{t.whyDesc}</p>
      </div>

      {/* Solution */}
      <div className="bg-green-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">{t.solutionTitle}</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {t.solutions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="bg-black text-green-400 p-4 rounded-lg mt-4 text-sm overflow-x-auto">
{`import Link from "next/link";
import { Button } from "@/components/ui/button";

<Button asChild>
  <Link href="/dashboard">Go Dashboard</Link>
</Button>`}
        </div>
      </div>

      {/* Validation */}
      <div className="bg-blue-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">{t.validationTitle}</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {t.validationPoints.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="bg-white border p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4">{t.benefitsTitle}</h2>
        <div className="grid md:grid-cols-2 gap-5 text-gray-700">
          {t.benefits.map((b, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold mb-2">{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interview */}
      <div className="border-l-4 border-indigo-500 bg-indigo-50 p-6 rounded">
        <h2 className="text-xl font-semibold mb-2">🎯 Interview Question</h2>
        <p className="font-medium">Q: {t.interviewQ}</p>
        <p className="mt-2 text-gray-700">A: {t.interviewA}</p>
      </div>

    </div>
  );
}

export default ShadcnRouterReloadSolveAndATagValidation;
