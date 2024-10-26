import { Button } from "../components/ui/button";
import Sidebar from "../components/ui/Componentes/Sidebar";
import Header from "../components/ui/Componentes/Header";
import { BarChart, Bar, Cell, Pie, PieChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/Componentes/table";
import { Home, Car, Gift, ShoppingBag } from "lucide-react"; // Ejemplos de iconos, puedes cambiarlos según tus necesidades

// Datos de ejemplo para los gráficos
const expenseData = [
  { name: "Casa", value: 41.35, color: "#8b5cf6", icon: <Home /> },
  { name: "Transporte", value: 13.47, color: "#3b82f6", icon: <Car /> },
  { name: "Dulces", value: 9.97, color: "#22c55e", icon: <Gift /> },
  { name: "Shopping", value: 3.35, color: "#ef4444", icon: <ShoppingBag /> },
];

export default function UserOverviewPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <Header />
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Resumen de Usuario</h1>
        </div>

        {/* Sección de gráficos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Gráfico circular futurista */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Gastos por categoría</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expenseData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  stroke="none"
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {expenseData.map((category, index) => (
                <div key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-xl" style={{ color: category.color }}>{category.icon}</span>
                  <span className="text-sm font-medium">{category.name}</span>
                  <span className="ml-auto text-gray-500 font-semibold">{category.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gráfico de barras futurista */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Resumen de Gastos</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={expenseData} barSize={30}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }} />
                <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Ejemplo de tabla de transacciones recientes */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Transacciones Recientes</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transacción</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Cantidad</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Netflix</TableCell>
                <TableCell>2024/03/29</TableCell>
                <TableCell className="text-red-500">-9.90</TableCell>
              </TableRow>
              {/* Añade más filas de transacciones aquí */}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
