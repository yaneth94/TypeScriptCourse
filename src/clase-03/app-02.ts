export {}; //Modulo en TS
// ALIAS PARA TIPOS DE DATOS EN TS, PARTE II
let curso: string = "TypeScript";
// Cursos codigo: Javacript =1, TypeScript = 2
//curso = 1; //JavaScript

type Curso = string | number;

let cursoNuevo: Curso;
//cursoNuevo = true;
cursoNuevo = "Javascript";
cursoNuevo = 2; //TypeScript

function getCurso(): Curso {
  //return 'Javascript';
  return 1;
}

//Arreglos
let cursos: string[] = ["Javascript", "Typescript"];
let cursos2: Curso[] = ["Javascript", "Typescript", 1];

console.log("cursos", cursos);
console.log("cursos", cursos2);
