import { MoreVertical } from "lucide-react";
// Añade más importaciones de logos según necesites

export default function GastosList() {
  const transactions = [
    {
      logo: null,
      name: "Netflix",
      date: "2024/03/29",
      amount: "-$9.90",
      amountColor: "text-red-500",
    },
    {
      logo: null,
      name: "Spotify",
      date: "2024/03/29",
      amount: "-$19.90",
      amountColor: "text-red-500",
    },
    {
      logo: null,
      name: "Carl Andrew",
      date: "2024/03/27",
      amount: "+$400.00",
      amountColor: "text-green-500",
    },
    {
      logo: null,
      name: "Carrefour Market",
      date: "2024/03/26",
      amount: "-$64.33",
      amountColor: "text-red-500",
    },
    {
      logo: null,
      name: "Amazon",
      date: "2024/03/24",
      amount: "-$147.90",
      amountColor: "text-red-500",
    },
    {
      logo: null,
      name: "Shopify",
      date: "2024/03/21",
      amount: "-$57.98",
      amountColor: "text-red-500",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-lg font-semibold">Últimos gastos registrados</h2>
      <p className="text-sm text-gray-500 mb-4">Check your last transactions</p>

      <div className="overflow-hidden border rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Gasto
              </th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-4 py-2 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Cantidad
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="flex items-center px-4 py-2 space-x-3">
                  {transaction.logo && (
                    <img
                      src={transaction.logo}
                      alt={`${transaction.name} logo`}
                      className="w-6 h-6 rounded-full"
                    />
                  )}
                  <span className="font-medium text-gray-700">
                    {transaction.name}
                  </span>
                </td>
                <td className="px-4 py-2 text-gray-500 text-sm">
                  {transaction.date}
                </td>
                <td
                  className={`px-4 py-2 text-right font-semibold ${transaction.amountColor}`}
                >
                  {transaction.amount}
                </td>
                <td className="px-4 py-2 text-right">
                  <MoreVertical className="text-gray-400 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
