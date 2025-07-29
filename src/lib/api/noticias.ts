import noticiasApi from "./axios";
import { Artigo } from "@/types/types";

type Data = {
  articles: Artigo[];
};

export const getTopNoticias = async () => {
  const res = await noticiasApi.get<Data>(
    `/top-headlines?country=us&category=technology&apiKey=${process.env.BREAKING_NEWS_API_KEY}`
  );
  return res.data.articles;
};

export const getArtigoSlug = async (
  slug: string
): Promise<Artigo | undefined> => {
  const artigos = await getTopNoticias();
  return artigos.find((a) => (a.title) === slug);
};