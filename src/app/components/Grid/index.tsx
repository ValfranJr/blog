import Card from "../Card";
import styles from "./Grid.module.css";
import { Artigo } from "@/types/types";

type Props = {
  artigos: Artigo[];
};
const Grid = ({ artigos }: Props) => {
  return (
    <div className={styles.grid__container}>
      <div className={styles.grid}>
        {artigos
          .filter((artigo) => artigo.urlToImage)
          .map((artigo, index) => (
            <Card
              artigos={artigo}
              key={artigo.url || artigo.source.id || `art-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default Grid;
