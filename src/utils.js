export const getRandoms = (textArray, threshold) =>
  textArray.reduce((acc, val, index) => {
    let random = Math.random();

    // if not first element
    if (acc.length !== 0) {
      const prev = acc[index - 1];
      const tooClose = (a, b) => Math.abs(a - b) < threshold;

      // generate another num if too close to previous value
      while (tooClose(random, prev)) {
        random = Math.random();
      }
    }
    return acc.concat([random]);
  }, []);

export const randomToDelay = (random, min, max) => {
  const float = random * (max - min);
  return parseInt(float, 10) + min;
};
