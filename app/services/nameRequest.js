import ApiUrls from "./apiUrls";

/**
 * clase donde se definen los bodys para de los servicios
 */
export default class NameRequest {
  constructor() {}

  /**
   * Obtiene el string para la petcion de login
   * @param {*} limit  //number
   * @param {*} offset   //number
   */
  static listPokemons(limit, offset) {
    return  ApiUrls.BASESERVICE + 
            ApiUrls.pokemon + 
            `?limit=${limit}&offset=${offset}`
  }
}


