//comprobar adultez
let edadPermiso = parseInt(prompt("Ingrese su edad"));
function mayorQue(x){
    return (num) => num > x;
};
const mayor17 = mayorQue(17);


if (mayor17(edadPermiso)){

//clase constructora del paciente
class paciente{
    constructor (nombre, apellido, edad){
    this.nombre = nombre.toUpperCase();
    this.apellido = apellido;
    this.edad = parseInt(edad);
   }
}

// declaracion de array y variable
let misPacientes = [];
let edadPaciente =[];
let respuesta = "SI";
let fechaActual = new Date().toDateString();

//ingreso de pacientes hasta que no quiera ingresar mas
do {
let nombre = prompt ("Ingrese  nombre del paciente.");
let apellido = prompt("Ingrese su apellido.");
let edad = parseInt(prompt("Ingrese su edad."));
edadPaciente.push(edad);
let pacienteDia = new paciente(nombre, apellido, edad);
misPacientes.push(pacienteDia);
console.log("La cantidad de pacientes a atender el dia " + fechaActual  + " son: " + misPacientes.length);
respuesta = prompt("Desea seguir ingresando pacientes para hoy? SI / NO");
} while (respuesta.toUpperCase() !== "NO"); 

let ordenPaciente = parseInt(prompt ("Ingrese un numero para saber que paciente esta en ese numero de fila"));
console.log("El paciente numero " , ordenPaciente , " es " , misPacientes[ordenPaciente - 1]);

// filtrado de pacientes segun nombre

let unNombreBuscado = prompt("Ingrese el nombre de un paciente  para ver si tiene turno.");
let unPacienteBuscado = misPacientes.filter(
    (pacienteDia) => pacienteDia.nombre === unNombreBuscado.toUpperCase() );
console.log( "La cantidad de pacientes para el dia " + fechaActual + " con el nombre " + unNombreBuscado + " son " + unPacienteBuscado.length);

// segun cuantos pacientes hay dice la edad
const mayor = Math.max(...edadPaciente);

if(misPacientes.length > 2){
console.log("El paciente mas grande para atender hoy tiene: " + mayor + " años");

} else{
    console.log("Hoy solo atendemos un paciente de:  " + edadPaciente [0] + " años");
}

//edad promedio de los pacientes

let total=0
for(let i of edadPaciente) total+=i;
console.log( "La edad promedio de los pacientes a atender hoy es:  " + Math.round (total / misPacientes.length) + " años");

}else{
    console.log("Disculpa, pagina solo para adultos");
}





