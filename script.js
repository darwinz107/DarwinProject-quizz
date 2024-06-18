// const x = 6;
// const y = 1;

// let suma2 = x+y;



// let variableNombre = "Darwin xd"
// console.log(suma2 + " "+ variableNombre );

// const array = ['Pedor','Jose','Jmac','Jordi','Jmac','Jordi']

// const result = array.filter(x=>x== 'Jordi');

// const array = [
// {nombre : 'Pepe', apellido: 'Lepu' },
// {nombre : 'Maria', apellido: 'Santos' },
// {nombre : 'Robert', apellido: 'Lepu' },
// {nombre : 'Lula', apellido: 'Da silva' },
// ]

// const result = array.filter(x => x.apellido == 'Lepu')

// for (let index = 0; index < result.length; index++) {
//     const element = result[index];
//     console.log(element.apellido);
// }


const array1 = [
    { nombre: 'Jose', apellido: 'Sarmiento' },
    { nombre: 'Laura', apellido: 'Sarmiento' },
    { nombre: 'Carlos', apellido: 'Sarmiento' },
];

// const result1 = array1.map(x=>{
// if(x =='Manzana'){
// return 'Pera'
// }})
// console.log(result1);

// const result2 = array1.fill('Naranja',1);
// console.log(result2);

// const result3 = array1.find(x => x.apellido == 'Sarmiento');
// console.log(result3);
// const result4 = array1.findIndex(x => x.apellido == 'Sarmiento');
// console.log(result4);

// const array2 = ['Pera', 'Limon', 'Manzana', 'Fresa', 'Pera'];

// document.getElementById('seleccionable').innerHTML = array2.join(', ');
// const result5 = array2.pop();
// array2.push('Zapato');
// array2.unshift('Dick');
// const result5 = array2.shift();

// const result5 = array2.slice(0,2);

// console.log(array2);
// const result5 = array2.some(x => x == 'Pera');
// const result5 = array2.every(x => x == 'Pera');
// console.log(array2);
// console.log(result5);


// const fruta = ['Pera','Manzana','Fresa','Durazno'];
// const vegetal = ['Col','Cebolla','Zanahoria','Pimiento'];


// console.log(fruta);
// console.log(fruta.concat(vegetal));

// const numers = [10, 8, 9, 11, 12, 5];


// console.log(numers.sort((x, y) => x - y));

// let si =[1,2,3,4];

//  si =[1,5,9,10];
// console.log(si);


// const fecha = new Date();
// const mes = fecha.getMonth() +1;


// const meses = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio'];


// const result = fecha.getFullYear() + '/' + meses[fecha.getMonth()] + '/' + fecha.getDate();

// console.log(result);

let numAzar = Math.floor(Math.random() * 100) + 1;

let ValorEntrada = document.getElementById('NumAdivinar');

let mensaje = document.getElementById('mensaje');
let imagen = document.getElementById('imagen');
let intento = document.getElementById('intento');

console.log(numAzar);
function AsignarNum() {
intento++;
intento.textContent=intento; 
valorIngresado = parseInt(ValorEntrada.value);

if(valorIngresado <1 || valorIngresado >100 || isNaN(valorIngresado)){

mensaje.textContent= 'Aprender a leer es un numero del 1 al 100!!';
mensaje.style.color = '';

imagen.src = 'https://www.meme-arsenal.com/memes/68773725dfe1bf29802d033d9cb8d290.jpg';

 return
} if (valorIngresado == numAzar){

    mensaje.textContent = 'Bien, lo atinaste al numero: '+numAzar;
    mensaje.style.color = 'green';
    imagen.src = 'assets/img/kuzembo.png'
}else if(valorIngresado<numAzar){

    mensaje.textContent = 'El numero esta mas arriba';
    mensaje.style.color = 'red';
    imagen.src = 'https://i.kym-cdn.com/entries/icons/original/000/041/943/1aa1blank.png';
}
else{
mensaje.textContent = 'El numero esta mas abajo';
mensaje.style.color = 'darkred';
imagen.src = 'https://i.kym-cdn.com/entries/icons/original/000/041/943/1aa1blank.png';
}


}