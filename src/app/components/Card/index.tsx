import Link from "next/link";
import styles from "./Card.module.css";
import { Artigo } from "@/types/types";
import { gerarSlug } from "@/lib/slug/slug";

type Props = {
  artigos: Artigo;
};

const Card = ({ artigos }: Props) => {
  const { author, title, description } = artigos;

  return (
    <div className={styles.card}>
      <Link href={`/artigos/${gerarSlug(title)}`}>
        <img
          className={styles.card__image}
          src={artigos.urlToImage}
          alt={artigos.title}
        />
        <div className={styles.card__content}>
          <h3 className={styles.card__title}>{title}</h3>
          <p className={styles.card__description}>{description}</p>
          <div className={styles.card__footer}>
            <p className={styles.card__author}>{author}</p>
            <button className={styles.card__button}> Ler mais<img src="/Vector.png" alt="arrow right"/></button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
