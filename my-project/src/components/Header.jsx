import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { User, Info, Award, Home, Menu, X } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/Dashboard", label: "Home",},
    { path: "/About", label: "About",},
    { path: "/Achievement", label: "Achievement",},
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F67280] shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo & Judul */}
        <div
          onClick={() => navigate("/Dashboard")}
          className="flex items-center gap-2 text-2xl font-bold text-[#FFF1DB] cursor-pointer transition hover:scale-105"
        >
          <User className="w-6 h-6" />
          Abduh
        </div>

        {/* Tombol hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#FFF1DB] focus:outline-none "
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navigasi (desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium ">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-1 px-2 py-1 rounded transition 
                ${
                  location.pathname === item.path
                    ? "text-[#FFF1DB] font-semibold border-b-2 border-[#FFF1DB] "
                    : "text-[#FFF1DB] hover:bg-[#FFF1DB]"
                }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}

          {/* Foto Profil */}
          <img
            src="pap.jpg"
            alt="Profil"
            className="w-9 h-9 rounded-full object-cover border-2 border-[#FFF1DB] shadow-sm hover:scale-105 transition"
          />
        </nav>
      </div>

      {/* Navigasi mobile */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setMenuOpen(false);
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded transition w-full text-left 
                  ${
                    location.pathname === item.path
                      ? "text-[#FFF1DB] font-semibold bg-[#FFF1DB]"
                      : "text-[#FFF1DB] hover:bg-[#FFF1DB]"
                  }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}

            {/* Foto Profil */}
            <div className="flex items-center gap-3 mt-2">
              <img
                src="pap.jpg"
                alt="Profil"
                className="w-10 h-10 rounded-full border-2 border-[#FFF1DB] shadow"
              />
              <span className="text-sm text-[#FFF1DB] font-medium">Profil</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
