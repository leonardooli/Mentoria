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

    else if (saque == 10) {
      const divby10 = Math.trunc(saque / 10).toFixed(2);
      const notas10 = Math.ceil(divby10);
      return `${notas10} nota(s) de R$10`;
    }

    else if (saque < 50) {
      const divby20 = Math.trunc(saque / 20).toFixed(2);
      const restby20 = (((saque / 20) % 1).toFixed(2) * 100) / 5;
      const notas20 = Math.ceil(divby20);
        if (restby20 == 10) {
          const divby10 = Math.trunc(restby20 / 10).toFixed(2);
          const notas10 = Math.ceil(divby10);
          return `${notas20} nota(s) de R$20 e ${notas10} nota(s) de R$10`;
        }
        else {
          return `${notas20} nota(s) de R$20`;
        }
    }

    else if (saque < 100) {
      const divby50 = Math.trunc(saque / 50).toFixed(2);
      const restby50 = (((saque / 50) % 1).toFixed(2) * 100) / 2;
      const notas50 = Math.ceil(divby50);
        if (restby50 >= 20) {
          const divby20 = Math.trunc(restby50 / 20).toFixed(2);
          const restby20 = (((restby50 / 20) % 1).toFixed(2) * 100) / 5;
          const notas20 = Math.ceil(divby20);
            if (restby20 == 10) {
              const divby10 = Math.trunc(restby20 / 10).toFixed(2);
              const notas10 = Math.ceil(divby10);
              return `${notas50} nota(s) de R$50, ${notas20} nota(s) de R$20 e ${notas10} nota(s) de R$10`;
            }
            else {
              return `${notas50} nota(s) de R$50 e ${notas20} nota(s) de R$20`;
            }
        }
        else {
            return `${notas50} nota(s) de R$50`;
        }
    }

    else if(saque >= 100) {
      const divby100 = Math.trunc(saque / 100).toFixed(2);
      const restby100 = ((saque / 100) % 1).toFixed(2) * 100;
      const notas100 = Math.ceil(divby100);
        if (restby100 >= 50){
          const divby50 = Math.trunc(restby100 / 50).toFixed(2);
          const restby50 = (((restby100 / 50) % 1).toFixed(2) * 100) / 2;
          const notas50 = Math.ceil(divby50);
            if (restby50 >= 20) {
              const divby20 = Math.trunc(restby50 / 20).toFixed(2);
              const restby20 = (((restby50 / 20) % 1).toFixed(2) * 100) / 5;
              const notas20 = Math.ceil(divby20);
                if (restby20 == 10) {
                  const divby10 = Math.trunc(restby20 / 10).toFixed(2);
                  const notas10 = Math.ceil(divby10);
                  return `${notas100} nota(s) de R$100, ${notas50} nota(s) de R$50, ${notas20} nota(s) de R$20 e ${notas10} nota(s) de R$10`;
                }
                else {
                  return `${notas100} nota(s) de R$100, ${notas50} nota(s) de R$50 e ${notas20} nota(s) de R$20`;
                }
            }
            else {
              return `${notas100} nota(s) de R$100 e ${notas50} nota(s) de R$50`;
            }
        }
    }
};
getMoney(30);
