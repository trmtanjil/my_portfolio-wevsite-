import React, { useState } from 'react';
import { Clock, Maximize, Zap } from 'lucide-react';

const BigON = () => {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      title: "Understanding Big O Notation",
      subtitle:
        'How we evaluate whether a function or algorithm is "good" by measuring how it scales with input.',

      sectionTitle: "Measuring Performance",

      timeTitle: "Time Complexity",
      timeDesc: "How many operations/steps a function takes as input grows.",

      spaceTitle: "Space Complexity",
      spaceDesc: "How much extra memory an algorithm uses.",

      longText: (
        <>
          Understanding Big O Notation in Data Structures <br />
          Today I shared a simple idea about Big O Notation and how we evaluate whether a function or algorithm is good or not. <br />
          ✅ We measure performance using: <br />
          Time Complexity <br />
          Space Complexity <br />
          Our main focus is usually Time Complexity, because we want our programs to run faster and handle larger inputs efficiently. In this discussion, we are not focusing on space. <br />
          When we talk about Big O Notation, we are not measuring time in seconds or milliseconds. Instead, we measure how many operations or steps a function takes as the input grows. <br />
          You can think of it like this: <br />
          👉 How many workers (operations) are needed to finish a task when the workload increases? <br />
          The goal is always to reduce time complexity so our applications become faster, more scalable, and more efficient. <br />
          Learning Big O helps us write better code, make smarter design decisions, and build high-performance applications. 💡
        </>
      )
    },

    bn: {
      title: "বিগ-ও নোটেশন কীভাবে বুঝবো",
      subtitle:
        "কোনো ফাংশন বা অ্যালগরিদম ভালো কিনা তা আমরা কীভাবে বুঝি — ইনপুট বাড়লে পারফরম্যান্স কেমন হয় তা পরিমাপ করে।",

      sectionTitle: "পারফরম্যান্স পরিমাপ",

      timeTitle: "টাইম কমপ্লেক্সিটি",
      timeDesc: "ইনপুট বাড়লে একটি ফাংশন কতগুলো অপারেশন বা ধাপ সম্পন্ন করে।",

      spaceTitle: "স্পেস কমপ্লেক্সিটি",
      spaceDesc: "একটি অ্যালগরিদম কত অতিরিক্ত মেমোরি ব্যবহার করে।",

      longText: (
        <>
          ডাটা স্ট্রাকচারে Big O Notation বোঝা <br />
          আজ আমি Big O Notation সম্পর্কে একটি সহজ ধারণা শেয়ার করেছি এবং কীভাবে আমরা বুঝি কোনো ফাংশন বা অ্যালগরিদম ভালো কিনা। <br />
          ✅ আমরা পারফরম্যান্স পরিমাপ করি: <br />
          টাইম কমপ্লেক্সিটি <br />
          স্পেস কমপ্লেক্সিটি <br />
          সাধারণত আমাদের প্রধান ফোকাস থাকে টাইম কমপ্লেক্সিটির উপর, কারণ আমরা চাই আমাদের প্রোগ্রাম দ্রুত কাজ করুক এবং বড় ইনপুট সহজে হ্যান্ডেল করতে পারুক। এখানে আমরা স্পেস নিয়ে আলোচনা করছি না। <br />
          Big O Notation-এ আমরা সেকেন্ড বা মিলিসেকেন্ডে সময় মাপি না। বরং দেখি ইনপুট বাড়লে একটি ফাংশন কতগুলো অপারেশন সম্পন্ন করছে। <br />
          সহজভাবে ভাবলে: <br />
          👉 কাজ বাড়লে কতজন কর্মী (অপারেশন) দরকার হচ্ছে? <br />
          আমাদের লক্ষ্য হলো টাইম কমপ্লেক্সিটি কমানো, যাতে অ্যাপ আরও দ্রুত, স্কেলেবল এবং কার্যকর হয়। <br />
          Big O শিখলে আমরা ভালো কোড লিখতে পারি, স্মার্ট সিদ্ধান্ত নিতে পারি এবং হাই পারফরম্যান্স অ্যাপ তৈরি করতে পারি। 💡
        </>
      )
    }
  };

  const text = content[language];

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 bg-gray-50 min-h-screen font-sans">

      {/* Language Toggle */}
      <div className="flex justify-end gap-3 mb-6">
        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
            language === "en"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          English
        </button>

        <button
          onClick={() => setLanguage("bn")}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
            language === "bn"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          বাংলা
        </button>
      </div>

      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          {text.title}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {text.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left Side */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Zap className="mr-3 text-orange-400" />
              {text.sectionTitle}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="flex items-center text-blue-700 font-bold mb-1">
                  <Clock size={18} className="mr-2" />
                  {text.timeTitle}
                </div>
                <p className="text-sm text-blue-600/80">
                  {text.timeDesc}
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 opacity-60">
                <div className="flex items-center text-gray-700 font-bold mb-1">
                  <Maximize size={18} className="mr-2" />
                  {text.spaceTitle}
                </div>
                <p className="text-sm text-gray-500">
                  {text.spaceDesc}
                </p>
              </div>
            </div>

            {/* Long Text */}
            <div className="prose prose-slate text-gray-600 space-y-4">
              {text.longText}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-5 bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 sticky top-24">
          <h3 className="text-xl font-bold text-gray-800">
            Complexity Chart
          </h3>

          <img src="/dsa/bigonimage.png" />

          <p className="mt-12 text-center text-xs text-gray-400 font-semibold uppercase tracking-tighter">
            Digital recreation of Tanjil's Study Diary
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigON;
