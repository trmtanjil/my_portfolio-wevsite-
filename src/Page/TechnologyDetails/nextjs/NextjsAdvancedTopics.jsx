import React, { useState } from "react";

function NextjsAdvancedTopics() {
  const [lang, setLang] = useState("en"); // Default English

  const content = {
    bn: {
      title: "📝 Next.js Advanced Topics",
      topics: [
        {
          heading: "1. File based routing: App Router vs Page Router",
          description: `Next.js-এ রাউটিং সিস্টেম ফাইল স্ট্রাকচারের ওপর নির্ভর করে।`,
          points: [
            "**Page Router (পুরানো):** pages ফোল্ডারের ভেতর কাজ করে। যেমন: pages/about.js → yourdomain.com/about।",
            "**App Router (নতুন):** app ডিরেক্টরি ব্যবহার করে (Next.js 13+)। এটি React Server Components সাপোর্ট করে এবং flexible।",
          ],
          interviewQ: "App Router এবং Page Router-এর মূল পার্থক্য কী?",
          interviewA: "মূল পার্থক্য হলো App Router সার্ভার কম্পোনেন্ট সাপোর্ট করে এবং লেআউট ম্যানেজমেন্ট সহজ। Page Router-এ _app.js বা _document.js ব্যবহার করতে হতো।",
        },
        {
          heading: "2. Routing Patterns (Parallel, Intercepting, Grouped)",
          description: "এগুলো অ্যাডভান্সড রাউটিং টেকনিক।",
          points: [
            "**Grouped Routes:** ফোল্ডারের নাম ব্র্যাকেটের ভেতর (যেমন (auth)) → URL এ প্রভাব ফেলে না। কোড অর্গানাইজের জন্য।",
            "**Parallel Routes:** একই লেআউটে একাধিক পেজ দেখানো। যেমন ড্যাশবোর্ডে Team এবং Analytics।",
            "**Intercepting Routes:** ইউআরএল ঠিক রেখে অন্য route এর কন্টেন্ট দেখানো। যেমন মডাল ওপেন।",
          ],
          interviewQ: "Parallel Routes কেন ব্যবহার করা হয়?",
          interviewA: "বড় ড্যাশবোর্ডে অনেক ইনডিপেন্ডেন্ট সেকশন আলাদাভাবে লোড বা হ্যান্ডেল করতে।",
        },
        {
          heading: "3. Rendering Techniques (SSR, SSG, ISR, CSR)",
          points: [
            "**SSR:** প্রতিটি request এ সার্ভার থেকে পেজ তৈরি।",
            "**SSG:** Build time এ পেজ তৈরি। ফাস্ট।",
            "**ISR:** নির্দিষ্ট সময় পর স্ট্যাটিক পেজ আপডেট।",
            "**CSR:** ব্রাউজারে JS রান হওয়ার পর কন্টেন্ট দেখায়।",
          ],
          interviewQ: "ISR-এর সুবিধা কী?",
          interviewA: "পুরো সাইট rebuild না করেও স্ট্যাটিক কন্টেন্ট আপডেট করা যায়।",
        },
        {
          heading: "4. Special Files (layout, page, loading, error, 404, 500)",
          points: [
            "**layout.js:** সব পেজের কমন (Navbar, Footer)।",
            "**page.js:** মূল কন্টেন্ট।",
            "**loading.js:** ডেটা লোডের সময় দেখানো।",
            "**error.js:** ভুল হলে বা crash হলে দেখানো।",
          ],
        },
        {
          heading: "5. API Routes",
          points: [
            "app/api/hello/route.js → API endpoint তৈরি করা যায়। Node.js environment এ চলে।",
          ],
        },
        {
          heading: "6. Data Fetching Patterns (Sequential vs Parallel)",
          points: [
            "**Sequential Fetching:** একটার পর একটা request (waterfall)। ধীর।",
            "**Parallel Fetching:** একসাথে অনেক request (Promise.all)। দ্রুত।",
          ],
        },
        {
          heading: "7. Caching",
          points: [
            "ডিফল্টভাবে Next.js ডেটা cache করে। force-cache বা no-store ব্যবহার করে কন্ট্রোল করা যায়।",
          ],
        },
        {
          heading: "8. Optimization (Image, Fonts)",
          points: [
            "**Next/Image:** ইমেজ auto resize ও compress।",
            "**Next/Font:** ফন্ট লোড করে যাতে layout shift না হয়।",
          ],
        },
        {
          heading: "9. Metadata & SEO",
          points: [
            "প্রতিটি পেজের title, description, Open Graph ইমেজ set করা যায় layout.js বা page.js-এ।",
          ],
        },
      ],
    },
    en: {
      title: "📝 Next.js Advanced Topics",
      topics: [
        {
          heading: "1. File based routing: App Router vs Page Router",
          description: "Next.js routing system depends on file structure.",
          points: [
            "**Page Router (old):** Works inside pages folder. pages/about.js → yourdomain.com/about.",
            "**App Router (new):** Uses app directory (Next.js 13+). Supports React Server Components & flexible.",
          ],
          interviewQ: "Difference between App Router and Page Router?",
          interviewA: "App Router supports server components & easier layout management. Page Router uses _app.js or _document.js.",
        },
        {
          heading: "2. Routing Patterns (Parallel, Intercepting, Grouped)",
          description: "These are advanced routing techniques.",
          points: [
            "**Grouped Routes:** Folder name in parentheses (e.g., (auth)) → no effect on URL. Organizes code.",
            "**Parallel Routes:** Show multiple pages in same layout. E.g., Dashboard Team & Analytics.",
            "**Intercepting Routes:** Show other route content while keeping URL. E.g., modal open.",
          ],
          interviewQ: "Why use Parallel Routes?",
          interviewA: "When large dashboard has multiple independent sections to load or handle separately.",
        },
        {
          heading: "3. Rendering Techniques (SSR, SSG, ISR, CSR)",
          points: [
            "**SSR:** Page created on each request from server.",
            "**SSG:** Page created at build time. Fastest.",
            "**ISR:** Update static pages periodically.",
            "**CSR:** Content rendered after JS runs in browser.",
          ],
          interviewQ: "Benefit of ISR?",
          interviewA: "Update static content without rebuilding the entire site.",
        },
        {
          heading: "4. Special Files (layout, page, loading, error, 404, 500)",
          points: [
            "**layout.js:** Common for all pages (Navbar, Footer).",
            "**page.js:** Main content.",
            "**loading.js:** Show while data loads.",
            "**error.js:** Show on error/crash.",
          ],
        },
        {
          heading: "5. API Routes",
          points: ["app/api/hello/route.js → Create API endpoints in Node.js environment."],
        },
        {
          heading: "6. Data Fetching Patterns (Sequential vs Parallel)",
          points: [
            "**Sequential Fetching:** One request after another (waterfall). Slower.",
            "**Parallel Fetching:** Many requests simultaneously (Promise.all). Faster.",
          ],
        },
        {
          heading: "7. Caching",
          points: [
            "Next.js caches data by default. Use force-cache or no-store to control.",
          ],
        },
        {
          heading: "8. Optimization (Image, Fonts)",
          points: [
            "**Next/Image:** Auto resize & compress images.",
            "**Next/Font:** Load fonts without layout shift.",
          ],
        },
        {
          heading: "9. Metadata & SEO",
          points: [
            "Set page title, description, Open Graph images via layout.js or page.js.",
          ],
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">

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
      <h1 className="text-4xl font-bold mb-6">{t.title}</h1>

      {/* Topics */}
      {t.topics.map((topic, idx) => (
        <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold">{topic.heading}</h2>
          {topic.description && <p className="text-gray-700">{topic.description}</p>}
          {topic.points && (
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              {topic.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          )}
          {topic.interviewQ && (
            <div className="mt-2 p-4 bg-white border-l-4 border-blue-500 rounded">
              <p className="font-semibold">💡 Interview Q: {topic.interviewQ}</p>
              <p className="text-gray-700 mt-1">{topic.interviewA}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default NextjsAdvancedTopics;
