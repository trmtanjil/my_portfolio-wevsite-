import React, { useState } from "react";

function JwtAlgorithmEncodeDecode() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      title: "🔐 JWT Algorithm, Encode & Decode",
      description:
        "JWT (JSON Web Token) is widely used for authentication and secure data exchange. Understanding JWT structure, encoding, decoding, and algorithms is essential.",
      structureTitle: "1. JWT Structure",
      structureDesc:
        "A JWT consists of three parts separated by dots: Header, Payload, and Signature. Each part is base64 encoded.",
      structureExample: "Example: `header.payload.signature`",
      algorithmTitle: "2. JWT Algorithms",
      algorithmDesc:
        "JWT uses algorithms to sign tokens, ensuring data integrity. Common algorithms include:",
      algorithmList: [
        "HS256 - HMAC with SHA-256",
        "RS256 - RSA signature with SHA-256",
        "ES256 - ECDSA using P-256 and SHA-256",
      ],
      encodeTitle: "3. Encoding JWT",
      encodeDesc:
        "Encoding transforms the header and payload into Base64Url format. The signature is generated using a secret key or private key.",
      decodeTitle: "4. Decoding JWT",
      decodeDesc:
        "Decoding extracts the header and payload to read user info. Decoding does NOT validate the signature.",
      securityTipTitle: "⚠️ Security Tip",
      securityTip:
        "Always verify JWT signatures on the server-side to ensure authenticity. Never trust decoded data alone.",
      interviewQ: "Why is it unsafe to rely only on JWT decoding without verification?",
      interviewA:
        "Decoding only reads data; it does not guarantee the token is untampered. Verification ensures integrity and authenticity.",
    },
    bn: {
      title: "🔐 JWT অ্যালগরিদম, Encode & Decode",
      description:
        "JWT (JSON Web Token) authentication এবং secure data exchange এর জন্য ব্যবহার করা হয়। JWT structure, encoding, decoding এবং algorithm বুঝা গুরুত্বপূর্ণ।",
      structureTitle: "১. JWT Structure",
      structureDesc:
        "একটি JWT তিনটি অংশে বিভক্ত: Header, Payload এবং Signature। প্রতিটি অংশ base64 encode করা হয়।",
      structureExample: "উদাহরণ: `header.payload.signature`",
      algorithmTitle: "২. JWT Algorithms",
      algorithmDesc:
        "JWT signature generate করতে algorithm ব্যবহার করা হয়, যাতে data integrity বজায় থাকে। সাধারণ algorithm:",
      algorithmList: [
        "HS256 - HMAC সাথে SHA-256",
        "RS256 - RSA signature সাথে SHA-256",
        "ES256 - ECDSA P-256 এবং SHA-256 ব্যবহার করে",
      ],
      encodeTitle: "৩. JWT Encode করা",
      encodeDesc:
        "Encoding header ও payload কে Base64Url format এ রূপান্তর করে। Signature secret key বা private key দিয়ে তৈরি হয়।",
      decodeTitle: "৪. JWT Decode করা",
      decodeDesc:
        "Decoding header এবং payload বের করে user info দেখা যায়। Decoding signature validate করে না।",
      securityTipTitle: "⚠️ Security Tip",
      securityTip:
        "সবসময় server-side এ JWT signature verify করুন। শুধু decode করা data বিশ্বাসযোগ্য নয়।",
      interviewQ: "কেন শুধু JWT decode করা নিরাপদ নয়?",
      interviewA:
        "Decoding কেবল ডাটা পড়ে, কিন্তু token পরিবর্তিত হয়েছে কি না তা নিশ্চিত করে না। Verification integrity এবং authenticity নিশ্চিত করে।",
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

      {/* JWT Structure */}
      <div className="bg-gray-50 p-5 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">{t.structureTitle}</h2>
        <p className="text-gray-600">{t.structureDesc}</p>
        <p className="text-sm text-gray-500 mt-1">{t.structureExample}</p>
      </div>

      {/* JWT Algorithms */}
      <div className="bg-gray-50 p-5 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">{t.algorithmTitle}</h2>
        <p className="text-gray-600">{t.algorithmDesc}</p>
        <ul className="list-disc ml-6 text-gray-700 mt-1">
          {t.algorithmList.map((algo, index) => (
            <li key={index}>{algo}</li>
          ))}
        </ul>
      </div>

      {/* Encode JWT */}
      <div className="bg-gray-50 p-5 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">{t.encodeTitle}</h2>
        <p className="text-gray-600">{t.encodeDesc}</p>
      </div>

      {/* Decode JWT */}
      <div className="bg-gray-50 p-5 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">{t.decodeTitle}</h2>
        <p className="text-gray-600">{t.decodeDesc}</p>
      </div>

      {/* Security Tip */}
      <div className="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-500">
        <h2 className="text-lg font-semibold mb-2">{t.securityTipTitle}</h2>
        <p className="text-gray-700">{t.securityTip}</p>
      </div>

      {/* Interview Question */}
      <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4 rounded">
        <p className="font-medium">💡 Interview Question</p>
        <p className="text-gray-700 text-sm mt-1">Q:  {t.interviewQ}</p>
        <p className="text-gray-700 text-sm mt-1">A:  {t.interviewA}</p>
      </div>
    </div>
  );
}

export default JwtAlgorithmEncodeDecode;
