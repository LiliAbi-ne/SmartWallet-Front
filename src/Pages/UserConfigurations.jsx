import Sidebar from "../components/ui/Componentes/Sidebar";
import Header from "../components/ui/Componentes/Header";
import UserProfileCard from "../components/ui/Componentes/UserProfileCard";
import InformationCard from "../components/ui/Componentes/InformationCard";
import { useState } from "react";
import EditModal from "../components/ui/Componentes/Modales/EditUserModal";
import PaymentModal from "../components/ui/Componentes/Modales/PaymentModal";

export default function UserConfigurations() {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);

    const openEditModal = (section) => {
        setSelectedSection(section);
        setEditModalOpen(true);
    };

    const handleAccountTypeChange = () => {
        setPaymentModalOpen(true);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-6">
                <Header />
                <div className="max-w-4xl mx-auto">
                    <UserProfileCard
                        name="Juan David Quiñónez"
                        profileImage="https://via.placeholder.com/150"
                        backgroundImage="https://via.placeholder.com/800x200"
                        onEdit={openEditModal}
                    />

                    <h2 className="text-2xl font-bold text-green-700 mt-6">Configuración de cuenta</h2>
                    <p className="text-gray-600 mt-2">
                        Administra tus datos personales y preferencias.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <InformationCard
                            title="Información de contacto"
                            details={[
                                { label: "Correo", value: "correo@example.com" },
                                { label: "Teléfono", value: "(555) 123-4567" }
                            ]}
                            onEdit={openEditModal}
                        />
                        <InformationCard
                            title="Estudios"
                            details={[
                                { label: "Universidad Nacional de Colombia", value: "Estadística" }
                            ]}
                            onEdit={openEditModal}
                        />
                        <InformationCard
                            title="Información laboral"
                            details={[
                                { label: "Trabajo actual", value: "Desarrollador Freelance" },
                                { label: "Empresa", value: "ABC Corp." }
                            ]}
                            onEdit={openEditModal}
                        />
                        <InformationCard
                            title="Preferencias de cuenta"
                            details={[
                                { label: "Notificaciones", value: "Activadas" },
                                { label: "Privacidad", value: "Pública" }
                            ]}
                            onEdit={() => handleAccountTypeChange()}
                        />
                    </div>
                </div>

                {/* Modal de edición */}
                <EditModal
                    isOpen={isEditModalOpen}
                    onClose={() => setEditModalOpen(false)}
                    section={selectedSection}
                />

                {/* Modal de pago para cambio a cuenta premium */}
                <PaymentModal
                    isOpen={isPaymentModalOpen}
                    onClose={() => setPaymentModalOpen(false)}
                    packageName="Premium"
                    price={49.99}
                    allowSaveCard={true}
                />
            </main>
        </div>
    );
}
