export class Food {
  #type;
  #ingredients;
  #body;

  constructor(type, ingredients, body) {
    this.#type = type;
    this.#ingredients = ingredients;
    this.#body = body;
  }

  getInfo() { //методы 
    return {
      type: this.#type,
      ingredients: this.#ingredients,
      body: this.#body,
    };
  }

}

