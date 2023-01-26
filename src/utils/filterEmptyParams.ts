export const filterEmptyParams = (params: {}): {} => {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([k, v]) => typeof v !== "undefined" && v !== null
    )
  );
};
