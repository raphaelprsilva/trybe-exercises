const { expect } = require("chai");

const { setFileContent } = require("../setFileContent");

describe("function setFileContent tests", () => {
  describe("Test the setFileContent existance and type", () => {
    it("Test if setFileContent function exists", () => {
      expect(setFileContent).to.exist;
    });
    it('Test if setFileContent is a "function"', () => {
      expect(setFileContent).to.be.a("function");
    });
  });
  describe("Tests setFileContent function", () => {
    it('setFileContent("./nomeDoAruivo.txt", "texto") should return "ok"', () => {
      const result = setFileContent("./nomeDoArquivo.txt", "texto");
      expect(result).to.be.equal("ok");
    });

    it('setFileContent("./nomeDoArquivo.txt") should return "Digite o conteúdo do aquivo"', () => {
      const result = setFileContent("./nomeDoAruivo.txt");
      expect(result).to.be.equal("Digite o conteúdo do aquivo.");
    });
  });
});
