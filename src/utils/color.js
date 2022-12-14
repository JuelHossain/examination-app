import convert from "color-convert";
import tailColors from "tailwindcss/colors";

const hexColors = Object.entries(tailColors).slice(5);

const convertToRgb = (color, key) => {
  const rgbColor = convert.hex.rgb(color).join(" ");
  const colorKey = `--main-${key}`;
  return { [colorKey]: rgbColor };
};

export const rgbColors = {};

hexColors.forEach((a) => {
  const colorName = a[0];
  const colors = a[1];
  const rgbColorsObject = {};
  Object.keys(colors).forEach((key) => {
    const color = colors[key];
    Object.assign(rgbColorsObject, convertToRgb(color, key));
  });
  Object.assign(rgbColors, { [colorName]: rgbColorsObject });
});

export const colors = [
  { name: "pink", class: "bg-pink-500" },
  { name: "green", class: "bg-green-500" },
  { name: "purple", class: "bg-purple-500" },
  { name: "orange", class: "bg-orange-500" },
  { name: "blue", class: "bg-blue-500" },
];
