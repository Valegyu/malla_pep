const ramos = [
    { id: "EPI_JUEGO", nombre: "Epistemología del Juego y de la Infancia", semestre: 1, requisitos: [] },
  { id: "ANTROPOLOGIA", nombre: "Socio Antropología Educacional", semestre: 1, requisitos: [] },
  { id: "IDENTIDAD_DOCENTE", nombre: "Construcción de la Identidad Profesional Docente", semestre: 1, requisitos: [] },
  { id: "HISTORIA_ED_PARV", nombre: "Fundamentos e Historia de la Educación Parvularia", semestre: 1, requisitos: [] },
  { id: "DESARROLLO_PERSONAL", nombre: "Desarrollo Personal y Psicodinámica de las RR.HH.", semestre: 1, requisitos: [] },
  { id: "HABILIDADES_PENSAMIENTO", nombre: "Desarrollo de Habilidades de Pensamiento", semestre: 1, requisitos: [] },

  { id: "FILOSOFIA", nombre: "Filosofía Educacional", semestre: 2, requisitos: [] },
  { id: "PSICOLOGIA_APRENDIZAJE", nombre: "Bases Psicológicas del Aprendizaje", semestre: 2, requisitos: [] },
  { id: "PED_COMUNITARIA", nombre: "Pedagogía Comunitaria, Familias y Comunidades", semestre: 2, requisitos: ["ANTROPOLOGIA"] },
  { id: "CONTEXTOS_EDUCATIVOS", nombre: "Contextos Educativos en Educación Parvularia", semestre: 2, requisitos: ["IDENTIDAD_DOCENTE", "HISTORIA_ED_PARV", "DESARROLLO_PERSONAL"] },
  { id: "EXPRESION_CORPOREIDAD", nombre: "Expresión de la Corporeidad", semestre: 2, requisitos: ["DESARROLLO_PERSONAL"] },
  { id: "COMUNICACION_ORAL", nombre: "Comunicación Oral y Escrita", semestre: 2, requisitos: [] },
  { id: "ENFOQUES_CURRICULARES", nombre: "Enfoques Curriculares", semestre: 3, requisitos: ["IDENTIDAD_DOCENTE"] },
  { id: "PSICOLOGIA_DESARROLLO", nombre: "Procesos Psicológicos del Desarrollo Humano", semestre: 3, requisitos: ["PSICOLOGIA_APRENDIZAJE"] },
  { id: "MEDIACION_PEDAGOGICA", nombre: "Fundamentos de la Mediación Pedagógica", semestre: 3, requisitos: ["DESARROLLO_PERSONAL"] },
  { id: "BASES_BIO_1", nombre: "Bases Biológicas y Ecológicas del Desarrollo Humano 1", semestre: 3, requisitos: [] },
  { id: "CORPOREIDAD_MOTRICIDAD", nombre: "Corporeidad y Motricidad", semestre: 3, requisitos: ["EXPRESION_CORPOREIDAD"] },
  { id: "INGLES", nombre: "Desarrollo de la Comprensión Lectora en Inglés", semestre: 3, requisitos: [] },

  { id: "INCLUSION_PARVULARIA", nombre: "Inclusión y Contextos Educativos en Educación Parvularia", semestre: 4, requisitos: ["PSICOLOGIA_DESARROLLO", "BASES_BIO_1"] },
  { id: "CONDUCTA_INFANTIL", nombre: "Interpretación de la Conducta Infantil", semestre: 4, requisitos: ["PSICOLOGIA_DESARROLLO"] },
  { id: "FUNCIONES_PARVULO", nombre: "Desarrollo de Funciones Emocionales y Cognitivas del Párvulo", semestre: 4, requisitos: ["MEDIACION_PEDAGOGICA"] },
  { id: "BASES_BIO_2", nombre: "Bases Biológicas y Ecológicas del Desarrollo Humano II", semestre: 4, requisitos: ["BASES_BIO_1"] },
  { id: "GENERO", nombre: "Pedagogía en Identidad de Género", semestre: 4, requisitos: [] },
  { id: "TEORIAS_EDUCACION", nombre: "Teorías de la Educación", semestre: 4, requisitos: [] },
  { id: "TEORIA_EVALUATIVA", nombre: "Teoría Evaluativa", semestre: 5, requisitos: ["ENFOQUES_CURRICULARES"] },
  { id: "MUSICA_EXPRESION", nombre: "Apreciación y Expresión Musical Del/la Educador/a de Párvulos", semestre: 5, requisitos: ["CORPOREIDAD_MOTRICIDAD"] },
  { id: "CURRICULUM_PARVULARIA", nombre: "Currículum de la Educación Parvularia", semestre: 5, requisitos: ["ENFOQUES_CURRICULARES"] },
  { id: "DISENO_CURRICULAR_1", nombre: "Diseño Curricular de la Educación Parvularia 1", semestre: 5, requisitos: ["ENFOQUES_CURRICULARES"] },
  { id: "DIDACTICA_MATEMATICA", nombre: "Didáctica del Pensamiento Matemático en Educación Parvularia", semestre: 5, requisitos: ["FUNCIONES_PARVULO"] },
  { id: "EPI_INVESTIGACION", nombre: "Epistemología y Paradigmas de la Investigación Educativa", semestre: 5, requisitos: ["TEORIAS_EDUCACION"] },

  { id: "DISENO_EVALUACION_1", nombre: "Diseño de Procesos Evaluativos en Educación Parvularia 1", semestre: 6, requisitos: ["CURRICULUM_PARVULARIA", "TEORIA_EVALUATIVA"] },
  { id: "DISENO_ENSEÑANZA", nombre: "Diseño de Procesos de Enseñanza y Aprendizaje en Educación Parvularia", semestre: 6, requisitos: ["CURRICULUM_PARVULARIA", "DISENO_CURRICULAR_1"] },
  { id: "DIDACTICA_MUSICAL", nombre: "Didáctica de la Expresión Musical y Teatral en el Párvulo", semestre: 6, requisitos: ["MUSICA_EXPRESION"] },
  { id: "DIDACTICA_CIENCIAS", nombre: "Didáctica de las Ciencias Sociales, Naturales y Pensamiento Matemático en Educación Parvularia", semestre: 6, requisitos: ["DISENO_CURRICULAR_1", "DIDACTICA_MATEMATICA"] },
  { id: "PRACTICA_SALA_CUNA", nombre: "Práctica Pedagógica Sala Cuna y Nivel Medio", semestre: 6, requisitos: ["DISENO_CURRICULAR_1"] },
  { id: "ANALISIS_INVESTIGACION", nombre: "Análisis de Proyectos de Investigación Educativa", semestre: 6, requisitos: ["EPI_INVESTIGACION"] },
  { id: "LIDERAZGO", nombre: "Liderazgo Pedagógico", semestre: 7, requisitos: [] },
  { id: "DISENO_CURRICULAR_2", nombre: "Diseño Curricular de la Educación Parvularia 2", semestre: 7, requisitos: ["DISENO_EVALUACION_1", "DISENO_CURRICULAR_1"] },
  { id: "DISENO_EVALUACION_2", nombre: "Diseño de Procesos Evaluativos en Educación Parvularia 2", semestre: 7, requisitos: ["DISENO_EVALUACION_1"] },
  { id: "DIDACTICA_LENGUAJE_1", nombre: "Didáctica del Lenguaje Verbal 1", semestre: 7, requisitos: [] },
  { id: "PRACTICA_TRANSICION", nombre: "Práctica Pedagógica Nivel de Transición", semestre: 7, requisitos: ["PRACTICA_SALA_CUNA"] },
  { id: "METODOLOGIA_INVESTIGACION", nombre: "Metodología de la Investigación Educacional", semestre: 7, requisitos: ["ANALISIS_INVESTIGACION"] },

  { id: "TALLER_GESTION", nombre: "Taller de Gestión e Innovación en Educación Parvularia", semestre: 8, requisitos: ["PRACTICA_TRANSICION"] },
  { id: "DISENO_CURRICULAR_3", nombre: "Diseño Curricular de la Educación Parvularia 3", semestre: 8, requisitos: ["DISENO_CURRICULAR_2"] }, 
  { id: "CONVIVENCIA", nombre: "Convivencia Democrática en Contextos Educativos", semestre: 8, requisitos: ["PRACTICA_TRANSICION"] },
  { id: "RECURSOS_DIGITALES", nombre: "Recursos Digitales para el Aprendizaje Del/la Educador/a de Párvulos", semestre: 8, requisitos: [] },
  { id: "LENGUAJE_VISUAL", nombre: "Lenguaje Plástico Visual del Párvulo", semestre: 8, requisitos: [] },
  { id: "DIDACTICA_LENGUAJE_2", nombre: "Didáctica del Lenguaje Verbal II y Literatura Infantil", semestre: 8, requisitos: ["DIDACTICA_LENGUAJE_1"] },
  { id: "SEMINARIO", nombre: "Seminario de Licenciatura en Educación", semestre: 8, requisitos: ["METODOLOGIA_INVESTIGACION"] },
  { id: "ETICA", nombre: "Controversias Éticas en la Identidad Profesional Del/la Educador/a de Párvulos", semestre: 9, requisitos: ["CONVIVENCIA"] },
  { id: "LENGUAJES_ARTISTICOS", nombre: "Lenguajes Artísticos Integrados", semestre: 9, requisitos: ["DIDACTICA_MUSICAL"] },
  { id: "INTEGRACION_DISCIPLINAR", nombre: "Trabajo de Integración Disciplinar Didáctico en Educación Parvularia", semestre: 9, requisitos: ["DIDACTICA_LENGUAJE_2", "DIDACTICA_MUSICAL", "DIDACTICA_CIENCIAS"] },
  { id: "PENSAMIENTO_CRITICO", nombre: "Pensamiento Crítico y Resolución de Problemas", semestre: 9, requisitos: [] },

  { id: "PRACTICA_PROFESIONAL", nombre: "Práctica Profesional", semestre: 10, requisitos: ["ETICA", "LENGUAJES_ARTISTICOS", "INTEGRACION_DISCIPLINAR", "PENSAMIENTO_CRITICO"] },
  { id: "FORMACION_CIUDADANA", nombre: "Educación y Formación Ciudadana", semestre: 10, requisitos: [] }
];
const estadoRamos = {};

