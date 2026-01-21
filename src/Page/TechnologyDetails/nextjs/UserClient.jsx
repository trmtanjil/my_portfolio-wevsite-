"use client";

import React, { useState } from "react";

function UserClient() {
  const [language, setLanguage] = useState("bn");

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Language Toggle */}
      <div className="flex gap-4">
        <button
          onClick={() => setLanguage("bn")}
          className={`px-4 py-2 rounded ${
            language === "bn" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          বাংলা
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-4 py-2 rounded ${
            language === "en" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          English
        </button>
      </div>

      {/* Content */}
      {language === "bn" ? (
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Next.js এ `use client` কী?</h1>

          <p>
            Next.js (App Router) এ ডিফল্টভাবে সব component <b>Server Component</b>।
            কিন্তু যখন আমাদের component কে browser এ run করাতে হয়,
            তখন আমরা <b>`"use client"`</b> ব্যবহার করি।
          </p>

          <h2 className="text-xl font-semibold">`use client` কেন ব্যবহার করি?</h2>
          <ul className="list-disc pl-6">
            <li>State (`useState`) ব্যবহার করার জন্য</li>
            <li>Effect (`useEffect`) চালানোর জন্য</li>
            <li>Button click, form submit handle করার জন্য</li>
            <li>Modal, dropdown, theme toggle এর জন্য</li>
            <li>Browser API (localStorage, window) ব্যবহারের জন্য</li>
          </ul>

          <h2 className="text-xl font-semibold">কোথায় `use client` ব্যবহার করবো?</h2>
          <ul className="list-disc pl-6">
            <li>Small interactive component এ</li>
            <li>Form, Button, Chart, Animation এ</li>
            <li>পুরো page নয়, শুধু প্রয়োজনীয় অংশে</li>
          </ul>

          <h2 className="text-xl font-semibold">`use client` এর অসুবিধা</h2>
          <ul className="list-disc pl-6">
            <li>JavaScript bundle size বড় হয়</li>
            <li>Page load তুলনামূলক ধীর হতে পারে</li>
            <li>অপ্রয়োজনীয় ব্যবহার করলে performance খারাপ হয়</li>
          </ul>

          <p className="font-semibold">
            👉 Best Practice: যত কম `use client`, তত ভালো performance
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">What is `use client` in Next.js?</h1>

          <p>
            In Next.js App Router, components are Server Components by default.
            When a component needs to run in the browser, we mark it with
            <b> `"use client"`</b>.
          </p>

          <h2 className="text-xl font-semibold">Why do we use `use client`?</h2>
          <ul className="list-disc pl-6">
            <li>To use React state and effects</li>
            <li>To handle user interactions (click, submit)</li>
            <li>To build modals, dropdowns, toggles</li>
            <li>To access browser APIs like localStorage</li>
          </ul>

          <h2 className="text-xl font-semibold">Where should we use it?</h2>
          <ul className="list-disc pl-6">
            <li>Small interactive components</li>
            <li>Forms, buttons, charts, animations</li>
            <li>Not the entire page</li>
          </ul>

          <h2 className="text-xl font-semibold">Disadvantages of `use client`</h2>
          <ul className="list-disc pl-6">
            <li>Increases JavaScript bundle size</li>
            <li>Slower page load if overused</li>
            <li>Less efficient than server components</li>
          </ul>

          <p className="font-semibold">
            👉 Best Practice: Use client components only when necessary
          </p>
        </div>
      )}
    </div>
  );
}

export default UserClient;
