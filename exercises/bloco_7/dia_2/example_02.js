const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listOfSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  const arrayOfValues = Object.values(student);
  for (let index = 0; index < arrayOfSkills.length; index += 1) {
    console.log(`${arrayOfSkills[index]}: ${arrayOfValues[index]}`);
  }
}

listOfSkills(student1);