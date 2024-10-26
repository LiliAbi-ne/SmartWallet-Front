import { Button } from "../components/ui/button";
import ScrollArea from "../components/ui/Componentes/scroll-area";
import Header from "../components/ui/Componentes/Header";
import Sidebar from "../components/ui/Componentes/Sidebar";
import CardEducation from "../components/ui/Componentes/CardEducation"; // Importa el nuevo componente

export default function EducationPage() {
  const articles = [
    {
      title: "Ahorra y Emprende - EDUCA",
      description:
        "Atención psicológica, atención médica general, atención dental, dispensario médico para la comunidad, escuela para padres/madres o familia, centro comunitario. Somos una institución educativa y cultural dedicada a promover entre los niños, niñas y jóvenes de escasos...",
      image: "/src/assets/Noticia1.jpg", // Ruta actualizada a Noticia1.jpg
      timeAgo: "Hace 3 horas",
      author: "Lucy Middleton",
      likes: 33,
    },
    {
      title: "Feria EDUCA - Ahorra y Emprende",
      description:
        "Es un evento que reúne a estudiantes, docentes, madres y padres de familia para compartir experiencias, presentar emprendimientos y participar en talleres sobre salud financiera, ciudadanía económica, emprendimiento, empoderamiento, educación ambiental para el...",
      image: "/src/assets/Noticia2.jpg", // Ruta actualizada a Noticia2.jpg
      timeAgo: "Hace 12 horas",
      author: "Lucy Middleton",
      likes: 28,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <Header />
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-green-700">Educación</h1>
        </div>
        <ScrollArea className="h-[calc(100vh-120px)]">
          <div className="space-y-6">
            {articles.map((article, index) => (
              <CardEducation
                key={index}
                title={article.title}
                description={article.description}
                image={article.image}
                timeAgo={article.timeAgo}
                author={article.author}
                likes={article.likes}
              />
            ))}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
