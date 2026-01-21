import React, { useState } from "react";

function TokenDecodingvsTokenVerification() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      title: "🔐 Token Decoding vs Token Verification",
      description:
        "In authentication systems, especially with JWTs, it's important to understand the difference between decoding a token and verifying it.",
      decodingTitle: "1. Token Decoding",
      decodingDesc:
        "Decoding a token simply extracts the payload (like user info) without checking its validity or signature.",
      decodingExample: "Example: Using `atob` or JWT decode libraries to read user info.",
      verificationTitle: "2. Token Verification",
      verificationDesc:
        "Verification checks the token's signature and ensures it is valid and not tampered with.",
      verificationExample:
        "Example: Using `jwt.verify(token, secret)` to confirm authenticity.",
      differenceTitle: "Key Difference",
      difference:
        "Decoding = reading data only. Verification = validating integrity & authenticity.",
      interviewQ: "Why should you always verify a token instead of just decoding it?",
      interviewA:
        "Decoding alone does not guarantee that the token is valid or untampered. Verification ensures the token is legitimate and can be trusted.",
    },
    bn: {
      title: "🔐 টোকেন ডিকোডিং বনাম টোকেন ভেরিফিকেশন",
      description:
        "Authentication সিস্টেমে, বিশেষ করে JWT ব্যবহার করলে, বুঝতে হবে টোকেন ডিকোড এবং ভেরিফাই করার মধ্যে পার্থক্য।",
      decodingTitle: "১. টোকেন ডিকোডিং",
      decodingDesc:
        "টোকেন ডিকোডিং কেবল payload (যেমন user info) বের করে, কিন্তু এর validity বা signature যাচাই করে না।",
      decodingExample:
        "উদাহরণ: `atob` বা JWT decode লাইব্রেরি ব্যবহার করে user info দেখা।",
      verificationTitle: "২. টোকেন ভেরিফিকেশন",
      verificationDesc:
        "ভেরিফিকেশন টোকেনের signature যাচাই করে এবং নিশ্চিত করে যে এটি valid এবং tampered হয়নি।",
      verificationExample:
        "উদাহরণ: `jwt.verify(token, secret)` ব্যবহার করে authenticity নিশ্চিত করা।",
      differenceTitle: "মূল পার্থক্য",
      difference: "Decoding = কেবল ডাটা পড়া। Verification = integrity এবং authenticity যাচাই।",
      interviewQ: "কেন শুধু ডিকোড না করে সবসময় টোকেন ভেরিফাই করা উচিত?",
      interviewA:
        "শুধু ডিকোড করলে টোকেনের validity বা নিরাপত্তা নিশ্চিত হয় না। ভেরিফিকেশন নিশ্চিত করে যে টোকেন বৈধ এবং বিশ্বাসযোগ্য।",
    },
  };

  const t = content[lang];

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 space-y-8">
      {/* Language Toggle Buttons */}
      <div className="flex justify-end gap-3 mb-8">
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
            lang === "en" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLang("bn")}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
            lang === "bn" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          বাংলা
        </button>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{t.title}</h1>
        <p className="text-gray-600 leading-relaxed">{t.description}</p>
      </div>

      {/* Token Decoding */}
      <div className="bg-gray-50 p-5 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">{t.decodingTitle}</h2>
        <p className="text-gray-600">{t.decodingDesc}</p>
        <p className="text-sm text-gray-500 mt-1">{t.decodingExample}</p>
      </div>

      {/* Token Verification */}
      <div className="bg-gray-50 p-5 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">{t.verificationTitle}</h2>
        <p className="text-gray-600">{t.verificationDesc}</p>
        <p className="text-sm text-gray-500 mt-1">{t.verificationExample}</p>
      </div>

      {/* Key Difference */}
      <div className="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-500">
        <h2 className="text-xl font-semibold mb-2">{t.differenceTitle}</h2>
        <p className="text-gray-700">{t.difference}</p>
      </div>

      {/* Interview Tip */}
      <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4 rounded">
        <p className="font-medium">💡 Interview Question</p>
        <p className="text-gray-700 text-sm mt-1">Q: {t.interviewQ}</p>
        <p className="text-gray-700 text-sm mt-1">A: {t.interviewA}</p>
      </div>
    </div>
  );
}

export default TokenDecodingvsTokenVerification;
