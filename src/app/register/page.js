'use client';

import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = () => {
    if (!username && !email && !password) {
      setMessage("Please fill in all fields.");
    } else if (!username) {
      setMessage("Username is required.");
    } else if (!email) {
      setMessage("Email is required.");
    } else if (!password) {
      setMessage("Password is required.");
    } else {
      setMessage("Registration Successful!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-xl p-6 w-96">
        <div className="bg-yellow-500 text-center text-black text-xl font-bold py-3 rounded-t-xl">
          Register
        </div>
        <div className="p-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-4 border rounded-md bg-white bg-opacity-60 placeholder-gray-700 focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded-md bg-white bg-opacity-60 placeholder-gray-700 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded-md bg-white bg-opacity-60 placeholder-gray-700 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleRegister}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Register
          </button>
          {message && (
            <p className={`mt-4 text-center ${message === "Registration Successful!" ? "text-green-500" : "text-red-500"}`}>
              {message}
            </p>
          )}
          <p className="mt-4 text-sm text-black text-center">
            <Link href="/">Already have an account? Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
