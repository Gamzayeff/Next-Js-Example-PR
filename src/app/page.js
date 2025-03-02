import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-green-500">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-xl p-6 w-96">
        <div className="bg-yellow-500 text-center text-black text-xl font-bold py-3 rounded-t-xl">
          Sign In
        </div>
        <div className="p-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-4 border rounded-md bg-white bg-opacity-60 placeholder-gray-700 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded-md bg-white bg-opacity-60 placeholder-gray-700 focus:outline-none"
          />
          <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
            Sign In
          </button>
          <p className="mt-4 text-sm text-black text-center">
            <Link href="/register">Not Yet Registered?</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
