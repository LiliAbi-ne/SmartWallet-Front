import Sidebar from "../components/ui/Componentes/Sidebar";
import Header from "../components/ui/Componentes/Header";
import UserProfileCard from "../components/ui/Componentes/UserProfileCard";
import InformationCard from "../components/ui/Componentes/InformationCard";
import { useState, useEffect } from "react";
import EditModal from "../components/ui/Componentes/Modales/EditUserModal";
import PaymentModal from "../components/ui/Componentes/Modales/PaymentModal";
import { obtenerPerfilUsuario, actualizarPerfilUsuario } from "../api/usuariosApi";


export default function UserConfigurations({ token, usuario_id }) {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);
    const [editValue, setEditValue] = useState("");
    const [userProfile, setUserProfile] = useState({
        nombre: "",
        email: "",
        contraseña: "",
        preferencias: { notificaciones: "", privacidad: "", cuenta: "Básica" },
    });

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const perfilData = await obtenerPerfilUsuario(token, usuario_id);
                setUserProfile({
                    nombre: perfilData.nombre,
                    email: perfilData.email,
                    contraseña: "*****",
                    preferencias: perfilData.preferencias,
                });
            } catch (error) {
                console.error("Error al obtener perfil de usuario:", error);
            }
        };
        fetchUserProfile();
    }, [token, usuario_id]);

    const openEditModal = (section, value) => {
        setSelectedSection(section);
        setEditValue(value);
        setEditModalOpen(true);
    };

    // Maneja el cambio de tipo de cuenta y abre el modal de pago si se selecciona "Premium"
    const handleAccountTypeChange = (newAccountType) => {
        if (newAccountType === "Premium") {
            setPaymentModalOpen(true);
        } else {
            actualizarPerfilUsuario(token, usuario_id, { cuenta: "Básica" })
                .then(() => {
                    setUserProfile((prevState) => ({
                        ...prevState,
                        preferencias: { ...prevState.preferencias, cuenta: "Básica" },
                    }));
                })
                .catch((error) => console.error("Error al actualizar tipo de cuenta:", error));
        }
    };

    const handleSaveChanges = async (newData) => {
        try {
            await actualizarPerfilUsuario(token, usuario_id, newData);
            setUserProfile((prevProfile) => ({
                ...prevProfile,
                [selectedSection]: newData[selectedSection] || prevProfile[selectedSection],
            }));
            setEditModalOpen(false);
        } catch (error) {
            console.error("Error al actualizar perfil del usuario:", error);
        }
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
                            title="Preferencias de cuenta"
                            details={[
                                { label: "Notificaciones", value: userProfile.preferencias.notificaciones },
                                {
                                    label: "Tipo de suscripción",
                                    value: userProfile.preferencias.cuenta,
                                    options: ["Básica", "Premium"],
                                    onChange: handleAccountTypeChange
                                }
                            ]}
                            onEdit={(label) => openEditModal(label, userProfile.preferencias[label.toLowerCase()])}
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
