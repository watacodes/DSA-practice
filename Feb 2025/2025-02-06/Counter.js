// 2620. Counter

/**
 * @param {number} n
 * @return {Function} counter
 */

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

const createCounter = (n) => {
  let countTimes = -1;
  return () => {
    countTimes++;
    return n + countTimes;
  };
};
