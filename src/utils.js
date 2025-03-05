export function capitalizeFirstLetter(str) {
  if (!str) {
    return str;
  } // Проверка на пустую строку
  return str.charAt(0).toUpperCase() + str.slice(1);
}
