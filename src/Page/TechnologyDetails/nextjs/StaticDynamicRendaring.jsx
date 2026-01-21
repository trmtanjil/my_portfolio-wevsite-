import React, { useState } from "react";

function StaticDynamicRendering() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      title: "🧱 Static vs Dynamic Rendering in Next.js",
      description:
        "Next.js provides powerful rendering strategies that determine when and how a page is rendered. The two most important types are Static Rendering and Dynamic Rendering.",

      staticTitle: "📦 Static Rendering (SSG)",
      staticDesc:
        "Static Rendering means the page is generated at build time. The generated HTML is reused for every request, making it extremely fast and SEO-friendly.",
      staticPoints: [
        "Generated at build time",
        "Very fast performance",
        "Ideal for blogs, landing pages, documentation",
        "Content does not change per request",
      ],

      dynamicTitle: "⚡ Dynamic Rendering (SSR)",
      dynamicDesc:
        "Dynamic Rendering means the page is generated on every request. This is useful when content depends on real-time data or user-specific information.",
      dynamicPoints: [
        "Generated on every request",
        "Slightly slower than static",
        "Ideal for dashboards, authenticated pages",
        "Uses real-time or user-based data",
      ],

      controlTitle: "🛠️ How Next.js Decides?",
      controlDesc:
        "By default, Next.js tries to statically render pages. If you use dynamic data (cookies, headers, auth, no-store fetch), it automatically switches to dynamic rendering.",

      interviewQ: "When should you use dynamic rendering?",
      interviewA:
        "Dynamic rendering should be used when the page depends on real-time data, authentication, cookies, or user-specific information.",
    },

    bn: {
      title: "🧱 Next.js এ Static vs Dynamic Rendering",
      description:
        "Next.js এ rendering strategy নির্ধারণ করে কখন এবং কীভাবে একটি পেজ render হবে। সবচেয়ে গুরুত্বপূর্ণ দুইটি হলো Static Rendering এবং Dynamic Rendering।",

      staticTitle: "📦 Static Rendering (SSG)",
      staticDesc:
        "Static Rendering মানে হলো build time-এই পেজ তৈরি হয়ে যায়। একই HTML সব request-এর জন্য ব্যবহার হয়, তাই এটি খুব দ্রুত এবং SEO-friendly।",
      staticPoints: [
        "Build time-এ render হয়",
        "খুব দ্রুত লোড হয়",
        "Blog, landing page, documentation-এর জন্য উপযুক্ত",
        "প্রতি request অনুযায়ী content পরিবর্তন হয় না",
      ],

      dynamicTitle: "⚡ Dynamic Rendering (SSR)",
      dynamicDesc:
        "Dynamic Rendering মানে হলো প্রতিটি request-এর সময় পেজ নতুন করে render হয়। যখন real-time বা user-based data লাগে তখন এটি প্রয়োজন।",
      dynamicPoints: [
        "প্রতিটি request-এ render হয়",
        "Static এর তুলনায় একটু ধীর",
        "Dashboard, protected route-এর জন্য উপযুক্ত",
        "User বা real-time data ব্যবহার করে",
      ],

      controlTitle: "🛠️ Next.js কীভাবে সিদ্ধান্ত নেয়?",
      controlDesc:
        "Next.js ডিফল্টভাবে static rendering করার চেষ্টা করে। কিন্তু cookies, headers, authentication বা no-store fetch ব্যবহার করলে এটি নিজে থেকেই dynamic rendering এ চলে যায়।",

      interviewQ: "কখন Dynamic Rendering ব্যবহার করা উচিত?",
      interviewA:
        "যখন পেজটি real-time data, authentication, cookies বা user-specific তথ্যের উপর নির্ভর করে তখন Dynamic Rendering ব্যবহার করা উচিত।",
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
        <p className="text-lg text-gray-700 leading-relaxed">
          {t.description}
        </p>
      </div>

      {/* Static Rendering */}
      <div className="bg-green-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">{t.staticTitle}</h2>
        <p className="text-gray-700 mb-3">{t.staticDesc}</p>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {t.staticPoints.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Dynamic Rendering */}
      <div className="bg-yellow-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">{t.dynamicTitle}</h2>
        <p className="text-gray-700 mb-3">{t.dynamicDesc}</p>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {t.dynamicPoints.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Control */}
      <div className="bg-blue-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">{t.controlTitle}</h2>
        <p className="text-gray-700">{t.controlDesc}</p>
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

export default StaticDynamicRendering;
