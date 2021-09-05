const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const bg_colors = colors.slice();
const idx1 = Math.floor(Math.random() * bg_colors.length);
bg_colors.splice(idx1, 1);
const idx2 = Math.floor(Math.random() * bg_colors.length);
document.body.style.background = `linear-gradient(to right, ${colors[idx1]}, ${colors[idx2]})`;
