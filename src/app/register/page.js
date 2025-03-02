import Link from "next/link";

export default function Register() {
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
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded-md bg-white bg-opacity-60 placeholder-gray-700 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded-md bg-white bg-opacity-60 placeholder-gray-700 focus:outline-none"
          />
          <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
            Register
          </button>
          <p className="mt-4 text-sm text-black text-center">
            <Link href="/">Already have an account? Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
