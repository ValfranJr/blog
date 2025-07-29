import Grid from "./components/Grid";
import { getTopNoticias } from "@/lib/api/noticias";

export default async function Home() {
  const artigos = await getTopNoticias();
  return (
    <>
      <Grid
        artigos= {artigos}
      />
    </>
  );
}
