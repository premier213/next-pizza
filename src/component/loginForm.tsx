"use client";

import { useState } from "react";
import bcrypt from "bcryptjs";

export const Loginform = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const cc = "$2a$12$w/LKrjkOHQZ045V56S5hwO8vcRnziDsOevlyixP8/esDHF5XZBHyy";
  const handleLogin = async () => {
    const compareHash = await bcrypt.compare(password, cc);
    console.log("🎯 #13-src/component/loginForm.tsx", cc);
    console.log("🎯 #14-src/component/loginForm.tsx", password);
    console.log(
      "🚀  file: loginForm.tsx:13  handleLogin  compareHash:",
      compareHash
    );
  };

  return (
    <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
      <div className="px-5 py-7 text-gray-800">
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full placeholder:text-black"
        />
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-gray-700"
        />
        <button
          type="button"
          className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          onClick={handleLogin}
        >
          <span className="inline-block mr-2">Login</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 inline-block"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
