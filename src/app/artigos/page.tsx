import { getTopNoticias } from "@/lib/api/noticias";
import Grid from "../components/Grid";

export const dynamic = "force-static";
export const revalidate = 60;


const ArtigosGerais = async () => {
  const artigos = await getTopNoticias();
  return (
    <>
      <Grid artigos={artigos} titulo="Todos os artigos " />
    </>
  );
};

export default ArtigosGerais;
