const caixaEletronico = {
  cem: '100',
  cinquenta:'50',
  vinte: '20',
  dez: '10'
};

getMoney = (saque) => {
  if(saque % 100 == 0) {
    return Math.trunc(saque / 100) + " " + "notas de R$100"
  }
  else if(saque >= 100) {
    const divby100 =   Math.trunc(saque / 100).toFixed(2);
    const notas100 = Math.ceil(divby100);
    const rest100 =((saque / 100) % 1).toFixed(2);
    return notas100 + ' ' + 'nota de R$100'
  }
};
getMoney(150);
