const caixaEletronico = require('../lib/caixa_eletronico');

describe('Caixa Eletronico', () => {
  describe('getNotes', () => {
    it('deve retornar notas de 10', () =>{
      expect(caixaEletronico.getNotes(10)).toEqual([10])
    });

    it('deve retornar notas de 20', () =>{
      expect(caixaEletronico.getNotes(20)).toEqual([20])
    });

    it('deve retornar duas notas de 20', () =>{
      expect(caixaEletronico.getNotes(40)).toEqual([20, 20])
    });

    it('deve retornar uma nota de cada', () => {
      expect(caixaEletronico.getNotes(180)).toEqual([100,50,20,10])
    });

    it('deve retornar uma nota de cada', () => {
      expect(caixaEletronico.getNotes(180)).toEqual([100,50,20,10])
    });

    it('deve retornar uma nota de 20', () => {
      expect(caixaEletronico.getNotes(20)).not.toContain(10);
    });

    it('deve retornar um array vazio', () => {
      expect(caixaEletronico.getNotes(0)).toEqual([]);
    });
  });

  describe('result', () => {
    it('deve imprimir nota única', () => {
      expect(caixaEletronico.result([10])).toEqual('Entregar 1 nota(s) de R$10,00')
    });

    it('deve imprimir duas notas de um mesmo valor', () => {
      expect(caixaEletronico.result([20, 20])).toEqual('Entregar 2 nota(s) de R$20,00')
    });

    it('deve imprimir notas diferentes', () => {
      expect(caixaEletronico.result([100,50])).toEqual('Entregar 1 nota(s) de R$100,00 e 1 nota(s) de R$50,00')
    });

    it('deve imprimir notas diferentes com alguma delas com mais de 1', () => {
      expect(caixaEletronico.result([100,100,50])).toEqual('Entregar 2 nota(s) de R$100,00 e 1 nota(s) de R$50,00')
    });

    it('deve imprimir uma nota de cada', () => {
      expect(caixaEletronico.result([100,50,20,10])).toEqual('Entregar 1 nota(s) de R$100,00; 1 nota(s) de R$50,00; 1 nota(s) de R$20,00 e 1 nota(s) de R$10,00')
    });

    it('deve imprimir uma nota de cada', () => {
      expect(caixaEletronico.result([100,100,100,50,20,20])).toEqual('Entregar 3 nota(s) de R$100,00; 1 nota(s) de R$50,00 e 2 nota(s) de R$20,00')
    });
  });
});
