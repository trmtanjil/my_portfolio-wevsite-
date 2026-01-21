import React, { useState } from "react";

function UnderstandingFileBasedRouting() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      title: "📂 Understanding File-Based Routing in Next.js",
      description:
        "File-based routing is a core feature of Next.js where URLs are automatically generated from the folder structure. There is no need to use React Router or manually configure routes.",

      howTitle: "⚙️ How It Works",
      howPoints: [
        "Each folder inside the app directory represents a route.",
        "Each route folder must contain a page.jsx or page.tsx file.",
        "The folder name defines the URL path.",
        "Nested folders create nested routes.",
      ],

      example:
        "app/about/page.jsx → yoursite.com/about\napp/dashboard/profile/page.jsx → yoursite.com/dashboard/profile",

      whyTitle: "🚫 Why No React Router Is Needed?",
      whyPoints: [
        "Next.js manages routing internally.",
        "No manual route mapping is required.",
        "Less configuration and boilerplate.",
        "Cleaner project structure.",
      ],

      benefitsTitle: "✅ Benefits",
      benefits: [
        { title: "Fast Development", text: "No extra routing configuration needed." },
        { title: "Scalable Structure", text: "Easy to maintain in large projects." },
        { title: "SEO Friendly", text: "Supports server-side rendering by default." },
        { title: "Clean Architecture", text: "Routes are visible directly from folders." },
      ],

      interviewQ: "Why does Next.js not require React Router?",
      interviewA:
        "Because Next.js automatically generates routes from the file system, eliminating manual configuration and improving scalability.",
    },

    bn: {
      title: "📂 Next.js এ File-Based Routing বোঝা",
      description:
        "File-based routing হলো Next.js এর একটি core feature যেখানে ফোল্ডার স্ট্রাকচার অনুযায়ী অটোমেটিকভাবে URL তৈরি হয়। আলাদা করে React Router বা manual route configuration করার প্রয়োজন হয় না।",

      howTitle: "⚙️ কীভাবে কাজ করে?",
      howPoints: [
        "app ফোল্ডারের প্রতিটি ফোল্ডার একটি route নির্দেশ করে।",
        "প্রতিটি route ফোল্ডারের ভেতরে page.jsx বা page.tsx থাকতে হয়।",
        "ফোল্ডারের নাম অনুযায়ী URL তৈরি হয়।",
        "Nested folder মানেই nested route।",
      ],

      example:
        "app/about/page.jsx → yoursite.com/about\napp/dashboard/profile/page.jsx → yoursite.com/dashboard/profile",

      whyTitle: "🚫 কেন React Router দরকার হয় না?",
      whyPoints: [
        "Next.js নিজেই routing system manage করে।",
        "Manual route mapping দরকার হয় না।",
        "Configuration কমে যায়।",
        "Project structure পরিষ্কার থাকে।",
      ],

      benefitsTitle: "✅ সুবিধাসমূহ",
      benefits: [
        { title: "Fast Development", text: "আলাদা routing setup লাগে না।" },
        { title: "Scalable Structure", text: "বড় প্রোজেক্টেও সহজে maintain করা যায়।" },
        { title: "SEO Friendly", text: "Server-side rendering সাপোর্ট করে।" },
        { title: "Clean Architecture", text: "ফোল্ডার দেখেই route বোঝা যায়।" },
      ],

      interviewQ: "Next.js এ কেন React Router দরকার হয় না?",
      interviewA:
        "কারণ Next.js ফাইল সিস্টেম থেকে অটোমেটিক route তৈরি করে, ফলে manual configuration লাগে না এবং প্রোজেক্ট স্কেল করা সহজ হয়।",
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

      {/* How it Works */}
      <div className="bg-gray-50 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-3">{t.howTitle}</h2>

        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {t.howPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <div className="bg-black text-green-400 p-4 rounded-lg mt-4 text-sm whitespace-pre-line">
          {t.example}
        </div>
      </div>

      {/* Why No Router */}
      <div className="bg-blue-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">{t.whyTitle}</h2>

        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {t.whyPoints.map((item, index) => (
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

export default UnderstandingFileBasedRouting;
