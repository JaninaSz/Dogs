/*const contPersonaje = document.getElementById("card shadow-sm")

   console.log("gjhh")
"https://dog.ceo/api/breeds/list/all"
    for (let i = 0; i < arrPersonajes.length; i++) {
        console.log(arrPersonajes[i].name)}
})*/


export const API_Dog={
    URL:"https://rickandmortyapi.com/api",

    contPersonaje: function(){
        return `${this.URL}/character`
    },
    
    personaje_ID : function(id){
        return `${this.URL}/character/${id}`
    }
    }

