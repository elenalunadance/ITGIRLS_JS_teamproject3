import { Food } from "./Food";

export class Fish extends Food {
  #image;

  constructor(ingredients, body, image) {
    super("fish", ingredients, body, image);
  }

  getImage() {
    return this.#image;
  }
}