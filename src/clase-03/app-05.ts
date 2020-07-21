// INTERFACES EN TYPESCRIPT

interface ICurso {
  nombre: string;
  identificador?: number;
}

let cursoTypeScript: ICurso = {
  nombre: "TypeScript",
  identificador: 1,
};

cursoTypeScript = {
  nombre: "JavaScript",
  identificador: 2,
};

let curso2: ICurso;
curso2 = {
  nombre: "Angular",
};
curso2 = {
  nombre: "React",
  identificador: 100,
};

console.log("cursoTypeScript", cursoTypeScript);
console.log("curso2", curso2);

// EXTENDIENDO INTERFACES  | HERENCIA DE INTERFACES

interface CursoEDTeam extends ICurso {
  costo: number;
}

const primerCurso: CursoEDTeam = {
  nombre: "TypeScript desde Cero", // ICurso
  identificador: 200, // ICurso
  costo: 500.5, // CursoEDTeam
};

console.log("primer Curso EDTeam", primerCurso);
