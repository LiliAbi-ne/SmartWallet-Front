import React, { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import Header from "../components/ui/Componentes/Header";
import SidebarAdmin from "../components/ui/Componentes/SidebarAdmin";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/Componentes/table"; 
import { Label } from "../components/ui/label";

export default function GoalsManagement() {
  const [goals, setGoals] = useState([
    { id: 1, name: 'Viaje a Europa', description: 'Ahorra para un viaje a Europa' },
    { id: 2, name: 'Comprar un auto', description: 'Ahorra para comprar un auto nuevo' },
    { id: 3, name: 'Estudio de posgrado', description: 'Ahorra para estudios de posgrado' },
  ]);

  const addGoal = () => {
    // Aquí podrías agregar la lógica para agregar la meta si es necesario.
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarAdmin />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-6">
              <Button 
                onClick={addGoal} 
                className="flex items-center justify-center px-4 py-2 text-white rounded-full bg-gradient-to-r from-[#21AA58] via-[#21AA58] to-[#247D61] hover:from-[#247D61] hover:to-[#21AA58] transition-colors duration-300 mr-4"
              >
                <Plus size={20} className="mr-2" />
                <span className="font-semibold">Agregar Meta</span>
              </Button>
              <h3 className="text-lg font-semibold">Gestionar Metas</h3>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Descripción</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {goals.map((goal) => (
                  <TableRow key={goal.id}>
                    <TableCell className="font-medium">{goal.name}</TableCell>
                    <TableCell>{goal.description}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="mr-2" onClick={() => console.log('Edit goal', goal)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => deleteGoal(goal.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
}
