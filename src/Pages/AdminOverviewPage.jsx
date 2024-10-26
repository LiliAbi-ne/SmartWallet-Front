import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import SidebarAdmin from "../components/ui/Componentes/SidebarAdmin";
import Header from "../components/ui/Componentes/Header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/Componentes/table";
import { AdminCard } from "../components/ui/Componentes/AdminCard";
import { Bell, ChevronDown, Clock, Settings } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Bar, ComposedChart } from "recharts";

const userData = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 300 },
  { month: "Mar", value: 500 },
  { month: "Apr", value: 200 },
  { month: "May", value: 300 },
  { month: "Jun", value: 400 },
];

const goalsData = [
  { month: "Jan", goals: 120, target: 140 },
  { month: "Feb", goals: 100, target: 120 },
  { month: "Mar", goals: 150, target: 180 },
  { month: "Apr", goals: 130, target: 160 },
  { month: "May", goals: 110, target: 130 },
  { month: "Jun", goals: 120, target: 140 },
];

export default function AdminOverviewPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarAdmin />

      <main className="flex-1 p-8">
        <Header />

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Input type="text" placeholder="Search..." className="w-64" />
            <Button size="icon" variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <Clock className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <AdminCard title="Total" value="7,265" percentage={11.01} color="bg-green-100" />
          <AdminCard title="Ingresos" value="3,671" percentage={-0.03} color="bg-gray-900" textColor="text-white" />
          <AdminCard title="Usuarios Activos" value="256" percentage={15.03} color="bg-blue-100" />
        </div>

        {/* Gráfico de Usuarios */}
        <div className="mb-6">
          <AdminCard title="Usuarios" color="bg-white">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={userData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={{ r: 5 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </AdminCard>
        </div>

        {/* Gráfico de Objetivos Creados */}
        <div className="mb-6">
          <AdminCard title="Objetivos creados" color="bg-white">
            <ResponsiveContainer width="100%" height={250}>
              <ComposedChart data={goalsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="goals" fill="#82ca9d" />
                <Line type="monotone" dataKey="target" stroke="#8884d8" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </AdminCard>
        </div>

        {/* Tabla de Usuarios */}
        <AdminCard title="Últimos usuarios" color="bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Usuario</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>ByeWind</TableCell>
                <TableCell>Jan 24, 2022</TableCell>
                <TableCell>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Básico</span>
                </TableCell>
              </TableRow>
              {/* Más filas según sea necesario */}
            </TableBody>
          </Table>
        </AdminCard>
      </main>
    </div>
  );
}
