import DataFetcher from "../../application/DataFetcher";
import "./styles.sass";

export function listView() {
  const recipes = DataFetcher.fetchRecipes();
  const list = document.createElement("ul");
  list.className = "list-view";
  return recipes.reduce((acc, item) => {
    const el = document.createElement("li");
    const { type, ingredients, body } = item.getInfo();
    el.innerText = `${type}, ${ingredients},${body}`;
    list.appendChild(el);
    return list;
  }, recipes);
}
