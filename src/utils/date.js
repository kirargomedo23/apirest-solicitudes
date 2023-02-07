exports.getDateCurrent = () => {
  const date = new Date();

  return date.toLocaleDateString("es-PE").split("/").reverse().join("-");
};
