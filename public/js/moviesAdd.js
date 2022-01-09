//paso 1
console.log('moviesAdd succes');

//paso 2
const h1 = document.querySelector('.moviesAddTitulo');
const section = document.getElementById('formulario');
const article = document.querySelector('article');

//paso 3
h1.innerHTML = 'AGEREGAR PELICULAS';

//paso 4
h1.classList.add('titulo');

//paso 5
article.classList.add('fondoTransparente');

//paso 6
section.classList.add('fondoCRUD');