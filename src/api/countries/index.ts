const get = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fddfd3adb1msh32a2101397ffb2cp189006jsn8273c7b9ad32",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  const resp = await fetch(
    "https://wft-geo-db.p.rapidapi.com/v1/geo/countries",
    options
  );

  const data = await resp.json();

  console.log(data);
};

export const countriesApi = { get };
