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

  return result;
};

export const formatDate = (inputDate: Date): string => {
  let date: string | number;
  let month: string | number | any;
  let year: string | number;
  let hour: string | number;
  let minutes: string | number;

  const dateToFormat = new Date(inputDate);

  date = dateToFormat.getDate();
  month = dateToFormat.getMonth().toString();
  year = dateToFormat.getFullYear();
  hour = dateToFormat.getHours();
  minutes = dateToFormat.getMinutes();

  if (hour < 1) {
    date = date + 1;
  }

  if (date < 10) {
    date = "0" + date;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  const monthsOnString = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return `${date} de ${monthsOnString[month]} de ${year}, ${hour}:${minutes}`;
};
