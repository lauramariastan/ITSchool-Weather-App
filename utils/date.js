const getDayOfTheWeek = timestamp => {
  const date = new Date(timestamp * 1000);

  const dayIndex = date.getDay();

  switch (dayIndex) {
    case 0:
      return "Duminica";

    case 1:
      return "Luni";

    case 2:
      return "Marti";

    case 3:
      return "Miercuri";

    case 4:
      return "Joi";

    case 5:
      return "Vineri";

    case 6:
      return "Sambata";

    default:
      throw new Error("Indexul trebuie sa fie intre 0 si 6!");
  }
};

const getHour = timestamp => {
  const date = new Date(timestamp * 1000);

  let hours = date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // return HH:MM
  return `${hours}:${minutes}`;
};