function crearMalla() {
  const malla = document.getElementById("malla");
  const semestres = [...new Set(ramos.map(r => r.semestre))].sort();

  semestres.forEach(sem => {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h2>Semestre ${sem}</h2>`;

    ramos.filter(r => r.semestre === sem).forEach(ramo => {
      const btn = document.createElement("div");
      btn.className = "ramo bloqueado";
      btn.textContent = ramo.nombre;
      btn.dataset.id = ramo.id;

      btn.addEventListener("click", () => aprobarRamo(ramo.id));
      div.appendChild(btn);
      estadoRamos[ramo.id] = { aprobado: false, element: btn };
    });

    malla.appendChild(div);
  });

  actualizarRamos();
}

function aprobarRamo(id) {
  const ramo = estadoRamos[id];
  if (ramo.aprobado || ramo.element.classList.contains("bloqueado")) return;

  ramo.aprobado = true;
  ramo.element.classList.add("aprobado");
  ramo.element.classList.remove("bloqueado");
  actualizarRamos();
}

function actualizarRamos() {
  for (const r of ramos) {
    if (estadoRamos[r.id].aprobado) continue;

    const requisitosAprobados = r.requisitos.every(req => estadoRamos[req]?.aprobado);
    if (requisitosAprobados) {
      estadoRamos[r.id].element.classList.remove("bloqueado");
    } else {
      estadoRamos[r.id].element.classList.add("bloqueado");
    }
  }
}
