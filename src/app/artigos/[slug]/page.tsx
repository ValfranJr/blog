import { getTopNoticias } from "@/lib/api/noticias";
import { gerarSlug } from "@/lib/slug/slug";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function DetalheArtigo({ params }: Props) {
  const urlOriginal = decodeURIComponent(params.slug);

  const artigos = await getTopNoticias();
  const artigo = artigos.find((a) => gerarSlug(a.title) === params.slug);

  if (!artigo) return notFound();

  return (
    <>
      <Link href="/">← Voltar</Link>
      <h1>{artigo.title}</h1>
      <p>
        <strong>Fonte:</strong> {artigo.source.name}
      </p>
      <p>
        <strong>Autor:</strong> {artigo.author || "Desconhecido"}
      </p>
      {artigo.urlToImage && (
        <img
          src={artigo.urlToImage}
          alt={artigo.title}
          style={{ maxWidth: "600px", margin: "1rem 0" }}
        />
      )}
      <p>{artigo.description}</p>
    </>
  );
};
