import { Button } from "../components/ui/button";
import Sidebar from "../components/ui/Componentes/Sidebar";
import Header from "../components/ui/Componentes/Header";
import { BarChart, Bar, Cell, Pie, PieChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/Componentes/table";

// Datos de ejemplo para los gráficos
const expenseData = [
  { name: "Casa", value: 400 },
  { name: "Transporte", value: 300 },
  { name: "Dulces", value: 200 },
  { name: "Shopping", value: 100 },
];

const expenseCategories = [
  { name: "Casa", amount: 400 },
  { name: "Transporte", amount: 300 },
  { name: "Dulces", amount: 200 },
  { name: "Shopping", amount: 100 },
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
          {/* Gráfico de barras */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Gastos por Categoría</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={expenseCategories}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8">
                  {expenseCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={["#8b5cf6", "#3b82f6", "#22c55e", "#ef4444"][index % 4]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Gráfico circular */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Distribución de Gastos</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={expenseData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={["#8b5cf6", "#3b82f6", "#22c55e", "#ef4444"][index % 4]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
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
