const findUniquePaths = (a, b) => {
  if (a == 1 || b == 1) return 1;
  return findUniquePaths(a - 1, b) + findUniquePaths(a, b - 1);
};
