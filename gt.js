import toNumber from './toNumber.js';

/**
 * Checks if `value` is greater than `other`.
 *
 * @since 3.9.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 * @see lt
 * @example
 *
 * gt(3, 1);
 * // => true
 *
 * gt(3, 3);
 * // => false
 *
 * gt(1, 3);
 * // => false
 */
function gt(value, other) {
  if (!(typeof value == 'string' && typeof other == 'string')) {
    value = toNumber(value);
    other = toNumber(other);
  }
  return value > other;
}

export default gt;
