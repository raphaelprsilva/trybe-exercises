const estados = document.querySelector('#estados');
const dateElement = document.querySelector('#date');
const submitButton = document.querySelector('#botao-enviar');
const form = document.querySelector('form');
const clearButton = document.querySelector('#botao-limpar');

const arrayEstados = ['', 'Acre - AC', 'Alagoas - AL', 'Amapá - AP', 'Amazonas - AM', 'Bahia - BA',
  'Ceará - CE', 'Distrito - Federal - DF', 'Espírito Santo - ES', 'Goiás - GO', 'Maranhão - MA', 'Mato Grosso - MT', 
  'Mato Grosso do Sul - MS', 'Minas Gerais - MG', 'Pará - PA', 'Paraíba - PB', 'Paraná - PR',
  'Pernambuco - PE', 'Piauí - PI', 'Rio de Janeiro - RJ', 'Rio Grande do Norte - RN', 
  'Rio Grande do Sul - RS', 'Rondônia - RO', 'Roraima - RR', 'Santa Catarina - SC', 'São Paulo - SP', 
  'Sergipe - SE', 'Tocantins - TO'];

function addEstados() {
  for (let index = 0; index < arrayEstados.length; index += 1) {
    let optElement = document.createElement('option');
    optElement.innerText = arrayEstados[index];
    estados.add(optElement);
  }
}

addEstados();

// Using reference from this site: https://www.the-art-of-web.com/javascript/validate-date/
function checkDate() {
  const re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
  const regs = form.elements[13].value.match(re);
  console.log(regs);
  console.log(form.elements[13].value);

  if (form.elements[13].value !== '') {
    if (regs !== null) {
      if (regs[1] < 1 || regs[1] > 31) {
        alert('O valor do dia está digitado incorretamente: ' + regs[1]);
        return false;
      }
      if (regs[2] < 0 || regs[2] > 12) {
        alert('O valor do mês está digitado incorretamente: ' + regs[2]);
        return false;
      }
      if (regs[3] < 1902 || regs[3] > (new Date()).getFullYear()) {
        alert('O valor do ano está digitado incorretamente: ' + regs[3]);
        return false;
      }
    } else {
      alert('Formato de data inválido!');
      return false;
    }
  }

}

clearButton.addEventListener('click', () => {
  document.querySelector('form').reset();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkDate();
});