import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { Filter, BarChart2, Smartphone, Compass, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <main className="p-6 max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          className="text-4xl font-bold text-blue-800 text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Selamat Datang di Web Bedil!
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="text-gray-700 text-lg text-center max-w-3xl mx-auto leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Aplikasi ini dibuat untuk membantu siswa dan guru dalam memantau progres proyek tahunan secara efektif dan menyenangkan. Ayo kelola proyekmu sekarang dengan lebih visual dan efisien!
        </motion.p>

        {/* Ilustrasi */}
        <motion.img
          src="https://i0.wp.com/jogjahost.co.id/blog/wp-content/uploads/2021/06/image-53-1024x506.png" // ganti dengan ilustrasi kamu
          alt="Ilustrasi Proyek"
          className="w-full max-w-md mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />

        {/* Fitur */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-md mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[
            { icon: <Filter className="text-blue-600 w-6 h-6" />, title: "Filter Dinamis", desc: "Cari proyek berdasarkan nama, kategori, progres ≥ 90%, atau deadline." },
            { icon: <BarChart2 className="text-green-600 w-6 h-6" />, title: "Visualisasi Progres", desc: "Lihat progres proyek dengan warna dan animasi." },
            { icon: <Smartphone className="text-purple-600 w-6 h-6" />, title: "Tampilan Responsif", desc: "Nyaman digunakan di semua perangkat." },
            { icon: <Compass className="text-orange-600 w-6 h-6" />, title: "Navigasi Mudah", desc: "Pindah halaman proyek & detail dengan cepat." },
            { icon: <Sparkles className="text-pink-500 w-6 h-6" />, title: "Animasi Interaktif", desc: "Framer Motion bikin UI lebih hidup." },
          ].map((fitur, i) => (
            <div key={i} className="flex items-start gap-4">
              <div>{fitur.icon}</div>
              <div>
                <h3 className="font-semibold text-lg text-blue-700">{fitur.title}</h3>
                <p className="text-gray-600 text-sm">{fitur.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call To Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-gray-700 text-lg mb-4">Yuk mulai eksplorasi daftar proyek sekarang!</p>
          <button
            onClick={() => navigate("/achievement")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium inline-flex items-center gap-2 transition"
          >
            Eksplor Sekarang <ArrowRight size={18} />
          </button>
        </motion.div>
      </main>
    </MainLayout>
  );
}