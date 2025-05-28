import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { Mail, User, BookOpen, School, Sparkles, Heart } from "lucide-react";

export default function About() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
        <motion.h1
          className="text-4xl font-bold text-blue-700 mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>

        <motion.div
          className="bg-white p-6 rounded-xl shadow-md text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img
            src="gambar.jpg"
            alt="Foto Profil"
            className="w-32 h-32 rounded-full mx-auto mb-4 shadow border-4 border-white object-cover"
          />
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Personal</h2>
          <ul className="space-y-2 text-left max-w-md mx-auto">
            <li className="flex items-center gap-2"><User size={18} /> <strong>Nama:</strong> Abdillah Arrafif</li>
            <li className="flex items-center gap-2"><Heart size={18} /> <strong>Hobi:</strong> Membaca</li>
            <li className="flex items-center gap-2"><BookOpen size={18} /> <strong>Kelas:</strong> 11</li>
            <li className="flex items-center gap-2"><School size={18} /> <strong>Sekolah:</strong> Abudzar</li>
            <li className="flex items-center gap-2"><Mail size={18} /> <strong>Email:</strong> arrafif0722@student.abudzar.sch.id</li>
          </ul>
        </motion.div>

        <motion.p
          className="text-lg leading-relaxed text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Aplikasi ini dibuat sebagai bagian dari proyek tugas akhir Rekayasa Perangkat Lunak. Tujuannya adalah membantu pelajar dan pendidik mengelola proyek tahunan secara efisien dan interaktif.
        </motion.p>

        <motion.div
          className="bg-white p-6 rounded-xl shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Teknologi yang Digunakan:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>React.js</li>
            <li>React Router</li>
            <li>Framer Motion</li>
            <li>Tailwind CSS</li>
            <li>Lucide Icons</li>
          </ul>
        </motion.div>
      </div>
    </MainLayout>
  );
}