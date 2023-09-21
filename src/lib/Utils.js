/**
 * calculating mean
 * @param {array} data
 */
export const getMean = ( data ) => {
  const sum = data.reduce(
    ( acc, curr ) => acc + curr,
    0
  );
  return ( sum / data.length ).toFixed(3);
}

/**
 * calculating median
 * @param {array} data
 */
export const getMedian = ( data ) => {
  const _data = data.sort();
  if (data.length % 2 === 0) {
    let mid1 = _data[_data.length / 2 - 1];
    const mid2 = _data[_data.length / 2];
    return ( mid1 + mid2 ) / 2
  } else {
    return _data[Math.floor(_data.length / 2)];
  }
}

/**
 * calculating mean
 * @param {array} arr
 */
export const getMode = ( arr ) => {
  const freqMap = new Map();
  let maxFreq = 0
  let modes = []
  for (const elem of arr) {
    if (!freqMap.has(elem)) {
      freqMap.set(elem, 0)
    }
    freqMap.set(elem, freqMap.get(elem) + 1);
    if (freqMap.get(elem) > maxFreq) {
      maxFreq = freqMap.get(elem)
      modes = [elem];
    } else if (freqMap.get(elem) === maxFreq) {
      modes.push(elem)
    }
  }
  return modes
}
