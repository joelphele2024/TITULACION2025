// Datos simulados basados en tu archivo Excel
const datosEstudiantes = [
  { dni: "12345678", fechaNac: "1993-04-08", nombre: "JOSE GARCIA AGUERA", especialidad: "ESTILISTO", teorico: 15, practico: 14 },
  { dni: "98765432", fechaNac: "1990-04-08", nombre: "MARIA JOFEFINA DULIA", especialidad: "COMPUTACION", teorico: 14, practico: 16 },
  { dni: "85185186", fechaNac: "1987-04-08", nombre: "JOSE GARCIA AGUERA", especialidad: "ESTILISTO", teorico: 15, practico: 14 },
  { dni: "71604940", fechaNac: "1984-04-08", nombre: "MARIA JOFEFINA DULIA", especialidad: "COMPUTACION", teorico: 14, practico: 16 },
  { dni: "58024694", fechaNac: "1981-04-08", nombre: "JOSE GARCIA AGUERA", especialidad: "ESTILISTO", teorico: 15, practico: 14 },
  { dni: "44444448", fechaNac: "1978-04-08", nombre: "MARIA JOFEFINA DULIA", especialidad: "COMPUTACION", teorico: 14, practico: 16 },
  { dni: "30864202", fechaNac: "1975-04-08", nombre: "JOSE GARCIA AGUERA", especialidad: "ESTILISTO", teorico: 15, practico: 14 },
  { dni: "17283956", fechaNac: "1972-04-08", nombre: "MARIA JOFEFINA DULIA", especialidad: "COMPUTACION", teorico: 14, practico: 16 },
  { dni: "73703710", fechaNac: "1969-04-08", nombre: "JOSE GARCIA AGUERA", especialidad: "ESTILISTO", teorico: 15, practico: 14 },
  { dni: "90123464", fechaNac: "1966-04-08", nombre: "MARIA JOFEFINA DULIA", especialidad: "COMPUTACION", teorico: 14, practico: 16 }
];

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const dni = document.getElementById("dni").value.trim();
  const fechaNac = document.getElementById("fechaNac").value;

  const resultadoDiv = document.getElementById("resultado");
  const errorDiv = document.getElementById("error");

  // Limpiar resultados anteriores
  resultadoDiv.classList.add("d-none");
  errorDiv.classList.add("d-none");
  errorDiv.textContent = "";

  // Buscar estudiante
  const estudiante = datosEstudiantes.find(
    item => item.dni === dni && item.fechaNac === fechaNac
  );

  if (estudiante) {
    // Mostrar datos
    document.getElementById("nombre").textContent = estudiante.nombre;
    document.getElementById("dniMostrar").textContent = estudiante.dni;
    document.getElementById("fechaNacMostrar").textContent = estudiante.fechaNac;
    document.getElementById("especialidad").textContent = estudiante.especialidad;
    document.getElementById("teorico").textContent = estudiante.teorico;
    document.getElementById("practico").textContent = estudiante.practico;

    resultadoDiv.classList.remove("d-none");
  } else {
    errorDiv.textContent = "DNI o Fecha de Nacimiento incorrectos.";
    errorDiv.classList.remove("d-none");
  }
});