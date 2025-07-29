import slugify from "slugify";

export function gerarSlug(titulo: string) {
  return slugify(titulo, {
    lower: true,
    strict: true,
});
}
