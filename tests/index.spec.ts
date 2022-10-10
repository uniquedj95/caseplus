import { camelToUnderscore, underscoreToPascal } from '../src/index';

describe("underscoreToPascal", ()=> {
  test("Convert underscore cased string to pascal cased string", () => {
    expect(underscoreToPascal("my_awesome_variable")).toBe("MyAwesomeVariable")
  })

  test("Return empty string when passed string is empty", () => {
    expect(underscoreToPascal("")).toBe("")
  })

  test("Trim/Remove excess underscores", () => {
    expect(underscoreToPascal("_my__Variable")).toBe("MyVariable")
  })
})

describe("camelToUnderscore", ()=> {  
  test("Convert camel cased string to underscore cased string", () => {
    expect(camelToUnderscore("myAwesomeVariable")).toBe("my_awesome_variable")
  })

  test("Return empty string when passed string is empty", () => {
    expect(underscoreToPascal("")).toBe("")
  })
})