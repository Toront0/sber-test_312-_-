const excludedField = (val) => {
  return "__" + val + "__";
};

// const translateField = (translations, field) => {
//     const fieldIdx = translations.findIndex(v => v.)

// }

export const decoder = (encoded, translations) => {
  const res = [];

  for (let i = 0; i < encoded.length; i++) {
    const iterObj = {};

    for (let [key, value] of Object.entries(encoded[i])) {
      if (typeof value === "string" && !isNaN(+value)) {
        for (let [tKey, tValue] of Object.entries(translations)) {
          if (tKey === value) {
            iterObj[key] = tValue;
          } else {
          }
        }
      } else {
        iterObj[excludedField(key)] = value;
      }
    }

    res.push(iterObj);
  }

  return res;
};
