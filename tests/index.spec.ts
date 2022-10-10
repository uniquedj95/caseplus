import { camelToUnderscore, underscoreToPascal } from '../src/index';

describe("underscoreToPascal", ()=> {
  test("Convert underscore cased string to pascal cased string", () => {
    expect(underscoreToPascal("my_awesome_variable")).toBe("MyAwesomeVariable")
  })
})

describe("camelToUnderscore", ()=> {  
  test("Convert camel cased string to underscore cased string", () => {
    expect(camelToUnderscore("myAwesomeVariable")).toBe("my_awesome_variable")
  })
})