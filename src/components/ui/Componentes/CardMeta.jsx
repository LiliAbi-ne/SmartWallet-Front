import { CheckCircle, Edit3, Trash2 } from "lucide-react";

export default function CardMeta() {
  return (
    <div className="w-64 bg-[#F3CBA7] rounded-lg p-4 shadow-md flex flex-col justify-between">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Viaje a Cancún</h3>
          <p className="text-gray-600 text-sm">Viaje a Cancún con la familia</p>
        </div>
        <CheckCircle className="text-[#5B4034] h-6 w-6" />
      </div>

      <div className="mt-4">
        <p className="text-gray-700 font-semibold">
          <span className="text-sm">Start date :</span> 07-07-2023
        </p>
      </div>

      <div className="flex space-x-4 mt-4">
        <button className="text-[#5B4034] hover:text-[#3F2C26] transition">
          <Edit3 className="w-6 h-6" />
        </button>
        <button className="text-[#5B4034] hover:text-[#3F2C26] transition">
          <Trash2 className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
