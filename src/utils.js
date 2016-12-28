export const getRandoms = (length, threshold) => {
  const tooClose = (a, b) => Math.abs(a - b) < threshold;

  const result = [];
  let random;

  for (let i = 0; i < length; i += 1) {
    random = Math.random();
    if (i !== 0) {
      const prev = result[i - 1];
      while (tooClose(random, prev)) {
        random = Math.random();
      }
    }
    result.push(random);
  }
  return result;
};

export const randomToDelay = (random, min, max) => {
  const float = random * (max - min);
  return parseInt(float, 10) + min;
};
