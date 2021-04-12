const API_noticias = "https://demo6497253.mockable.io/noticias";
const noticias = document.querySelector(".noticias");

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
    noticias.appendChild(img);
    
    for(let i=0;i<3;i++){

        const seccion = document.createElement("section");
        const parrafo = document.createElement("p");
        const titulo = document.createElement("h6");
        const ancla = document.createElement("a");
        ancla.href = "#";

        //agregando
        
        ancla.append(data[i].titulo);
        titulo.append(ancla);
        seccion.append(titulo);
        parrafo.append(data[i].descripcion);
        seccion.append(parrafo);
        noticias.append(seccion);
    }

}

conectando(API_noticias);
