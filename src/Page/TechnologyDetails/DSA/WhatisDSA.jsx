import { useState } from "react";
import { Database, Cpu, CheckCircle2 } from "lucide-react";

function WhatisDSA() {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      title: "Data Structure & Algorithms",
      subTitle: "Specialized Area: Tanjil",

      dsTitle: "Why Data Structures in JavaScript?",
      dsP1:
        "We use data structures to organize and store data efficiently so it can be accessed, modified, and managed easily.",
      dsP2:
        "They allow faster searching, sorting, and inserting. Choosing the right structure makes apps run faster and use memory more effectively — crucial for modern web apps.",

      algoTitle: "What is an Algorithm?",
      algoP1:
        "An algorithm is a set of clear, step-by-step instructions used to solve a problem or complete a task.",
      algoP2:
        "Think of it as a logical way to solve a problem. For example, the steps a program takes to find a specific name in a massive list is an algorithm.",

      quote:
        "It tells the computer what to do and in what order to get the correct result."
    },

    bn: {
      title: "Data Structure & Algorithms",
      subTitle: "বিশেষ দক্ষতা: Tanjil",

      dsTitle: "JavaScript-এ কেন Data Structure ব্যবহার করি?",
      dsP1:
        "আমরা data structure ব্যবহার করি ডেটাকে efficiently organize এবং store করার জন্য, যাতে সহজে access, modify এবং manage করা যায়।",
      dsP2:
        "Data structure দ্রুত searching, sorting এবং inserting করতে সাহায্য করে। সঠিক structure নির্বাচন করলে app দ্রুত কাজ করে এবং memory efficiently ব্যবহার হয় — যা modern web application এর জন্য খুব গুরুত্বপূর্ণ।",

      algoTitle: "Algorithm কী?",
      algoP1:
        "Algorithm হলো clear এবং step-by-step নির্দেশনার একটি সেট, যা কোনো সমস্যা সমাধান বা কোনো কাজ সম্পন্ন করতে ব্যবহার করা হয়।",
      algoP2:
        "এটিকে একটি logical পদ্ধতি হিসেবে ভাবা যায় যা problem solve করে। উদাহরণস্বরূপ, বড় list থেকে নির্দিষ্ট নাম খুঁজে বের করার ধাপগুলোই হলো algorithm।",

      quote:
        "এটি computer-কে বলে দেয় কী করতে হবে এবং কোন order-এ করতে হবে, যাতে সঠিক result পাওয়া যায়।"
    }
  };

  const text = content[language];

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">

      {/* Language Toggle */}
      <div className="flex justify-end gap-3 mb-6">
        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            language === "en"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          English
        </button>

        <button
          onClick={() => setLanguage("bn")}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            language === "bn"
              ? "bg-green-600 text-white"
              : "bg-gray-200"
          }`}
        >
          বাংলা
        </button>
      </div>

      {/* Header */}
      <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-r from-[#4a78a0] to-[#85b1ad] p-8 md:p-12 mb-10 text-white shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {text.title}
        </h1>
        <p className="text-blue-50 font-medium text-lg italic">
          {text.subTitle}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Data Structure Card */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border">
          <Database size={32} className="text-blue-600 mb-4" />

          <h2 className="text-2xl font-bold mb-4">
            {text.dsTitle}
          </h2>

          <p className="mb-3 text-gray-600">{text.dsP1}</p>
          <p className="text-gray-600">{text.dsP2}</p>
        </div>

        {/* Algorithm Card */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border">
          <Cpu size={32} className="text-emerald-600 mb-4" />

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 size={22} />
            {text.algoTitle}
          </h2>

          <p className="mb-3 text-gray-600">{text.algoP1}</p>
          <p className="text-gray-600">{text.algoP2}</p>

          <div className="mt-5 p-4 bg-emerald-50 rounded-xl text-sm italic">
            {text.quote}
          </div>
        </div>

      </div>
    </div>
  );
}

export default WhatisDSA;
