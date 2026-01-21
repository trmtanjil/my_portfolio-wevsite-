import React, { useState } from "react";

function WhatisNextjs() {
  const [lang, setLang] = useState("en"); // Default English

  const content = {
    bn: {
      title: "🚀 Next.js কী?",
      description:
        "Next.js হলো একটি React Framework যা দিয়ে আমরা fast, SEO-friendly, production-ready web application তৈরি করতে পারি। এটি React এর উপর তৈরি, কিন্তু এতে অনেক built-in সুবিধা আছে যেমন routing, server-side rendering, API handling, image optimization ইত্যাদি।",

      simpleTitle: "📘 সহজ ব্যাখ্যা",
      simplePoints: [
        "React শুধু UI বানাতে সাহায্য করে।",
        "Next.js পুরো application কে production level এ নিয়ে যায়।",
        "Page load দ্রুত হয়।",
        "Google এ ভালো SEO পাওয়া যায়।",
        "Automatic code splitting হয়।",
        "Folder structure দিয়েই routing করা যায়।",
      ],

      useCaseTitle: "🎯 কোন ক্ষেত্রে Next.js ব্যবহার করা হয়?",
      useCases: [
        {
          title: "✅ SEO প্রয়োজনীয় ওয়েবসাইট",
          text: "Blog, News site, Portfolio, Marketing website যেখানে Google ranking গুরুত্বপূর্ণ।",
        },
        {
          title: "⚡ দ্রুত লোড হওয়া অ্যাপ",
          text: "যেখানে user experience গুরুত্বপূর্ণ এবং page দ্রুত load হওয়া দরকার।",
        },
        {
          title: "🌍 Public Platform",
          text: "E-commerce, SaaS, Landing page, Company website ইত্যাদি।",
        },
        {
          title: "🛠️ Full Stack Application",
          text: "যেখানে frontend ও backend একসাথে manage করা হয় API routes দিয়ে।",
        },
      ],

      notUseTitle: "❌ কখন Next.js ব্যবহার করা উচিত না?",
      notUsePoints: [
        "শুধু internal admin dashboard হলে।",
        "SEO দরকার না হলে।",
        "খুব ছোট static project হলে।",
      ],

      notesTitle: "📚 আমার শেখার নোট",
      notesDesc: "ভবিষ্যতে আমি এখানে আমার শেখা বিষয়গুলো যোগ করবো:",
      notes: [
        "Routing",
        "Dynamic Routes",
        "Server Side Rendering (SSR)",
        "Static Site Generation (SSG)",
        "API Routes",
        "Authentication",
        "Performance Optimization",
      ],
    },

    en: {
      title: "🚀 What is Next.js?",
      description:
        "Next.js is a React framework used to build fast, SEO-friendly, production-ready web applications. It is built on top of React and provides many built-in features such as routing, server-side rendering, API handling, and image optimization.",

      simpleTitle: "📘 Simple Explanation",
      simplePoints: [
        "React helps build UI only.",
        "Next.js makes applications production-ready.",
        "Pages load faster.",
        "Better SEO for Google.",
        "Automatic code splitting.",
        "Routing is based on folder structure.",
      ],

      useCaseTitle: "🎯 In which case will Next.js be used?",
      useCases: [
        {
          title: "✅ SEO Required Website",
          text: "Blogs, news sites, portfolios, and marketing websites where Google ranking is important.",
        },
        {
          title: "⚡ Fast Loading Application",
          text: "Applications where user experience and performance are critical.",
        },
        {
          title: "🌍 Public Facing Platform",
          text: "E-commerce, SaaS platforms, landing pages, and company websites.",
        },
        {
          title: "🛠️ Full Stack Application",
          text: "When you want to manage frontend and backend together using API routes.",
        },
      ],

      notUseTitle: "❌ When NOT to use Next.js",
      notUsePoints: [
        "Only internal admin dashboards.",
        "When SEO is not required.",
        "Very small static projects.",
      ],

      notesTitle: "📚 My Learning Notes",
      notesDesc: "In the future, I will add what I learn here:",
      notes: [
        "Routing",
        "Dynamic Routes",
        "Server Side Rendering (SSR)",
        "Static Site Generation (SSG)",
        "API Routes",
        "Authentication",
        "Performance Optimization",
      ],
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

      {/* Simple Explanation */}
      <div className="bg-gray-50 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-3">{t.simpleTitle}</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {t.simplePoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Use Cases */}
      <div className="bg-white border p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4">{t.useCaseTitle}</h2>
        <div className="grid md:grid-cols-2 gap-5 text-gray-700">
          {t.useCases.map((item, index) => (
            <div key={index} className="p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* When Not To Use */}
      <div className="bg-red-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">{t.notUseTitle}</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {t.notUsePoints.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Learning Notes */}
      <div className="border-dashed border-2 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">{t.notesTitle}</h2>
        <p className="text-gray-600">{t.notesDesc}</p>
        <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
          {t.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default WhatisNextjs;
