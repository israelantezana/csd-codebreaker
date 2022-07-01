import fs from "fs";

describe("Codebreaker UI", () => {
  it("mostrar el nombre del juego", () => {
    document.body.innerHTML = fs.readFileSync("codebreaker.html", "utf8");
    const h1 = document.querySelector("#titulo");
    expect(h1.innerHTML).toEqual("Codebreaker");
  });

  it("No muestra ningun mensaje de ganador al iniciar", () => {
    document.body.innerHTML = fs.readFileSync("codebreaker.html", "utf8");
    const resultado = document.querySelector("#resultado");
    expect(resultado.innerHTML).toEqual("");
  });
});
