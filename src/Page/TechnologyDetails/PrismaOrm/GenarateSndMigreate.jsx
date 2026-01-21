import React, { useState } from "react";
import { Terminal, Layers, RefreshCw, Rocket } from "lucide-react";

function GenarateSndMigreate() {
  const [lang, setLang] = useState("en");

  const data = {
    en: {
      title: "Prisma Generate & Migrate",
      subtitle:
        "Generate and Migrate are core Prisma workflows used to create database structure and sync it with your application.",

      generateTitle: "What is Prisma Generate?",
      generateDesc:
        "Prisma Generate creates a type-safe Prisma Client based on your schema. This client allows your application to interact with the database using JavaScript or TypeScript methods.",

      generateSteps: [
        "Read schema.prisma file",
        "Generate Prisma Client automatically",
        "Enable auto-completion and type safety",
        "Prepare app for database operations",
      ],

      migrateTitle: "What is Prisma Migrate?",
      migrateDesc:
        "Prisma Migrate updates your real database based on schema changes. It creates tables, columns, relations, and keeps version history of database structure.",

      migrateSteps: [
        "Compare schema changes",
        "Create migration files",
        "Apply changes to database",
        "Keep schema version history",
      ],

      commandsTitle: "Common Commands",
      commands: [
        "npx prisma generate",
        "npx prisma migrate dev --name init",
        "npx prisma migrate reset",
        "npx prisma studio",
      ],

      flowTitle: "How Generate & Migrate Work Together",
      flow:
        "First you design your Prisma schema, then run migrate to update the database. After that, Prisma generate creates a client so your app can safely access the database.",

    },

    bn: {
      title: "Prisma Generate ও Migrate",
      subtitle:
        "Generate এবং Migrate হলো Prisma এর গুরুত্বপূর্ণ workflow যা ডাটাবেজ স্ট্রাকচার তৈরি ও অ্যাপের সাথে sync করে।",

      generateTitle: "Prisma Generate কী?",
      generateDesc:
        "Prisma Generate আপনার schema থেকে একটি type-safe Prisma Client তৈরি করে। এই client ব্যবহার করে আপনার অ্যাপ JavaScript বা TypeScript দিয়ে ডাটাবেজে কাজ করতে পারে।",

      generateSteps: [
        "schema.prisma ফাইল পড়া",
        "অটোমেটিক Prisma Client তৈরি করা",
        "Auto-complete ও type safety পাওয়া",
        "ডাটাবেজ অপারেশনের জন্য অ্যাপ প্রস্তুত করা",
      ],

      migrateTitle: "Prisma Migrate কী?",
      migrateDesc:
        "Prisma Migrate আপনার schema অনুযায়ী আসল ডাটাবেজ আপডেট করে। এটি টেবিল, কলাম, রিলেশন তৈরি করে এবং ডাটাবেজের version history ধরে রাখে।",

      migrateSteps: [
        "Schema পরিবর্তন detect করা",
        "Migration ফাইল তৈরি করা",
        "ডাটাবেজে পরিবর্তন প্রয়োগ করা",
        "ডাটাবেজ version history সংরক্ষণ",
      ],

      commandsTitle: "প্রয়োজনীয় কমান্ড",
      commands: [
        "npx prisma generate",
        "npx prisma migrate dev --name init",
        "npx prisma migrate reset",
        "npx prisma studio",
      ],

      flowTitle: "Generate ও Migrate কিভাবে একসাথে কাজ করে",
      flow:
        "প্রথমে schema ডিজাইন করা হয়, তারপর migrate চালিয়ে ডাটাবেজ আপডেট করা হয়। এরপর generate চালিয়ে Prisma Client তৈরি করা হয় যাতে অ্যাপ নিরাপদভাবে ডাটাবেজ ব্যবহার করতে পারে।",
    },
  };

  const renderList = (items) => (
    <ul className="grid md:grid-cols-2 gap-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2 text-gray-700">
          ✅ {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Rocket className="text-blue-600" />
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

      {/* Generate Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
        <h2 className="font-semibold flex items-center gap-2">
          <Terminal size={18} /> {data[lang].generateTitle}
        </h2>
        <p className="text-gray-700">{data[lang].generateDesc}</p>
        {renderList(data[lang].generateSteps)}
      </div>

      {/* Migrate Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
        <h2 className="font-semibold flex items-center gap-2">
          <RefreshCw size={18} /> {data[lang].migrateTitle}
        </h2>
        <p className="text-gray-700">{data[lang].migrateDesc}</p>
        {renderList(data[lang].migrateSteps)}
      </div>

      {/* Commands */}
      <div className="bg-gray-900 rounded-xl p-5 text-green-400 text-sm space-y-2">
        <h3 className="text-white font-semibold mb-2">
          {data[lang].commandsTitle}
        </h3>
        {data[lang].commands.map((cmd, index) => (
          <p key={index}>$ {cmd}</p>
        ))}
      </div>

      {/* Flow */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-5 rounded-xl border">
        <h3 className="font-semibold mb-2">
          {data[lang].flowTitle}
        </h3>
        <p className="text-gray-700 text-sm">{data[lang].flow}</p>
      </div>

    </div>
  );
}

export default GenarateSndMigreate;
