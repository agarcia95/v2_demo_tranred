console.log("Dashboard de Pagos - Tranred (solo barras)");

// Datos de ejemplo por días de la semana
const labels = ["Lun", "Mar", "Mié", "Jue", "Vie"];

// Serie por cliente (transacciones/día)
const data = {
  polar:       [50,  80,  60,  90,  40],
  digitel:     [70,  60,  50,  80, 100],
  telefonica:  [90, 100,  70,  80,  60],
  bancaribe:   [40,  60,  80,  50,  70]
};

// Estilo consistente (solo barras) y colores de marca
const layoutBase = (titulo) => ({
  title: { text: titulo, font: { size: 16, color: "#003e5b" } },
  margin: { t: 40, r: 10, b: 40, l: 40 },
  paper_bgcolor: "#ffffff",
  plot_bgcolor: "#ffffff",
  xaxis: { tickfont: { color: "#22343b" }, gridcolor: "#e8eef3" },
  yaxis: { tickfont: { color: "#22343b" }, gridcolor: "#e8eef3" },
});

// Helper para crear gráfico de barras
function barras(id, serie){
  Plotly.newPlot(
    id,
    [{
      x: labels,
      y: serie,
      type: "bar",
      marker: { color: "#003e5b" }, /* color principal */
      hovertemplate: "%{x}: %{y}<extra></extra>"
    }],
    layoutBase("Transacciones por día"),
    { displayModeBar: false, responsive: true }
  );
}

// Render por cliente (solo barras)
barras("chart-polar", data.polar);
barras("chart-digitel", data.digitel);
barras("chart-telefonica", data.telefonica);
barras("chart-bancaribe", data.bancaribe);