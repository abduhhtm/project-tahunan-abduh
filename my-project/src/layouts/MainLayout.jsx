import Header from "../components/Header";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
      <Header />
      {children}
    </div>
  );
}