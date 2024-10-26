import CardMeta from "../components/ui/Componentes/CardMeta";
import Header from "../components/ui/Componentes/Header";
import Sidebar from "../components/ui/Componentes/Sidebar";
import { Plus } from "lucide-react";

export default function GoalsPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#F5F5F5]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div>
          <Header />
        </div>

        {/* Main Content Area */}
        <div className="p-4 bg-gray-100 flex-1">
          <button className="flex items-center justify-center px-4 py-2 text-white rounded-full bg-gradient-to-r from-[#21AA58] via-[#21AA58] to-[#247D61] hover:from-[#247D61] hover:to-[#21AA58] transition-colors duration-300">
            <Plus size={20} className="mr-2" />
            <span className="font-semibold">Agregar meta</span>
          </button>

          <div className="flex-auto justify-center min-h-screen bg-gray-100 mt-3">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <CardMeta />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
