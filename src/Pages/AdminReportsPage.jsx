import { Input } from "../components/ui/input"; // Importar el componente de Input
import ScrollArea from "../components/ui/Componentes/scroll-area"; // Importación corregida para usar la exportación por defecto
import Header from "../components/ui/Componentes/Header";
import SidebarAdmin from "../components/ui/Componentes/SidebarAdmin";
import CardReport from "../components/ui/Componentes/CardReport"; // Importa el componente correctamente

export default function AdminReportsPage() {
  const reports = [
    {
      description: "Cierre de aplicación",
      details: "La aplicación se cierra inesperadamente al intentar acceder a la sección de \"Configuración de Cuenta\". El error ocurre después de iniciar sesión y solo afecta a ciertos usuarios con cuentas antiguas.",
      date: "22 de septiembre de 2024",
    },
    {
      description: "Problemas con botón",
      details: "El botón \"Guardar Cambios\" en el formulario de edición de perfil no responde al hacer clic. Los datos ingresados no se guardan y no se muestra ningún mensaje de error.",
      date: "19 de septiembre de 2024",
    },
    {
      description: "Tiempos de carga largos",
      details: "Los tiempos de carga en la página de \"Historial de Compras\" son extremadamente largos (más de 30 segundos). Afecta a todos los usuarios al consultar compras de más de un año.",
      date: "15 de septiembre de 2024",
    },
    {
      description: "Información incorrecta",
      details: "La aplicación muestra información incorrecta en la página de \"Resumen Financiero\". Los ingresos aparecen duplicados para algunos usuarios después de una actualización reciente.",
      date: "12 de septiembre de 2024",
    },
  ];

  // Función para manejar la eliminación de un reporte
  const handleDelete = (index) => {
    console.log(`Eliminando reporte en índice: ${index}`);
    // Aquí podrías agregar la lógica para eliminar el reporte del estado si fuera necesario
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarAdmin /> {/* SidebarAdmin importado */}
      <main className="flex-1 p-6">
        <Header /> {/* Header importado */}
        
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex flex-col space-y-4 mb-4">
            <h1 className="text-xl font-semibold">Reportes</h1>
            
            {/* Barra de búsqueda */}
            <div className="relative">
              <Input type="text" placeholder="Buscar reporte..." className="w-full px-4 py-2 border rounded-lg" />
            </div>
          </div>
          
          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="space-y-4">
              {reports.map((report, index) => (
                <CardReport
                  key={index}
                  description={report.description}
                  details={report.details}
                  date={report.date}
                  onDelete={() => handleDelete(index)}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  );
}
