const API_noticias = "https://demo6497253.mockable.io/noticias";
const noticias = document.querySelector("#noticias");

function getData(url_api){
    return fetch(url_api)
    .then(response => response.json())
    .then(json => json)
}

const conectando = async(url) =>  {
    try{
        const data = await getData(url);
        crearPagina(data);
    }catch(error){
        console.error(error)
    }
}

const crearPagina = (data) => {
    //creando elementos
    const img = document.createElement("img");
    img.className ="mg-fluid mx-auto";
    img.src= data[0].img; 
    noticias.append(img);
    
    for(let i=0;i<3;i++){
        const seccion = document.createElement("section");
        const parrafo = document.createElement("p");
        const titulo = document.createElement("h5");
        const ancla = document.createElement("a");

        //agregando
        
        h5.append(a);
        seccion.append(h5);
        seccion.append(parrafo);
    }

}

conectando(API_noticias);
