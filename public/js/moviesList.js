//paso 1
console.log('muviesList succes');

//paso 2
const body = document.querySelector('body');
const h1 = document.querySelector('.moviesListTitulo');

//paso 3
const respuesta = confirm('¿Desea modo oscuro?');

if(respuesta){
    body.style.backgroundColor = '#7f7f7f'
    body.classList.add("fondoMoviesList")
}

//paso 4
h1.innerHTML = "LISTADO DE PELICULAS";

//paso 5
h1.style.color = "white";
h1.style.backgroundColor = 'teal';
h1.style.padding = '20px'