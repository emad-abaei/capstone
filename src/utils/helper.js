const newDate = new Date();
const year = newDate.getFullYear();
const month = newDate.getMonth() + 1;
const day = newDate.getDate();

function doubleFigure(num) {
  return num < 10 ? num.toString().padStart(2, "0") : num;
}

export function getToday() {
  const todayDate = `${year}-${doubleFigure(month)}-${doubleFigure(day)}`;

  return todayDate;
}
