const form = document.querySelector('#form');
const resultado = document.querySelector('.output-n2');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const inputN1 = e.target.querySelector('#input-n1');

    const n1 = Number(inputN1.value);

    if (isNaN(n1) || n1 > 10 || n1 < 0) {
        n1Invalido(n1);
        return;
    }

    resultado.innerHTML = calculaResultado(n1);
    resultado.classList.remove('output-n2');
    resultado.classList.add('output-n2-result');
   
});

function calculaResultado(n1){
    const n2 = ((n1*0.4)-6)/-0.6; 
    return n2.toFixed(2);
}

function n1Invalido(n1){
    if (n1 > 10 || n1 < 0){
        resultado.innerHTML = 'A nota deve estar entre 0 e 10!';
        resultado.classList.remove('output-n2-result');
        resultado.classList.add('output-n2');
    }
    else {
        resultado.innerHTML = 'N1 inválida!';
        resultado.classList.remove('output-n2-result');
        resultado.classList.add('output-n2');
    }
}