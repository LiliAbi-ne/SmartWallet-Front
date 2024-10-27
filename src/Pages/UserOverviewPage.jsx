import { useState, useEffect, useContext } from "react";
import Sidebar from "../components/ui/Componentes/Sidebar";
import Header from "../components/ui/Componentes/Header";
import {
  BarChart,
  Bar,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/Componentes/table";
import { obtenerIngresoUsuario, actualizarIngreso } from "../api/usuariosApi";
import { AuthContext } from "../context/AuthContext";

export default function UserOverviewPage() {
  const { token } = useContext(AuthContext);
  const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);
  const [income, setIncome] = useState("");

  // Extrae usuario_id del token
  const parseJwt = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      return JSON.parse(window.atob(base64));
    } catch {
      return null;
    }
  };

  const usuario_id = parseJwt(token)?.id;

  useEffect(() => {
    const fetchIncome = async () => {
      try {
        const userIncome = await obtenerIngresoUsuario(token, usuario_id);
        if (userIncome === null) { // Verifica si el ingreso es realmente null
          setIsIncomeModalOpen(true);
        } else {
          setIncome(userIncome);
          setIsIncomeModalOpen(false); // Asegúrate de cerrar el modal si el ingreso es válido
        }
      } catch (error) {
        console.error("Error al obtener ingreso:", error);
      }
    };
    if (usuario_id) fetchIncome();
  }, [token, usuario_id]);

  const handleSaveIncome = async () => {
    if (income === "") {
      console.error("El ingreso no puede estar vacío.");
      return;
    }
    try {
      await actualizarIngreso(token, usuario_id, parseFloat(income)); // Envía el ingreso correctamente
      setIsIncomeModalOpen(false);
    } catch (error) {
      console.error("Error al guardar ingreso:", error);
    }
  };

  // Datos de ejemplo para gráficos
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

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <Header />
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Resumen de Usuario</h1>
        </div>

        {/* Modal de ingreso mensual */}

        {/* Gráficos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        ["#8b5cf6", "#3b82f6", "#22c55e", "#ef4444"][index % 4]
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4">
              Distribución de Gastos
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expenseData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                >
                  {expenseData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        ["#8b5cf6", "#3b82f6", "#22c55e", "#ef4444"][index % 4]
                      }
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tabla de Transacciones Recientes */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">
            Transacciones Recientes
          </h2>
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
        {isIncomeModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-md">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 z-50">
              <h2 className="text-xl font-semibold mb-4">
                Configura tu Ingreso Mensual
              </h2>
              <p className="text-gray-600 mb-4">
                Establecer tu ingreso mensual permite a la aplicación generar
                comparaciones de gastos y visualizar gráficas personalizadas
                sobre tu situación financiera.
              </p>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="Ingresa tu ingreso mensual"
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
              />
              <div className="flex justify-end">
                <button
                  onClick={handleSaveIncome}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
