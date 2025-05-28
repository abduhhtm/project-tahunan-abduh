import { useState } from "react";
import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import { CheckCircle, Timer } from "lucide-react";

export default function Achievement() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");
  const [filterProgress, setFilterProgress] = useState(false);
  const [filterDeadline, setFilterDeadline] = useState(false);
  const navigate = useNavigate();

  const isDeadlineSoon = (deadlineStr) => {
    const deadline = new Date(deadlineStr);
    const now = new Date();
    const daysDiff = (deadline - now) / (1000 * 60 * 60 * 24);
    return daysDiff >= 0 && daysDiff <= 30;
  };

  const filteredProjects = projects.filter((project) => {
    const matchSearch = project.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "Semua" || project.category === category;
    const matchProgress = !filterProgress || project.progress >= 90;
    const matchDeadline = !filterDeadline || isDeadlineSoon(project.deadline);
    return matchSearch && matchCategory && matchProgress && matchDeadline;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <MainLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-blue-800">Daftar Proyek Tahunan</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Cari proyek..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-md shadow w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-4 py-2 rounded-md shadow w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="Semua">Semua Kategori</option>
            <option value="Ekstrakurikuler">Ekstrakurikuler</option>
            <option value="Mapel">Mapel</option>
          </select>
        </div>

        <div className="flex gap-4 mb-6 flex-wrap">
          <label className="flex items-center gap-2">
            <motion.input
              type="checkbox"
              checked={filterProgress}
              onChange={() => setFilterProgress(!filterProgress)}
              whileTap={{ scale: 0.95 }}
            />
            <CheckCircle className="text-green-600" size={18} />
            <span className="text-sm">Progress ≥ 90%</span>
          </label>
          <label className="flex items-center gap-2">
            <motion.input
              type="checkbox"
              checked={filterDeadline}
              onChange={() => setFilterDeadline(!filterDeadline)}
              whileTap={{ scale: 0.95 }}
            />
            <Timer className="text-orange-600" size={18} />
            <span className="text-sm">Deadline 30 hari</span>
          </label>
        </div>

        <motion.div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          layout
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                role="button"
                tabIndex={0}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate(`/detail/${project.id}`)}
                className="border rounded-2xl p-4 shadow bg-white cursor-pointer hover:shadow-lg hover:scale-[1.02] transition"
              >
                <h2 className="text-xl font-semibold text-blue-800">{project.name}</h2>
                <p className="text-sm text-gray-600">Kategori: {project.category}</p>
                <p className="text-sm text-gray-600">Jenis: {project.type}</p>
                <p className="text-sm text-gray-600">Deadline: {project.deadline}</p>

                <div className="mt-2">
                  <div className="h-2 w-full bg-gray-200 rounded overflow-hidden">
                    <motion.div
                      className={`h-2 rounded ${
                        project.progress >= 90
                          ? "bg-green-500"
                          : project.progress >= 50
                          ? "bg-yellow-400"
                          : "bg-red-500"
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <p className="text-right text-sm mt-1">{project.progress}%</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.p
              className="text-gray-500 col-span-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Tidak ada proyek ditemukan.
            </motion.p>
          )}
        </motion.div>
      </div>
    </MainLayout>
  );
}