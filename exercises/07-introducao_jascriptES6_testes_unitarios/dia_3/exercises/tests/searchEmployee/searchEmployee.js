const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const searchEmployee = (id, details) => {
  const professionalInfo = professionalBoard
    .find((professionalData) => professionalData.id === id);

  const professionalDetails = professionalInfo[details];
  const isProfessinalDetailsSpecialities = professionalDetails === 'specialities';
  const hasProfessionalDetailsLengthGreaterThan1 = professionalDetails.length > 1;
  return isProfessinalDetailsSpecialities && hasProfessionalDetailsLengthGreaterThan1
    ? professionalDetails.reduce((acc, detail) => acc + `${detail}, `, '')
    : professionalDetails.reduce((acc, detail) => acc + detail, '');
};

module.exports = searchEmployee;
