import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-14 flex items-center justify-between px-6 border-b bg-white">
      {/* Logo / Brand */}
      <Link
        to="/"
        className="text-xl font-semibold text-blue-600 hover:opacity-90 transition"
      >
        MediMind
      </Link>

      <span className="text-sm text-gray-500 hidden sm:block">
        Medical Information Assistant
      </span>
    </nav>
  );
}

  
  