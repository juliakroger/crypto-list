export const formatDollar = ({ value = 0, digits = 0, currency = "USD" }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: digits, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: digits, // (causes 2500.99 to be printed as $2,501)
  });

  return formatter.format(value);
};
