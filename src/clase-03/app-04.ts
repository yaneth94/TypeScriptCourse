export {};

// ENUMERADOS EN TYPESCRIPT

//type Curso: string | number;
enum Curso {
  JavaScript,
  TypeScript, // indice=1
  React,
}

let curso: Curso = Curso.React;
// la salida es la posicion
console.log("curso", curso);
console.log("curso", Curso[curso]);

// Otro ejemplo
enum Dia {
  Lunes, // i=0
  Martes,
  Miercoles,
  Jueves,
  Viernes, // i =4
}

console.log("Viernes", Dia.Viernes);

enum FinSemana {
  Sabado = 5,
  Domingo,
}

console.log("Sabado", FinSemana.Sabado);
console.log("Domingo", FinSemana.Domingo);

//Control sobre los valores para Enumerados
enum Mes {
  Enero = "Ene",
  Febrero = "Feb",
  Marzo = "Mar",
  Abril = "Abr",
  Mayo = "May",
  Junio = "Jun",
}

console.log("Junio", Mes.Junio);
