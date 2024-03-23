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