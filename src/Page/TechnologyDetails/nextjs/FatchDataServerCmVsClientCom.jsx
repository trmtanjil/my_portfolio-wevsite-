"use client";

import React, { useState } from "react";

function FatchDataServerCmVsClientCom() {
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
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">
            Next.js এ Data Fetching: Server vs Client Component
          </h1>

          <p>
            Next.js App Router এ ডিফল্টভাবে সব component হলো{" "}
            <b>Server Component</b>।
            তাই data fetching এর প্রধান কাজ server এই করা হয়।
          </p>

          <h2 className="text-xl font-semibold">
            ✅ Server Component এ Data Fetching
          </h2>
          <ul className="list-disc pl-6">
            <li>`fetch()` সরাসরি component এর ভেতর ব্যবহার করা যায়</li>
            <li>ডেটা HTML এর সাথে pre-render হয়</li>
            <li>SEO এবং performance খুব ভালো</li>
            <li>Database, secure API call এর জন্য best</li>
          </ul>

          <p className="bg-gray-100 p-3 rounded">
            👉 Server Component এ <b>axios, useEffect, useState</b> ব্যবহার করা
            যায় না
          </p>

          <h2 className="text-xl font-semibold">
            ✅ Client Component এ Data Fetching
          </h2>
          <ul className="list-disc pl-6">
            <li>User interaction এর পরে data আনতে</li>
            <li>Button click, filter, search এর জন্য</li>
            <li>Browser-only API দরকার হলে</li>
          </ul>

          <h2 className="text-xl font-semibold">Client এ কোনটা কখন?</h2>
          <ul className="list-disc pl-6">
            <li>
              <b>fetch + useEffect</b> → simple use case
            </li>
            <li>
              <b>axios</b> → interceptor, auth token দরকার হলে
            </li>
            <li>
              <b>React Query</b> → caching, refetch, loading, error handling
            </li>
          </ul>

          <h2 className="text-xl font-semibold">🚀 Best Practice</h2>
          <ul className="list-disc pl-6">
            <li>Default: Server Component এ data fetch</li>
            <li>Client Component শুধু UI + interaction এর জন্য</li>
            <li>Client Component কে Server থেকে props পাঠাও</li>
          </ul>
        </div>
      ) : (
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">
            Data Fetching in Next.js: Server vs Client Components
          </h1>

          <p>
            In the App Router, components are Server Components by default.
            Data fetching should primarily happen on the server.
          </p>

          <h2 className="text-xl font-semibold">
            ✅ Data Fetching in Server Components
          </h2>
          <ul className="list-disc pl-6">
            <li>Use native `fetch()` directly</li>
            <li>Data is rendered with HTML</li>
            <li>Excellent SEO and performance</li>
            <li>Ideal for database and secure APIs</li>
          </ul>

          <p className="bg-gray-100 p-3 rounded">
            👉 Server Components cannot use axios, useEffect, or useState
          </p>

          <h2 className="text-xl font-semibold">
            ✅ Data Fetching in Client Components
          </h2>
          <ul className="list-disc pl-6">
            <li>Used after user interactions</li>
            <li>For search, filters, button actions</li>
            <li>When browser APIs are required</li>
          </ul>

          <h2 className="text-xl font-semibold">Which tool when?</h2>
          <ul className="list-disc pl-6">
            <li>
              <b>fetch + useEffect</b> → simple scenarios
            </li>
            <li>
              <b>axios</b> → auth tokens, interceptors
            </li>
            <li>
              <b>React Query</b> → caching, refetching, better UX
            </li>
          </ul>

          <h2 className="text-xl font-semibold">🚀 Best Practice</h2>
          <ul className="list-disc pl-6">
            <li>Fetch data in Server Components by default</li>
            <li>Use Client Components only for interactivity</li>
            <li>Pass server-fetched data as props</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default FatchDataServerCmVsClientCom;
