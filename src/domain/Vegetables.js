import { Food } from "./Food";

export class Vegetables extends Food {
  #image;

  constructor(ingredients, body, image) {
    super("vegetables", ingredients, body, image);
  }

  getImage() {
    return this.#image;
  }
}
  