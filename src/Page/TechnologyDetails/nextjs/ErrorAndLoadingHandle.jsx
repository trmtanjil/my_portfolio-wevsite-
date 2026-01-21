"use client";
import React, { useState } from "react";

function ErrorAndLoadingHandle() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      title: "🚨 Error & ⏳ Loading Handling in Next.js",
      description:
        "Next.js provides built-in mechanisms to handle loading states and runtime errors on both server-side and client-side, ensuring a stable and user-friendly application.",

      loadingTitle: "⏳ Loading Handling",
      loadingPoints: [
        "loading.js is shown automatically during data fetching.",
        "Works with Server Components and route transitions.",
        "Prevents blank screen during slow API or database calls.",
      ],

      errorTitle: "🚨 Error Handling",
      errorPoints: [
        "error.js works as an Error Boundary.",
        "Catches runtime, fetch, and server errors.",
        "Prevents full app crash and shows fallback UI.",
      ],

      backendTitle: "🧠 Backend Perspective",
      backendDesc:
        "If the backend throws an error or returns a non-success response, Next.js catches it and renders the nearest error.js file.",

      benefitsTitle: "🚀 Benefits",
      benefits: [
        { title: "Better UX", text: "Users always see feedback." },
        { title: "No App Crash", text: "Errors are isolated per route." },
        { title: "Server Friendly", text: "Works seamlessly with APIs." },
        { title: "Production Ready", text: "Built-in and scalable." },
      ],

      interviewQ: "How does Next.js handle loading and errors?",
      interviewA:
        "Next.js uses loading.js for loading states and error.js as error boundaries to handle errors gracefully without crashing the application.",
    },

    bn: {
      title: "🚨 Next.js এ Error ও ⏳ Loading Handle করা",
      description:
        "Next.js এ Server Side ও Client Side—দুই জায়গাতেই loading ও error handle করার জন্য built-in system আছে, যা অ্যাপকে stable ও user-friendly করে।",

      loadingTitle: "⏳ Loading কিভাবে কাজ করে",
      loadingPoints: [
        "data fetch চলাকালীন loading.js স্বয়ংক্রিয়ভাবে দেখায়।",
        "Server Component ও route change দুটোতেই কাজ করে।",
        "Slow API বা database হলেও blank screen হয় না।",
      ],

      errorTitle: "🚨 Error কিভাবে Handle হয়",
      errorPoints: [
        "error.js একটি Error Boundary হিসেবে কাজ করে।",
        "Runtime, fetch ও server error ধরতে পারে।",
        "পুরো অ্যাপ crash না করে fallback UI দেখায়।",
      ],

      backendTitle: "🧠 Backend দিক থেকে কী ঘটে",
      backendDesc:
        "Backend যদি error throw করে বা failed response দেয়, Next.js সেই error ধরে nearest error.js ফাইল render করে।",

      benefitsTitle: "🚀 এই পদ্ধতির সুবিধা",
      benefits: [
        { title: "Better UX", text: "User সবসময় feedback পায়।" },
        { title: "No App Crash", text: "Error route অনুযায়ী isolate হয়।" },
        { title: "Server Friendly", text: "API এর সাথে ভালোভাবে কাজ করে।" },
        { title: "Production Ready", text: "Built-in ও scalable solution।" },
      ],

      interviewQ: "Next.js কিভাবে loading ও error handle করে?",
      interviewA:
        "Next.js loading.js দিয়ে loading state এবং error.js দিয়ে error boundary তৈরি করে, ফলে অ্যাপ crash না করে সুন্দরভাবে error দেখায়।",
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

      {/* Loading */}
      <div className="bg-gray-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">{t.loadingTitle}</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {t.loadingPoints.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="bg-black text-green-400 p-4 rounded-lg mt-4 text-sm">
          app/dashboard/loading.jsx
        </div>
      </div>

      {/* Error */}
      <div className="bg-red-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">{t.errorTitle}</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {t.errorPoints.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="bg-black text-red-400 p-4 rounded-lg mt-4 text-sm">
          app/dashboard/error.jsx
        </div>
      </div>

      {/* Backend */}
      <div className="bg-blue-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">{t.backendTitle}</h2>
        <p className="text-gray-700 leading-relaxed">{t.backendDesc}</p>
      </div>

      {/* Benefits */}
      <div className="bg-white border p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4">{t.benefitsTitle}</h2>
        <div className="grid md:grid-cols-2 gap-5 text-gray-700">
          {t.benefits.map((b, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-lg">
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

export default ErrorAndLoadingHandle;
