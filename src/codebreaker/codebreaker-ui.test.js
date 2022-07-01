import fs from "fs";

describe("Codebreaker UI", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("codebreaker.html", "utf8");
  });
  it("mostrar el nombre del juego", () => {
    const h1 = document.querySelector("#titulo");
    expect(h1.innerHTML).toEqual("Codebreaker");
  });

  it("No muestra ningun mensaje de ganador al iniciar", () => {
    const resultado = document.querySelector("#resultado");
    expect(resultado.innerHTML).toEqual("");
  });
});
