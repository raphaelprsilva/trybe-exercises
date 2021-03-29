let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal do Pato Donald',
  recorrente: 'Sim'
};

let newInfo = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};


for (let index in newInfo) {
  if (index !== 'recorrente') {
    console.log(index + ': '+ info[index] + ' e ' + newInfo[index]);
  } else {
    console.log(index + ': ' + 'Ambos recorrentes');
  }
}


console.table(info);