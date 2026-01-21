"use client";

import React, { useState } from "react";

function ImportantCachingbehaviorsanddifferencebetweenSSGISRandSSR() {
  const [lang, setLang] = useState("bn");

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Language Toggle */}
      <div className="flex gap-4">
        <button
          onClick={() => setLang("bn")}
          className={`px-4 py-2 rounded ${
            lang === "bn" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          বাংলা
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2 rounded ${
            lang === "en" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          English
        </button>
      </div>

      {lang === "bn" ? (
        <div className="space-y-5">
          <h1 className="text-2xl font-bold">
            Caching Behavior & SSG vs ISR vs SSR (Important)
          </h1>

          <p>
            Next.js এ <b>caching</b> হলো performance এর backbone।
            Server কখন data আবার fetch করবে আর কখন cache থেকে দেবে —
            এই সিদ্ধান্তের উপর পুরো app এর speed depend করে।
          </p>

          <h2 className="text-xl font-semibold">🧠 Caching কী?</h2>
          <p>
            Caching মানে হলো server একবার data এনে রেখে দেয়,
            যেন পরের request এ আবার database বা API call না করতে হয়।
          </p>

          <h2 className="text-xl font-semibold">✅ SSG (Static Site Generation)</h2>
          <ul className="list-disc pl-6">
            <li>Build time এ page generate হয়</li>
            <li>Data permanently cache থাকে</li>
            <li>Fastest performance</li>
            <li>Blog, marketing page এর জন্য best</li>
          </ul>

          <p className="bg-gray-100 p-3 rounded">
            👉 Data change হলে rebuild দরকার
          </p>

          <h2 className="text-xl font-semibold">
            ✅ ISR (Incremental Static Regeneration)
          </h2>
          <ul className="list-disc pl-6">
            <li>Static page কিন্তু auto update হয়</li>
            <li>`revalidate` time সেট করা যায়</li>
            <li>Old cache দেখায় → background এ নতুন page build হয়</li>
          </ul>

          <p className="bg-gray-100 p-3 rounded">
            👉 Best balance: performance + fresh data
          </p>

          <h2 className="text-xl font-semibold">
            ✅ SSR (Server Side Rendering)
          </h2>
          <ul className="list-disc pl-6">
            <li>প্রতিটা request এ নতুন page render</li>
            <li>Data cache হয় না</li>
            <li>Slow but always fresh</li>
            <li>Dashboard, auth based page এর জন্য দরকার</li>
          </ul>

          <h2 className="text-xl font-semibold">📊 Comparison Summary</h2>
          <ul className="list-disc pl-6">
            <li><b>SSG</b> → Fastest, no update</li>
            <li><b>ISR</b> → Fast + auto update</li>
            <li><b>SSR</b> → Fresh data every time</li>
          </ul>

          <h2 className="text-xl font-semibold">🚀 Real-Life Rule</h2>
          <ul className="list-disc pl-6">
            <li>Homepage → SSG / ISR</li>
            <li>Blog / Product page → ISR</li>
            <li>User dashboard → SSR</li>
          </ul>
        </div>
      ) : (
        <div className="space-y-5">
          <h1 className="text-2xl font-bold">
            Caching Behavior & Difference Between SSG, ISR and SSR
          </h1>

          <p>
            Caching is the backbone of performance in Next.js.
            It controls when data is reused and when it is re-fetched.
          </p>

          <h2 className="text-xl font-semibold">🧠 What is Caching?</h2>
          <p>
            Caching means storing fetched data so the server doesn’t need
            to call the database or API on every request.
          </p>

          <h2 className="text-xl font-semibold">✅ SSG (Static Site Generation)</h2>
          <ul className="list-disc pl-6">
            <li>Pages are generated at build time</li>
            <li>Data is permanently cached</li>
            <li>Extremely fast</li>
            <li>Best for blogs and landing pages</li>
          </ul>

          <h2 className="text-xl font-semibold">
            ✅ ISR (Incremental Static Regeneration)
          </h2>
          <ul className="list-disc pl-6">
            <li>Static pages with timed regeneration</li>
            <li>Uses `revalidate` option</li>
            <li>Old page served while new one builds</li>
          </ul>

          <h2 className="text-xl font-semibold">
            ✅ SSR (Server Side Rendering)
          </h2>
          <ul className="list-disc pl-6">
            <li>Rendered on every request</li>
            <li>No caching by default</li>
            <li>Always fresh data</li>
            <li>Used for dashboards and auth pages</li>
          </ul>

          <h2 className="text-xl font-semibold">📊 Comparison</h2>
          <ul className="list-disc pl-6">
            <li><b>SSG</b> → Fastest, static</li>
            <li><b>ISR</b> → Fast + fresh</li>
            <li><b>SSR</b> → Always real-time</li>
          </ul>

          <h2 className="text-xl font-semibold">🚀 Practical Rule</h2>
          <ul className="list-disc pl-6">
            <li>Homepage → SSG / ISR</li>
            <li>Content pages → ISR</li>
            <li>User-specific pages → SSR</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ImportantCachingbehaviorsanddifferencebetweenSSGISRandSSR;
