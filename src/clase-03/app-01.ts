export {}; //Modulo en TS
// ALIAS PARA TIPOS DE DATOS EN TS
let curso: string = "TypeScript";
// Cursos codigo: Javacript =1, TypeScript = 2
//curso = 1; //JavaScript

let cursoNuevo: string | number;
//cursoNuevo = true;
cursoNuevo = "Javascript";
cursoNuevo = 2; //TypeScript

function getCurso(): string | number {
  //return 'Javascript';
  return 1;
}

//Arreglos
let cursos: string[] = ["Javascript", "Typescript"];
let cursos2: (string | number)[] = ["Javascript", "Typescript", 1];

console.log("cursos", cursos);
console.log("cursos", cursos2);
