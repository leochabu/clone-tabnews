// import "Calculadora"
// import Calculadora from "../models/calculadora";

const Calculadora = require("../../models/calculadora");
const calc = new Calculadora();

test("nome", () => {
  //cal = new Calculadora()
  let res = calc.dividir([8,2]);

  expect(res).toBe(4);
});
