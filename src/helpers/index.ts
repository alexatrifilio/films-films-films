export const mapToArray = (object: any) => {
  const array = [];

  for (const elem in object) {
    array.push({
      ...object[elem],
      id: elem,
    });
  }
  return array;
};

export const randomKey = () => {
  let result = "";
  const characts =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 9; i++) {
    result += characts.charAt(Math.floor(Math.random() * characts.length));
  }
  console.log(result);
  return result;
};
