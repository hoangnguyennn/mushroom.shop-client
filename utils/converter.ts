export const removeFalsyFields = (object: any) => {
  return Object.entries(object).reduce((result: any, [key, value]) => {
    if (value) {
      result[key] = value;
    }

    return result;
  }, {});
};

export const imageUrlToSpecificSize = (
  url: string,
  width: number,
  height: number
) => {
  if (!width || !height) {
    return '';
  }

  const regex = /https:\/\/res.cloudinary.com\/hoangnguyennn\/image\/upload\//i;
  const replacer = `$&w_${width},h_${height},c_scale/`;
  const newUrl = String(url).replace(regex, replacer);
  return newUrl;
};
