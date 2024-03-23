/**
 * Gets a semi-random number between the given 2 numbers.
 * @param num1
 * @param num2
 */
export function randomBetween(num1: number, num2: number) {
  let min = Math.min(num1, num2)
  const max = Math.max(num1, num2)

  // use at least 2 digits for max during display scramble
  if (min < 10) min = 99

  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomNum() {
  var array = new Uint32Array(1)
  crypto.getRandomValues(array)
  return array[0]
}

export type CoinValue = 'head' | 'tail'
/**
 * Gets a random coin toss result.
 * @returns
 */
export function tossCoin(): CoinValue {
  return getRandomNum() % 2 == 0 ? 'head' : 'tail'
}

export type DiceValue = 1 | 2 | 3 | 4 | 5 | 6
/**
 * Gets a random dice roll result.
 * @returns
 */
export function rollDice() {
  return (1 + (getRandomNum() % 6)) as DiceValue
}

/**
 * Shuffles array items. The original array is modified.
 * @param array 
 * @returns 
 */
export function shuffleArray<T>(array: T[]) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}
