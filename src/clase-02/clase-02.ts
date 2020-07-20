// Tipos primitivos o Tipos Basicos
// Boolean
let estaConectado = true;
let estaInscrito: boolean;
estaInscrito = false;
estaInscrito = true;
// estaInscrito = 2; NO es valido

function tieneDescuento(curso: string) {
  if (curso == "typeScript") {
    return true;
  }
  return false;
}

console.log(`tieneDescuento('angular'): ${tieneDescuento("angular")}`);

// Number
let estudiantes = 100;
// estudiantes = '100'; NO es valido
let cantidadEstudiantes: number;
cantidadEstudiantes = 120;

function getCantidadEstudiantes(curso: string): number {
  if (curso == "typeScript") return 100;
  return 0;
}

let inscritosCursoTypeScript: number = 100;

console.log(
  `getCantidadEstudiantes('angular'): ${getCantidadEstudiantes("angular")}`
);

// Type: Number, hexadecimales
let decimal: number = 10;
let hexadecimal: number = 0xf00d;
console.log("hexadecimal", hexadecimal);
console.log("decimal", decimal);

// Type Number, binario
let binario: number = 0b1001;
console.log("binario", binario);

//Type Number, octal
let octal: number = 0o755;
console.log("octal", octal);

//String
let nombre = "Zoila";
let apellido: string = "Villatoro";
let nombreCompleto = nombre + " " + apellido;

console.log("Nombre Completo: ", nombreCompleto);

// String + ES6 Template Literals
let nombreCompleto2 = `${nombre} ${apellido}`;
console.log("Nombre Completo 2 : ", nombreCompleto2);

let arregloCursos = ["TypeScript", "Angular"];
let mensaje = `
Mi nombre es ${nombreCompleto} y tengo ${arregloCursos.length} cursos
Gracias por asistir
`;

console.log(mensaje);

// Tipos Especiales en TypeScript
// Tipo: Any
let desconocido; // Seria como definir var desconocido
desconocido = "Hola";
desconocido = 2;

let desconocido2: any = 2;
desconocido2 = true;
desconocido2 = "Hola";

// Tipo: Void
let vacio: void;
function mostrarContenido(curso: string): void {
  const mensaje = curso ? `Bienvenido al curso ${curso}` : "Suscribete!";
  console.log(mensaje);
}

mostrarContenido("React");

// Tipo Never
let nunca: never;
function retornaError(error: string): never {
  throw new Error("Error TypeScript" + error);
  // Nunca retorna un valor
}
//retornaError("Valor inesperado");

function cicloInfinito(): never {
  while (true) {}
}

//Tipo: Null y Undefined
let variableUndefined: undefined = undefined;
let variableNull: null = null;

function retornoNull(): null {
  return null;
}

function retornoUndefined(): undefined {
  return undefined;
}

let variableSinValor: undefined = undefined;
console.log("variableSinValor", variableSinValor);

//Funciones en TypeScript
// ? opcional
function saludo_f(nombre?: string): string {
  if (nombre) return "Hola " + nombre;
  return "Hola";
}

console.log(saludo_f(nombreCompleto));
console.log(saludo_f());

// Arreglos en TypeScript
let cursos_a: string[];
cursos_a = ["TypeScript", "React"];

// Arreflos con generics
let nombres: Array<string>;
nombres = ["Luis", "Erick", "Zoila"];

let arreglo: any[] = [2, "cadena", true]; // Evitar any

//Tuplas

let infoCursos: [string, number] = ["typeScript", 100];
infoCursos = ["angular", 200];

let curso: [string, number, string] = ["typeScript", 150, "08/2019"];
console.log("curso", curso);
let nuevoInscritos = 10;

//accder a cada elemento
console.log("fecha de inicio: ", curso[2]);
console.log("Total de Inscritos: ", curso[1] + nuevoInscritos);

let tuplaTest: [string, string] = ["a", "b"];
let tuplaTemp: [string, string] = ["c", "d"];

tuplaTemp = tuplaTest;
console.log("tuplaTemp", tuplaTemp);
