import React, { useState } from "react";

function CookiSendServerCliendandServer() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      title: "🍪 Cookie Management: Client ↔ Server",
      intro:
        "Cookies are small pieces of data used to maintain state between client and server. They play a critical role in session-based authentication.",

      serverTitle: "1. How Server Manages Cookies (Session-Based)",
      serverPoints: [
        "User logs in with credentials.",
        "Server validates credentials.",
        "Server creates a session (sessionId).",
        "Session is stored in memory / database (Redis, MongoDB).",
        "Server sends sessionId to client using Set-Cookie header.",
      ],

      clientTitle: "2. How Client Manages Cookies",
      clientPoints: [
        "Browser automatically stores cookies.",
        "Cookies are attached with every request to the same domain.",
        "JavaScript cannot access HttpOnly cookies.",
        "Browser handles cookie expiration automatically.",
      ],

      flowTitle: "3. Complete Cookie Workflow",
      flowPoints: [
        "Client → Login request",
        "Server → Creates session",
        "Server → Sends Set-Cookie",
        "Client → Stores cookie",
        "Client → Sends cookie with every request",
        "Server → Reads session & responds",
      ],

      securityTitle: "4. Cookie Security Flags",
      securityPoints: [
        "HttpOnly → Prevents XSS attacks",
        "Secure → Cookie sent only over HTTPS",
        "SameSite → Protects against CSRF",
        "Max-Age / Expires → Controls session lifetime",
      ],

      benefitsTitle: "5. Why Session Cookies are Useful",
      benefits: [
        "Server has full control over sessions",
        "Easy to revoke user access",
        "No sensitive data stored on client",
        "Ideal for server-rendered apps",
      ],

      interviewQ: "How does session-based authentication use cookies?",
      interviewA:
        "The server creates a session and sends a session ID via cookie. The browser automatically sends this cookie with every request, allowing the server to identify the user.",
    },

    bn: {
      title: "🍪 Cookie ম্যানেজমেন্ট: Client ↔ Server",
      intro:
        "Cookie হলো ছোট ডাটা যা client এবং server এর মধ্যে state বজায় রাখতে সাহায্য করে। Session-based authentication এ cookie খুব গুরুত্বপূর্ণ।",

      serverTitle: "১. Server কীভাবে Cookie Manage করে (Session-Based)",
      serverPoints: [
        "User login করে credential দিয়ে।",
        "Server credential যাচাই করে।",
        "Server একটি session তৈরি করে (sessionId)।",
        "Session server memory বা database এ রাখা হয়।",
        "Server Set-Cookie header দিয়ে client এ পাঠায়।",
      ],

      clientTitle: "২. Client কীভাবে Cookie Manage করে",
      clientPoints: [
        "Browser নিজে নিজে cookie store করে।",
        "প্রতিটি request এর সাথে cookie পাঠায়।",
        "HttpOnly cookie JavaScript পড়তে পারে না।",
        "Cookie expiry browser নিজে handle করে।",
      ],

      flowTitle: "৩. সম্পূর্ণ Cookie Workflow",
      flowPoints: [
        "Client → Login request পাঠায়",
        "Server → Session তৈরি করে",
        "Server → Set-Cookie পাঠায়",
        "Client → Cookie store করে",
        "Client → প্রতিটি request এ cookie পাঠায়",
        "Server → Session পড়ে response দেয়",
      ],

      securityTitle: "৪. Cookie Security Flags",
      securityPoints: [
        "HttpOnly → XSS attack থেকে সুরক্ষা",
        "Secure → শুধু HTTPS এ পাঠানো হয়",
        "SameSite → CSRF attack রোধ করে",
        "Max-Age / Expires → Session lifetime নিয়ন্ত্রণ",
      ],

      benefitsTitle: "৫. Session Cookie কেন দরকারি",
      benefits: [
        "Server এর হাতে পুরো control থাকে",
        "User সহজে logout করানো যায়",
        "Client এ sensitive data থাকে না",
        "Server-rendered app এর জন্য best",
      ],

      interviewQ: "Session-based authentication এ cookie কীভাবে কাজ করে?",
      interviewA:
        "Server session তৈরি করে এবং cookie এর মাধ্যমে sessionId পাঠায়। Browser প্রতিটি request এ cookie পাঠিয়ে server কে user চিনতে সাহায্য করে।",
    },
  };

  const t = content[lang];

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 space-y-8">
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
        <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
        <p className="text-gray-600">{t.intro}</p>
      </div>

      {/* Server */}
      <div className="bg-gray-50 p-5 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">{t.serverTitle}</h2>
        <ul className="list-disc ml-6 space-y-1">
          {t.serverPoints.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      {/* Client */}
      <div className="bg-gray-50 p-5 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">{t.clientTitle}</h2>
        <ul className="list-disc ml-6 space-y-1">
          {t.clientPoints.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      {/* Flow */}
      <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500">
        <h2 className="text-xl font-semibold mb-2">{t.flowTitle}</h2>
        <ul className="list-disc ml-6 space-y-1">
          {t.flowPoints.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      {/* Security */}
      <div className="bg-yellow-50 p-5 rounded-xl border-l-4 border-yellow-500">
        <h2 className="text-xl font-semibold mb-2">{t.securityTitle}</h2>
        <ul className="list-disc ml-6 space-y-1">
          {t.securityPoints.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
        <h2 className="text-xl font-semibold mb-2">{t.benefitsTitle}</h2>
        <ul className="list-disc ml-6 space-y-1">
          {t.benefits.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      {/* Interview */}
      <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4 rounded">
        <p className="font-medium">🎯 Interview Question</p>
        <p className="text-sm mt-1">Q: {t.interviewQ}</p>
        <p className="text-sm mt-1">A: {t.interviewA}</p>
      </div>
    </div>
  );
}

export default CookiSendServerCliendandServer;
