import { data } from "../infrastructure/api";
import { Meat } from "../domain/Meat";
import { Fish } from "../domain/Fish";
import { Vegetables } from "../domain/Vegetables";
import { Dessert } from "../domain/Dessert";

class DataFetcher {
  fetchRecipes() {
    return data.map(({ type, ingredients, body }) => {
      if (type === "meat") {
        return new Meat(ingredients, body);
      }
      if (type === "fish") {
        return new Fish(ingredients, body);
      }
      if (type === "vegetables") {
        return new Vegetables(ingredients, body);
      }
      return new Dessert(ingredients, body);
    });
  }
}

export default new DataFetcher();
