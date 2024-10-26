import Header from "../components/ui/Componentes/Header";
import SidebarAdmin from "../components/ui/Componentes/SidebarAdmin";

export default function AdminOverviewPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#F5F5F5]">
        <SidebarAdmin />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
      </div>
    </div>
  );
}
