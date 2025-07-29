import Link from "next/link";
import styles from "./Card.module.css";
import { Artigo } from "@/types/types";
import { gerarSlug } from "@/lib/slug/slug";

type Props = {
  artigos: Artigo;
};

const Card = ({ artigos }: Props) => {
  const { source, author, title, description, url, urlToImage } = artigos;

  return (
    <div className={styles.card}>
      <Link href={`/artigos/${gerarSlug(title)}`}>
          <img
            className={styles.card__image}
            src={artigos.urlToImage}
            alt={artigos.title}
          />
          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p>{source.name}</p>
            <p className={styles.description}>{description}</p>
            <p>{author}</p>
            <button className={styles.card_button}> Ler mais</button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
