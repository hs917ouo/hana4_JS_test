Array.prototype.sortBy = function (sortProp = "") {
  const arr = sortProp.split(",");
  // arr.reverse();
  for (prop of arr) {
    const [key, direction = "asc"] = prop?.split(":");
    const dir = direction.toLowerCase() === "desc" ? -1 : 1;
    this.sort((a, b) => (a[key] > b[key] ? dir : -dir));
  }
  return this;
};
