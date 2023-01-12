export const parseClassName = (classes: (string | null)[]) =>
  classes.filter(Boolean).join(" ");
