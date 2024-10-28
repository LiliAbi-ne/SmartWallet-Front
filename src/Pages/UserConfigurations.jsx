import Sidebar from "../components/ui/Componentes/Sidebar";
import Header from "../components/ui/Componentes/Header";
import UserProfileCard from "../components/ui/Componentes/UserProfileCard";
import InformationCard from "../components/ui/Componentes/InformationCard";
import AccountTypeSelect from "../components/ui/Componentes/AccountTypeSelect";
import { useState } from "react";
import EditModal from "../components/ui/Componentes/Modales/EditUserModal";
import PaymentModal from "../components/ui/Componentes/Modales/PaymentModal";

export default function UserConfigurations() {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);
    const [editValue, setEditValue] = useState("");

    // Información de muestra para el perfil de usuario
    const [userProfile, setUserProfile] = useState({
        nombre: "Juan Pérez",
        email: "juan.perez@example.com",
        contraseña: "*****",
        preferencias: {
            cuenta: "Básica",
        },
    });

    const openEditModal = (section, value) => {
        setSelectedSection(section);
        setEditValue(value);
        setEditModalOpen(true);
    };

    const handleAccountTypeChange = (newAccountType) => {
        if (newAccountType === "Premium") {
            setPaymentModalOpen(true);
        } else {
            setUserProfile((prevState) => ({
                ...prevState,
                preferencias: { ...prevState.preferencias, cuenta: "Básica" },
            }));
        }
    };

    const handleSaveChanges = (newData) => {
        setUserProfile((prevProfile) => ({
            ...prevProfile,
            [selectedSection]: newData[selectedSection] || prevProfile[selectedSection],
        }));
        setEditModalOpen(false);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-6">
                <Header />
                <div className="max-w-4xl mx-auto">
                    <UserProfileCard
                        name={userProfile.nombre}
                        profileImage="https://via.placeholder.com/150"
                        backgroundImage="https://idc.brightspotcdn.com/dims4/default/adff828/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fidc.brightspotcdn.com%2Feinfluss%2Fmedia%2F2017%2F02%2F10%2F%2Fahorro.jpg"
                        onEdit={() => openEditModal("Perfil", userProfile.nombre)}
                    />

                    <h2 className="text-2xl font-bold text-green-700 mt-6">Configuración de cuenta</h2>
                    <p className="text-gray-600 mt-2">
                        Administra tus datos personales y preferencias.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <InformationCard
                            title="Información de contacto"
                            details={[
                                { label: "Correo", value: userProfile.email },
                                { label: "Contraseña", value: userProfile.contraseña }
                            ]}
                            onEdit={(label) => openEditModal(label, userProfile[label.toLowerCase()])}
                        />
                        <InformationCard
                            title="Tipo de suscripción"
                            details={[
                                {
                                    label: "Cuenta",
                                    value: (
                                        <AccountTypeSelect
                                            currentAccountType={userProfile.preferencias.cuenta}
                                            onChangeAccountType={handleAccountTypeChange}
                                        />
                                    ),
                                }
                            ]}
                        />
                    </div>
                </div>

                <EditModal
                    isOpen={isEditModalOpen}
                    onClose={() => setEditModalOpen(false)}
                    section={selectedSection}
                    initialValue={editValue}
                    onSave={handleSaveChanges}
                />

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
