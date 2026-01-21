import React, { useState } from "react";
import { Code2, Database, ArrowLeftRight } from "lucide-react";

function PrismaModelvsSQLqury() {
  const [lang, setLang] = useState("en");

  const data = {
    en: {
      title: "Prisma Model vs SQL Query",
      subtitle:
        "Understanding how Prisma models translate into SQL queries helps developers write cleaner and safer backend code.",

      prismaTitle: "Prisma Model Example",
      prismaDesc:
        "In Prisma, we define database structure using schema models. Prisma automatically converts these models into real database tables.",

      sqlTitle: "Equivalent SQL Table",
      sqlDesc:
        "This is how the same Prisma model would look if written manually in SQL.",

      comparisonTitle: "Why Prisma is Better than Raw SQL",
      points: [
        "No need to manually write complex SQL queries",
        "Automatic type safety and IntelliSense support",
        "Faster development and fewer bugs",
        "Easy schema migration and version control",
        "Readable and maintainable code",
        "Works perfectly with JavaScript and TypeScript",
      ],
    },

    bn: {
      title: "Prisma Model বনাম SQL Query",
      subtitle:
        "Prisma model কিভাবে SQL query তে রূপান্তর হয় তা বুঝলে backend কোড আরও পরিষ্কার এবং নিরাপদ হয়।",

      prismaTitle: "Prisma Model উদাহরণ",
      prismaDesc:
        "Prisma তে আমরা schema model ব্যবহার করে ডাটাবেজের স্ট্রাকচার ডিফাইন করি। Prisma নিজে থেকেই এগুলোকে ডাটাবেজ টেবিলে রূপান্তর করে।",

      sqlTitle: "একই জিনিসের SQL রূপ",
      sqlDesc:
        "এই একই Prisma model যদি আমরা হাতে SQL দিয়ে লিখতাম, তাহলে এমন হতো।",

      comparisonTitle: "কেন Prisma Raw SQL এর চেয়ে ভালো",
      points: [
        "জটিল SQL লেখার প্রয়োজন হয় না",
        "Automatic type safety ও IntelliSense পাওয়া যায়",
        "ডেভেলপমেন্ট দ্রুত হয় এবং বাগ কমে",
        "Schema migration ও version control সহজ",
        "কোড পরিষ্কার ও maintain করা সহজ",
        "JavaScript ও TypeScript এর সাথে পারফেক্ট কাজ করে",
      ],
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <ArrowLeftRight className="text-blue-600" />
            {data[lang].title}
          </h1>
          <p className="text-gray-600 mt-2">{data[lang].subtitle}</p>
        </div>

        {/* Language Toggle */}
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

      {/* Comparison Section */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Prisma Card */}
        <div className="bg-white rounded-xl shadow-lg p-5 space-y-4">
          <h2 className="font-semibold flex items-center gap-2">
            <Code2 size={18} className="text-indigo-600" />
            {data[lang].prismaTitle}
          </h2>
          <p className="text-gray-700 text-sm">
            {data[lang].prismaDesc}
          </p>

          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-auto">
{`model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}`}
          </pre>
        </div>

        {/* SQL Card */}
        <div className="bg-white rounded-xl shadow-lg p-5 space-y-4">
          <h2 className="font-semibold flex items-center gap-2">
            <Database size={18} className="text-orange-600" />
            {data[lang].sqlTitle}
          </h2>
          <p className="text-gray-700 text-sm">
            {data[lang].sqlDesc}
          </p>

          <pre className="bg-gray-900 text-yellow-300 p-4 rounded-lg text-sm overflow-auto">
{`CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE
);`}
          </pre>
        </div>

      </div>

      {/* Why Prisma */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="font-semibold mb-4">
          {data[lang].comparisonTitle}
        </h2>

        <ul className="grid md:grid-cols-2 gap-3">
          {data[lang].points.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-700">
              ✅ {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default PrismaModelvsSQLqury;
