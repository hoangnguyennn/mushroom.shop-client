const sorter = function <T>(
  a: T,
  b: T,
  field: keyof T,
  converter?: (value: any) => any
) {
  let aField = a[field];
  let bField = b[field];

  if (converter) {
    aField = converter(aField);
    bField = converter(bField);
  }

  if (aField > bField) return 1;
  if (aField < bField) return -1;
  return 0;
};

export default sorter;
