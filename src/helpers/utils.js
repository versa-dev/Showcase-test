export const objectSort = (data) => {
  let direction = true;
  let key = "endDate";
  data.sort(function (first, second) {
    if (direction) {
      if (first[key] > second[key]) return -1;
      return 1;
    }
    if (first[key] > second[key]) return 1;
    return -1;
  });
  return data;
};
