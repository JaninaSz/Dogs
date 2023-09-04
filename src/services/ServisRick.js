import { API_Dog } from "../constants/Api.constants";

class ServisRick {

    async getAllPersonajes() {
        const response = await fetch(API_Dog.contPersonaje());
        //Interceptor
        return response.json();
    }

    async getPersonajeID(id) {
        const response = await fetch(API_Dog.personaje_ID(id));
        //Interceptor
        return response.json();
    }
}

export default new ServisRick();