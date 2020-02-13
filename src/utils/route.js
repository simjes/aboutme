const urlifyName = name => {
  return name.toLowerCase().replace(/ /g, '-');
};

module.exports = {
  urlifyName,
};
