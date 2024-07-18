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

// API
// raw.githubusercontent.com/courseraap/capstone/main/api.js
const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};
export const submitAPI = function (formData) {
  return true;
};
