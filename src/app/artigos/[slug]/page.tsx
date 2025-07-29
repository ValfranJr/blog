import { getArtigoSlug, getTopNoticias } from "@/lib/api/noticias";
import { gerarSlug } from "@/lib/slug/slug";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./slug.module.css";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const artigos = await getTopNoticias();

  return artigos.map((artigo) => ({
    slug: gerarSlug(artigo.title),
  }));
}

export const  generateMetadata = async ({params}: Props) => {
  const {slug} = await params;
  const artigo = await getArtigoSlug(slug);
  if (!artigo) return;
  return {
    title: `${artigo?.title} | Blog News`,
    description: artigo?.description,
    openGraph: {
      title: `${artigo?.title} | Blog News`,
      description: artigo.description,
      images: [{ url: artigo?.urlToImage, alt: artigo?.title }],
    },
  };
}

const DetalheArtigo = async ({ params }: Props) => {
  const { slug } = await params;
  const artigos = await getTopNoticias();
  const artigo = artigos.find((a) => gerarSlug(a.title) === slug);

  if (!artigo) return notFound();

  return (
    <div className={styles.slug}>
      <div className={styles.slug__container}>
        <div className={styles.slug__voltar}>
          <Link href="/">← Voltar</Link>
        </div>
        <section>
          <h1 className={styles.slug__title}>{artigo.title}</h1>

          <figure className={styles.slug__imagem}>
            {artigo.urlToImage && (
              <img
                src={artigo.urlToImage}
                alt={artigo.title}
                style={{ maxWidth: "600px", margin: "1rem 0" }}
              />
            )}
          </figure>
          <p className={styles.slug__description}>
            <strong>Fonte:</strong> {artigo.source.name}
          </p>
          <p className={styles.slug__description}>
            <strong>Autor:</strong> {artigo.author || "Desconhecido"}
          </p>
          <p className={styles.slug__description}>
            <strong>Sobre o assunto:</strong> {artigo.description}
          </p>
        </section>
      </div>
    </div>
  );
};

export default DetalheArtigo;
