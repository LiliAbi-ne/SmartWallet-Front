import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import ScrollArea from "../components/ui/Componentes/scroll-area";
import HeaderAdmin from "../components/ui/Componentes/HeaderAdmin";
import SidebarAdmin from "../components/ui/Componentes/SidebarAdmin";
import CardEducation from "../components/ui/Componentes/CardEducation";
import { fetchArticles } from "../services/newsAPI";

export default function EducationAdminPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles("finance");
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, []);


  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarAdmin />
      <main className="flex-1 p-6">
        <HeaderAdmin />
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-green-700">Educación</h1>
          <div className="mt-2">

          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-120px)]">
          <div className="space-y-6">
            {loading ? (
              <p className="text-center text-gray-600">Cargando noticias...</p>
            ) : (
              articles.map((article, index) => (
                <CardEducation
                  key={index}
                  title={article.title}
                  description={article.description || "Descripción no disponible"}
                  image={article.urlToImage}
                  timeAgo={article.publishedAt}
                  author={article.author || "Desconocido"}
                  likes={0}
                  url={article.url} // Pasa la URL de la noticia
                />
              ))
            )}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
