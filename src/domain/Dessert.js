import { Food } from "./Food";

export class Dessert extends Food {
  #image;

  constructor(ingredients, body, image) {
    super("dessert", ingredients, body, image);
  }

  getImage() {
    return this.#image;
  }
}