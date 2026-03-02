function cleanFilters(filters) {
  return Object.fromEntries(
    Object.entries(filters).filter(
      ([, value]) => value !== "" && value !== null && value !== void 0
    )
  );
}
export {
  cleanFilters as c
};
