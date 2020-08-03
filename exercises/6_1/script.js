//Options to select the state
const estados = document.getElementById('estado');
const opcoesEstados = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
let value = 1;
//Create the options to select
function createListState() {
    for (let index = 0; index < opcoesEstados.length; index += 1) {
        const createOptions = document.createElement('option');
        estados.appendChild(createOptions).innerText = opcoesEstados[index];
        estados.appendChild(createOptions).value = opcoesEstados[index];
    }
}
createListState();

//Check date format
const dataInput = document.getElementById('data');
function checkData() {
    if (dataInput.value.indexOf('/') === 2 && dataInput.value.indexOf('/') === 5) {
       let day = dataInput.value.substr(0,2);
       let month = dataInput.value.substr(3,2);
       let year = dataInput.value.substr(6,4);
       if ((day > 0 && day <31) && (month > 0 && month <= 12) && (year > 0 && year.length === 4)) {
           return true;
       } 
       } 
    }
console.log(checkData())

//Save data in a section, and add in a div when submit botton is clicked
function renderCurriculum(event) {
    const formElements = document.getElementById('form-curriculum').elements;

    for (let index = 0; index < formElements.length; index += 1) {
        if (formElements[index].tagName !== 'fieldset') {
            document.getElementById('render-curriculum').innerHTML += '<div>' + formElements[index].value + '</div>';
        }
    }
}
renderCurriculum();

//Submit button
const enviarButton = document.getElementById('enviar-formulario');
enviarButton.addEventListener('click', renderCurriculum());