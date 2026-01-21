import React, { useState } from "react";
import { Database, ArrowRightCircle, Layers, Globe } from "lucide-react";

function WatIsprisma() {
  const [lang, setLang] = useState("en");

  const data = {
    en: {
      title: "What is Prisma ORM?",
      intro:
        "Prisma is a modern ORM that acts as a database translator. It allows developers to interact with databases using JavaScript or TypeScript instead of writing complex SQL queries.",

      whyTitle: "Why Developers Use Prisma",
      points: [
        "Clean and readable database queries",
        "Strong type safety and auto-completion",
        "Easy schema modeling and migrations",
        "Supports MySQL, PostgreSQL, MongoDB and more",
        "High performance and scalability",
        "Boosts productivity for full-stack developers",
      ],

      benefitTitle: "Key Benefits of Using Prisma",
      benefits: [
        "Faster backend development workflow",
        "Auto-generated and type-safe database client",
        "Prevents common runtime errors",
        "Easy integration with Express, Next.js and APIs",
        "Scales well for production systems",
        "Excellent developer experience (DX)",
      ],

      supportTitle: "Where Prisma is Supported",
      supports: [
        "Databases: MySQL, PostgreSQL, MongoDB, SQLite, SQL Server",
        "Backend: Node.js, Bun, Deno",
        "Frameworks: Next.js, Express, NestJS, Fastify",
        "Languages: JavaScript, TypeScript",
        "Cloud: Vercel, Railway, Render, AWS",
      ],

      future:
        "As I continue learning Prisma, I will keep adding practical examples, real-world use cases, and performance optimizations here.",
    },

    bn: {
      title: "Prisma ORM কী?",
      intro:
        "Prisma হলো একটি আধুনিক ORM যা একটি Database Translator হিসেবে কাজ করে। এটি আমাদের JavaScript বা TypeScript ব্যবহার করে ডাটাবেজের সাথে সহজে কাজ করতে সাহায্য করে — SQL লেখার প্রয়োজন হয় না। ",

      whyTitle: "কেন ডেভেলপাররা Prisma ব্যবহার করে",
      points: [
        "ডাটাবেজ কুয়েরি পরিষ্কার ও সহজ হয়",
        "Type safety থাকার কারণে বাগ কম হয়",
        "Schema ও Migration ম্যানেজমেন্ট সহজ",
        "MySQL, PostgreSQL, MongoDB সহ বহু ডাটাবেজ সাপোর্ট করে",
        "উচ্চ পারফরম্যান্স ও স্কেলেবিলিটি",
        "Full-stack ডেভেলপারদের কাজ দ্রুত করে",
      ],

      benefitTitle: "Prisma ব্যবহার করার সুবিধা",
      benefits: [
        "Backend ডেভেলপমেন্ট দ্রুত হয়",
        "Auto-generated এবং type-safe client পাওয়া যায়",
        "Runtime error অনেক কমে যায়",
        "Express, Next.js এর সাথে সহজে কাজ করে",
        "Production-ready স্কেলিং সুবিধা",
        "Developer experience অনেক ভালো",
      ],

      supportTitle: "Prisma কোথায় কোথায় সাপোর্ট করে",
      supports: [
        "ডাটাবেজ: MySQL, PostgreSQL, MongoDB, SQLite, SQL Server",
        "Backend: Node.js, Bun, Deno",
        "Framework: Next.js, Express, NestJS, Fastify",
        "ভাষা: JavaScript, TypeScript",
        "ক্লাউড: Vercel, Railway, Render, AWS",
      ],

      future:
        "আমি Prisma আরও শিখতে থাকলে বাস্তব উদাহরণ, প্রজেক্ট এক্সপেরিয়েন্স এবং অপটিমাইজেশন এখানে যুক্ত করবো।",
    },
  };

  const renderList = (items) => (
    <ul className="grid md:grid-cols-2 gap-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2 text-gray-700">
          <ArrowRightCircle size={18} className="text-blue-500" />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Database className="text-blue-600" />
          <h1 className="text-2xl font-bold">{data[lang].title}</h1>
        </div>

        {/* Language Buttons */}
        <div className="flex gap-2">
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
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-10">
        
        {/* Intro */}
        <p className="text-gray-700 leading-relaxed">
          {data[lang].intro}
        </p>

        {/* Why Prisma */}
        <section>
          <h2 className="font-semibold mb-3 flex items-center gap-2">
            <Layers size={18} /> {data[lang].whyTitle}
          </h2>
          {renderList(data[lang].points)}
        </section>

        {/* Benefits */}
        <section>
          <h2 className="font-semibold mb-3 flex items-center gap-2">
            <Database size={18} /> {data[lang].benefitTitle}
          </h2>
          {renderList(data[lang].benefits)}
        </section>

        {/* Supports */}
        <section>
          <h2 className="font-semibold mb-3 flex items-center gap-2">
            <Globe size={18} /> {data[lang].supportTitle}
          </h2>
          {renderList(data[lang].supports)}
        </section>

        {/* Future Note */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-xl border">
          <p className="text-sm text-gray-700">
            🚀 {data[lang].future}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WatIsprisma;
