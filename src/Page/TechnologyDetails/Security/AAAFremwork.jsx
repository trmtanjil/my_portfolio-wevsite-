import React, { useState } from "react";

function AAAFremwork() {
  const [lang, setLang] = useState("en");

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10">
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

      {/* Content */}
      {lang === "en" ? (
        <div className="space-y-8">
          {/* AAA Intro */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              🔐 AAA Security Framework
            </h1>
            <p className="text-gray-600 leading-relaxed">
              AAA stands for{" "}
              <strong>Authentication, Authorization, and Accounting</strong>.
              It is a core security framework used to control who can access a
              system, what actions they can perform, and how their activities
              are tracked.
            </p>
          </div>

          {/* Authentication */}
          <div className="bg-gray-50 p-5 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              1. Authentication (Who are you?)
            </h2>
            <p className="text-gray-600">
              Verifies the identity of a user before granting system access.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Example: Email & Password, OTP, JWT Token, OAuth login
            </p>
          </div>

          {/* Authorization */}
          <div className="bg-gray-50 p-5 rounded-xl space-y-3">
            <h2 className="text-xl font-semibold mb-2">
              2. Authorization (What can you do?)
            </h2>
            <p className="text-gray-600">
              Determines what authenticated users are allowed to do. There are
              two main models:
            </p>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-1">RBAC (Role-Based Access Control)</h3>
              <p className="text-gray-600 text-sm">
                Users are assigned roles (e.g., Admin, Moderator, User) and
                each role has specific permissions.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Example: Admin can delete users, User can only view content.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-1">ABAC (Attribute-Based Access Control)</h3>
              <p className="text-gray-600 text-sm">
                Permissions are granted based on user attributes, resource attributes,
                and environment conditions.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Example: User can edit a document only if they are the owner
                and it is within working hours.
              </p>
            </div>
          </div>

          {/* Accounting */}
          <div className="bg-gray-50 p-5 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              3. Accounting (What did you do?)
            </h2>
            <p className="text-gray-600">
              Tracks user activities for auditing, monitoring, and security analysis.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Examples: Login time, payments, orders, logs
            </p>
          </div>

          {/* Interview Tip */}
          <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4 rounded">
            <p className="font-medium">💡 Interview Tip:</p>
            <p className="text-gray-700 text-sm mt-1">
              AAA ensures secure access, proper permission management, and activity tracking.
              RBAC & ABAC are commonly used authorization models in modern applications.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* AAA Intro */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              🔐 AAA সিকিউরিটি ফ্রেমওয়ার্ক
            </h1>
            <p className="text-gray-600 leading-relaxed">
              AAA মানে হলো{" "}
              <strong>Authentication, Authorization এবং Accounting</strong>।
              এটি একটি সিকিউরিটি ফ্রেমওয়ার্ক যা নির্ধারণ করে কে সিস্টেমে ঢুকতে
              পারবে, কী করতে পারবে এবং কী কাজ করেছে তার হিসাব রাখে।
            </p>
          </div>

          {/* Authentication */}
          <div className="bg-gray-50 p-5 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              ১. Authentication (আপনি কে?)
            </h2>
            <p className="text-gray-600">
              Authentication এর মাধ্যমে ইউজারের পরিচয় যাচাই করা হয়।
            </p>
            <p className="text-sm text-gray-500 mt-1">
              উদাহরণ: ইমেইল-পাসওয়ার্ড, OTP, JWT টোকেন, OAuth লগইন
            </p>
          </div>

          {/* Authorization */}
          <div className="bg-gray-50 p-5 rounded-xl space-y-3">
            <h2 className="text-xl font-semibold mb-2">
              ২. Authorization (আপনি কী করতে পারবেন?)
            </h2>
            <p className="text-gray-600">
              নির্ধারণ করে authenticated ইউজার কোন কাজ করতে পারবে। মূল দুটি মডেল:
            </p>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-1">RBAC (Role-Based Access Control)</h3>
              <p className="text-gray-600 text-sm">
                ইউজারদের roles দেওয়া হয় (যেমন: Admin, Moderator, User) এবং প্রতিটি role
                এর নির্দিষ্ট permission থাকে।
              </p>
              <p className="text-gray-500 text-xs mt-1">
                উদাহরণ: Admin ইউজার ডিলিট করতে পারে, সাধারণ ইউজার শুধু দেখতেই পারে।
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-1">ABAC (Attribute-Based Access Control)</h3>
              <p className="text-gray-600 text-sm">
                Permissions নির্ভর করে user attributes, resource attributes এবং environment উপর।
              </p>
              <p className="text-gray-500 text-xs mt-1">
                উদাহরণ: User কেবল তখন ডকুমেন্ট edit করতে পারবে যদি সে owner হয় এবং working hours এর মধ্যে হয়।
              </p>
            </div>
          </div>

          {/* Accounting */}
          <div className="bg-gray-50 p-5 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              ৩. Accounting (আপনি কী করেছেন?)
            </h2>
            <p className="text-gray-600">
              ইউজারের সব কার্যকলাপ রেকর্ড করা হয় auditing, monitoring এবং security analysis এর জন্য।
            </p>
            <p className="text-sm text-gray-500 mt-1">
              উদাহরণ: লগইন টাইম, পেমেন্ট হিস্ট্রি, অর্ডার লগ
            </p>
          </div>

          {/* Interview Tip */}
          <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4 rounded">
            <p className="font-medium">💡 Interview Tip:</p>
            <p className="text-gray-700 text-sm mt-1">
              AAA framework নিরাপদ access, permission management এবং activity tracking নিশ্চিত করে।
              RBAC ও ABAC আধুনিক authorization মডেলে সাধারণভাবে ব্যবহৃত হয়।
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AAAFremwork;
