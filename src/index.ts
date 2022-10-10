/**
 *  A function that convert an underscore cased string to Pascal Cased string
 * 
 * @param {String} str an underscore cased string. e.g. my_variable
 * @returns a Pascal cased string e.g MyVariable
 */
 export function underscoreToPascal(str: string): string {
  return str.split('_').reduce((str, word) => str + word.charAt(0).toUpperCase() + word.slice(1), '')
}

/**
 *  A function that convert an camelCased string to underscore_cased string
 * 
 * @param {String} str a Camel cased string e.g myVariablean 
 * @returns an underscore cased string. e.g. my_variable
 */
export function camelToUnderscore(str: string): string {
  return str.split(/(?=[A-Z])/).join('_').toLowerCase()
}