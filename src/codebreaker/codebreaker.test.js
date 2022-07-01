import Codebreaker from "./codebreaker";

describe("Codebreaker logica", () => {
  it("indica que gane cuando adivino el codigo secreto", () => {
    const cb = new Codebreaker("5");
    const mensaje = cb.adivinar("5");
    expect(mensaje).toEqual("Ganaste!");
  });
});
