import CardEducation from "../components/ui/Componentes/CardEducation";
import Header from "../components/ui/Componentes/Header";
import Sidebar from "../components/ui/Componentes/Sidebar";

export default function EducationPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#F5F5F5]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Main content area */}
        <div className="flex-auto p-4 bg-gray-100">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            Education
            <div className="mt-4">
              <CardEducation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
