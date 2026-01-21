 import React, { useState } from "react";

function AuthWorkflows() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      title: "🔐 Authentication Workflows",
      description:
        "Understand Session-Based vs Token-Based Authentication, their workflows, benefits, and security considerations.",
      sessionTitle: "1. Session-Based Authentication",
      sessionDesc:
        "Traditional method where server maintains sessions and clients get session cookies.",
      sessionWorkflow: [
        "User submits login credentials",
        "Server validates credentials & creates session",
        "Server sends session ID via cookie",
        "Client sends cookie with each request",
        "Server checks session validity before response",
      ],
      tokenTitle: "2. Token-Based Authentication",
      tokenDesc:
        "Modern method for stateless applications. Server issues a signed token (JWT) after login.",
      tokenWorkflow: [
        "User submits login credentials",
        "Server validates and returns JWT",
        "Client stores token (localStorage/sessionStorage)",
        "Client sends token with Authorization header",
        "Server verifies token signature before response",
      ],
      benefitsTitle: "Benefits Comparison",
      benefitsPoints: [
        "Session-Based: Server controls session expiry and revocation",
        "Token-Based: Stateless, scalable, works with SPAs & mobile apps",
        "Both improve security if HTTPS and proper practices are followed",
      ],
      securityTipsTitle: "Security Considerations",
      securityPoints: [
        "Use HTTPS for all requests",
        "Session cookies: HttpOnly, Secure, SameSite",
        "JWT: Verify signature, do not store sensitive info in payload",
        "Regenerate session IDs on login (Session fixation protection)",
      ],
      interviewQ:
        "When would you use session-based auth vs token-based auth?",
      interviewA:
        "Session-based auth is simpler for server-rendered apps and allows easy session revocation. Token-based is better for SPAs, APIs, and mobile apps as it is stateless.",
    },
    bn: {
      title: "🔐 Authentication Workflow",
      description:
        "Session-Based এবং Token-Based Authentication এর workflow, সুবিধা এবং security টিপস বোঝা।",
      sessionTitle: "১. Session-Based Authentication",
      sessionDesc:
        "প্রথাগত পদ্ধতি যেখানে server session maintain করে এবং client receives session cookie।",
      sessionWorkflow: [
        "User login credentials submit করে",
        "Server credentials validate করে এবং session তৈরি করে",
        "Server session ID cookie মাধ্যমে পাঠায়",
        "Client প্রতিটি request এর সাথে cookie পাঠায়",
        "Server session validity check করে response দেয়",
      ],
      tokenTitle: "২. Token-Based Authentication",
      tokenDesc:
        "Stateless applications এর জন্য আধুনিক পদ্ধতি। Server login এর পরে signed token (JWT) দেয়।",
      tokenWorkflow: [
        "User login credentials submit করে",
        "Server validate করে এবং JWT পাঠায়",
        "Client token সংরক্ষণ করে (localStorage/sessionStorage)",
        "Client Authorization header এর সাথে token পাঠায়",
        "Server token signature verify করে response দেয়",
      ],
      benefitsTitle: "সুবিধা তুলনা",
      benefitsPoints: [
        "Session-Based: Server session expiry এবং revocation control করে",
        "Token-Based: Stateless, scalable, SPAs & mobile apps এর সাথে compatible",
        "উভয়ই HTTPS এবং সঠিক practice হলে নিরাপদ",
      ],
      securityTipsTitle: "নিরাপত্তা বিষয়ক টিপস",
      securityPoints: [
        "সব request এ HTTPS ব্যবহার করুন",
        "Session cookies: HttpOnly, Secure, SameSite",
        "JWT: Signature verify করুন, sensitive info payload এ রাখবেন না",
        "Login এর পরে session ID regenerate করুন (Session fixation protection)",
      ],
      interviewQ:
        "কখন session-based auth ব্যবহার করবেন এবং কখন token-based auth?",
      interviewA:
        "Session-based auth server-rendered apps এ সহজ এবং session revoke করা সহজ। Token-based stateless SPA, API, mobile apps এর জন্য উপযুক্ত।",
    },
  };

  const t = content[lang];

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 space-y-8">
      {/* Language Toggle */}
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

      {/* Session-Based */}
      <div className="bg-gray-50 p-5 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">{t.sessionTitle}</h2>
        <p className="text-gray-600 mb-2">{t.sessionDesc}</p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          {t.sessionWorkflow.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        {/* Workflow Diagram */}
        <div className="mt-4 p-4 bg-white rounded shadow text-center text-gray-500">
          🖼 Session Workflow Diagram Placeholder
        </div>
      </div>

      {/* Token-Based */}
      <div className="bg-gray-50 p-5 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">{t.tokenTitle}</h2>
        <p className="text-gray-600 mb-2">{t.tokenDesc}</p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          {t.tokenWorkflow.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        {/* Workflow Diagram */}
        <div className="mt-4 p-4 bg-white rounded shadow text-center text-gray-500">
          🖼 Token Workflow Diagram Placeholder
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
        <h2 className="text-xl font-semibold mb-2">{t.benefitsTitle}</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          {t.benefitsPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Security Tips */}
      <div className="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-500">
        <h2 className="text-xl font-semibold mb-2">{t.securityTipsTitle}</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          {t.securityPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Interview */}
      <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4 rounded">
        <p className="font-medium">💡 Interview Question</p>
        <p className="text-gray-700 text-sm mt-1">Q: {t.interviewQ}</p>
        <p className="text-gray-700 text-sm mt-1">A: {t.interviewA}</p>
      </div>
    </div>
  );
}

export default AuthWorkflows;
