import {Food} from "./Food";

export class Meat extends Food {
  #image;
  constructor(ingredients, body, image) {
    super("meat", ingredients, body, image);
  }

  getImage() {
    return this.#image;
  }
}
