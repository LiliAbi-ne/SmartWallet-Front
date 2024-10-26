import { Button } from "../components/ui/button";
import SidebarAdmin from "../components/ui/Componentes/SidebarAdmin";
import Header from "../components/ui/Componentes/Header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/Componentes/table";
import { ChevronDown, Edit3, Trash2 } from "lucide-react";

export default function UserManagementPage() {
  const users = [
    { username: "ByeWind", joinDate: "Jan 24, 2022", status: "Básico" },
    { username: "Content", joinDate: "Mar 10, 2022", status: "Premium" },
    { username: "AnotherUser", joinDate: "Nov 10, 2022", status: "Básico" },
    { username: "User123", joinDate: "Dec 20, 2022", status: "Premium" },
    // Puedes añadir más usuarios según sea necesario
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarAdmin />

      <main className="flex-1 p-8">
        <Header />

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Gestión de Usuarios</h1>
          <Button variant="primary">
            Añadir Usuario
          </Button>
        </div>

        {/* Tabla de Usuarios */}
        <div className="bg-white shadow rounded-lg">
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Lista de Usuarios</h2>
            <Button variant="ghost" size="sm">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Usuario</TableHead>
                <TableHead>Fecha de Ingreso</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        user.status === "Premium"
                          ? "bg-green-100 text-green-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
