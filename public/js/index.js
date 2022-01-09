//paso 1
console.log('index success');

//paso 2
let main = document.querySelector('main');
let h2 = document.querySelector('h2');
let a =document.querySelector('a');
let p = document.querySelectorAll('p');

//paso 3
let nombre = prompt('Ingrese su nombre');

//paso 4
if(nombre){
    h2.innerText += nombre
 }else {
    h2.innerText += "Invitado"
 }

 //paso 5
 h2.style.textTransform = "upperCase"

 //paso 6
 a.style.color = "#E51B3E"

 //paso 7
 let respuesta = confirm("¿Desea colocar un fondo de pantalla?")
 respuesta && document.body.classList.add('fondo')

 //paso 8
 p.forEach((parrafo, index) =>{
 index % 2 == 0 ? parrafo.classList.add('descatadoPar') : parrafo.classList.add('destacadoImpar')
 })

 //paso 9
 main.style.display = 'block'