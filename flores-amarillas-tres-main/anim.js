// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando", time: 14 },
  { text: "Con una flor amarilla", time: 15 },
  { text: "Ella lo estaba soñando", time: 23 },
  { text: "Con la luz en su pupila", time: 24 },
  { text: "Y el amarillo del Sol", time: 30 },
  { text: "Iluminaba la esquina", time: 31 },
  { text: "Lo sentía tan cercano", time: 38 },
  { text: "Lo sentía desde niña", time: 39 },
  { text: "Ella sabía que él sabía", time: 45 },
  { text: "Que algún día pasaría", time: 46 },
  { text: "Que vendría a buscarla", time: 47 },
  { text: "Con sus flores amarillas", time: 49 },
  { text: "No te apures, no detengas", time: 57 },
  { text: "El instante del encuentro", time: 58 },
  { text: "Está dicho que es un hecho", time: 60 },
  { text: "No la pierdas, no hay derecho", time: 62 },
  { text: "No te olvides que la vida", time: 64 },
  { text: "Casi nunca está dormida", time: 70 },
  { text: "En ese bar tan desierto", time: 90 },
  { text: "Nos esperaba el encuentro", time: 96 },
  { text: "Ella llegó en limusina", time: 101 },
  { text: "Amarilla por supuesto", time: 103 },
  { text: "Él se acercó de repente", time: 109 },
  { text: "La miro tan de frente", time: 111 },
  { text: "Toda una vida soñada", time: 114 },
  { text: "Y no pudo decir nada...", time: 116 },
  { text: "Ella sabía que él sabía", time: 123 },
  { text: "Que algún día pasaría", time: 124 },
  { text: "Que vendría a buscarla", time: 125 },
  { text: "Con sus flores amarillas", time: 127 },
  { text: "No te apures, no detengas", time: 134 },
  { text: "El instante del encuentro", time: 135 },
  { text: "Está dicho que es un hecho", time: 137 },
  { text: "No la pierdas, no hay derecho", time: 138 },
  { text: "No te olvides que la vida", time: 141 },
  { text: "Casi nunca está dormida", time: 145 },
  { text: "Ella sabía que él sabía", time: 167 },
  { text: "Que algún día pasaría", time: 168 },
  { text: "Que vendría a buscarla", time: 169 },
  { text: "Con sus flores amarillas", time: 171 },
  { text: "No te apures, no detengas", time: 178 },
  { text: "El instante del encuentro", time: 179 },
  { text: "Está dicho que es un hecho", time: 181 },
  { text: "No la pierdas, no hay derecho", time: 182 },
  { text: "No te olvides que la vida", time: 185 },
  { text: "Casi nunca está dormida", time: 189 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);