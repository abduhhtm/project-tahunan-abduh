import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const dummyDetails = {
  1: {
    description:
      "Program pelatihan mingguan untuk meningkatkan kemampuan dasar dan lanjutan dalam bela diri.",
    image: "https://images.unsplash.com/photo-1514050566906-8d077bae7046?q=80&w=3873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeline: [...Array(12)].map((_, i) => ({
      month: new Date(0, i).toLocaleString("id-ID", { month: "long" }),
      status: i < 4 ? "Selesai" : i === 4 ? "Sedang Berlangsung" : "Belum Dimulai",
    })),
    notes: [
      "Latihan intensif menjelang ujian sabuk.",
      "Peserta menunjukkan peningkatan signifikan.",
    ],
  },
  2: {
    description:
      "Proyek kelompok mata pelajaran IT mengenai pembuatan aplikasi web sederhana.",
    src: "",
    timeline: [...Array(12)].map((_, i) => ({
      month: new Date(0, i).toLocaleString("id-ID", { month: "long" }),
      status: i < 4 ? "Selesai" : i < 5 ? "Sedang Berlangsung" : "Belum Dimulai",
    })),
    notes: [
      "Beberapa siswa sudah berhasil membuat prototipe.",
      "Presentasi akhir direncanakan pada bulan Desember.",
    ],
  },
  3: {
    description:
      "Pelatihan panahan untuk meningkatkan fokus dan ketepatan anggota ekstrakurikuler.",
    image: "https://source.unsplash.com/400x300/?archery",
    timeline: [...Array(12)].map((_, i) => ({
      month: new Date(0, i).toLocaleString("id-ID", { month: "long" }),
      status: i < 4 ? "Selesai" : i === 4 ? "Sedang Berlangsung" : "Belum Dimulai",
    })),
    notes: [
      "Target latihan diperluas dengan teknik baru.",
      "Latihan intensif menjelang kompetisi sekolah.",
    ],
  },
  4: {
    description:
      "Pembelajaran Bahasa Arab fokus pada kemampuan berbicara dan pemahaman teks klasik.",
    image: "https://images.unsplash.com/photo-1621788143296-7991fdde4161?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeline: [...Array(12)].map((_, i) => ({
      month: new Date(0, i).toLocaleString("id-ID", { month: "long" }),
      status: i < 4 ? "Selesai" : i === 4 ? "Sedang Berlangsung" : "Belum Dimulai",
    })),
    notes: [
      "Kegiatan membaca teks pendek dan percakapan harian.",
      "Siswa sudah mulai mampu memahami teks sederhana.",
    ],
  },
  5: {
    description:
      "Pelajaran tajwid difokuskan pada penguasaan makharijul huruf dan hukum-hukum tajwid.",
    image: "https://images.unsplash.com/photo-1671609888498-c22bf328037b?q=80&w=3946&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeline: [...Array(12)].map((_, i) => ({
      month: new Date(0, i).toLocaleString("id-ID", { month: "long" }),
      status: i < 4 ? "Selesai" : i < 5 ? "Sedang Berlangsung" : "Belum Dimulai",
    })),
    notes: [
      "Latihan langsung pelafalan dengan bimbingan guru.",
      "Siswa diuji dengan bacaan Al-Qur’an setiap pekan.",
    ],
  },
  6: {
    description:
      "Program tahfidz menargetkan hafalan 30 juz bagi siswa kelas 7 8 9 dan 10.",
    image: "https://images.unsplash.com/photo-1624862762217-e282e40a51ec?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timeline: [...Array(12)].map((_, i) => ({
      month: new Date(0, i).toLocaleString("id-ID", { month: "long" }),
      status: i < 4 ? "Selesai" : i === 4 ? "Sedang Berlangsung" : "Belum Dimulai",
    })),
    notes: [
      "Setoran hafalan dilakukan dua kali seminggu.",
      "Sebagian siswa telah hafal lebih dari 5 surat.",
    ],
  },
  7: {
    description:
      "Ekstrakurikuler berenang bertujuan meningkatkan teknik dasar dan keselamatan di air.",
    image: "https://source.unsplash.com/400x300/?swimming",
    timeline: [...Array(12)].map((_, i) => ({
      month: new Date(0, i).toLocaleString("id-ID", { month: "long" }),
      status: i < 4 ? "Selesai" : i === 4 ? "Sedang Berlangsung" : "Belum Dimulai",
    })),
    notes: [
      "Materi renang gaya bebas dan dada sudah dikuasai.",
      "Evaluasi teknik dilakukan tiap akhir bulan.",
    ],
  },
  8: {
    description:
      "Pembelajaran Bahasa Inggris dengan fokus pada speaking, listening, dan vocabulary.",
    image: "https://source.unsplash.com/400x300/?english,language",
    timeline: [...Array(12)].map((_, i) => ({
      month: new Date(0, i).toLocaleString("id-ID", { month: "long" }),
      status: i < 4 ? "Selesai" : i < 5 ? "Sedang Berlangsung" : "Belum Dimulai",
    })),
    notes: [
      "Siswa aktif dalam percakapan kelompok dan roleplay.",
      "Peningkatan kosa kata melalui permainan edukatif.",
    ],
  },
  9: {
    description:
      "Pembelajaran Bahasa Jawa yang menekankan pada aksara Jawa, unggah-ungguh, dan budaya lokal.",
    image: "https://source.unsplash.com/400x300/?java,indonesia,culture",
    timeline: [...Array(12)].map((_, i) => ({
      month: new Date(0, i).toLocaleString("id-ID", { month: "long" }),
      status: i < 4 ? "Selesai" : i < 5 ? "Sedang Berlangsung" : "Belum Dimulai",
    })),
    notes: [
      "Siswa mulai mengenali dan menulis aksara Jawa dasar.",
      "Diskusi budaya Jawa dilakukan melalui tembang dan cerita rakyat.",
    ],
  },
};


export default function DetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const detail = dummyDetails[id];
  const navigate = useNavigate();

  if (!project || !detail) {
    return (
      <div className="p-6 text-center text-[#FFF1DB]">
        Proyek tidak ditemukan.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 p-6"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="max-w-4xl mx-auto bg-white shadow rounded-2xl p-6"
      >
        <button
          onClick={() => navigate("/achievement")}
          className="mb-4 inline-block px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded hover:bg-blue-200 transition"
        >
          ←
        </button>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {project.name}
        </h1>
        <p className="text-gray-700 mb-4">{detail.description}</p>

        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Timeline Bulanan
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {detail.timeline.map((item, index) => {
            let bg =
              item.status === "Selesai"
                ? "bg-green-100 text-green-700"
                : item.status === "Sedang Berlangsung"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700";

            return (
              <motion.div
                key={index}
                className={`rounded-xl px-3 py-2 text-sm font-medium ${bg}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                {item.month}: {item.status}
              </motion.div>
            );
          })}
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Catatan Guru/Pembina
        </h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-6">
          {detail.notes.map((note, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {note}
            </motion.li>
          ))}
        </ul>

        {/* Gambar Hasil Proyek */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Hasil Proyek
          </h2>
          <img
            src={detail.image}
            alt={`Gambar proyek ${project.name}`}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}