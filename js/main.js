const botao = document.getElementById("botaCalcular");

const calcularChurrasco = () => {

    // colecting inputs valures
    const mulheres = document.getElementById("mulheres-qnt").value;
    const homens = document.getElementById("homens-qnt").value;
    const criancas = document.getElementById("criancas-qnt").value;

    const acompanhamentos = document.getElementById('acompanhamentos').value;
    const bebidasAlcoolicas = document.getElementById("bebidas-alcoolicas").value;
    const bebidasNaoAlcoolicas = document.getElementById("bebidas-nao-alcoolicas").value;

    // calc meat, total de pessoas * grama
    let totalCarne = mulheres * 150 + homens + 200 + criancas * 100;
    
    // total of participants
    const totalPessoas = Number(mulheres) + Number(homens) + Number(criancas);

    // for person, 50g of side dish
    const totalacompanhamentos = acompanhamentos ? Number(totalPessoas) * 50 : 0;

    // 400ml of no alcoolic drinks for person
    const totalBebidasNaoAlcoolicas = bebidasNaoAlcoolicas ? Number(totalPessoas) * 400 : 0;

    // 500ml of alcoolic drinks for person
    const totalBebidasAlcoolicas = bebidasAlcoolicas ? Number(totalPessoas) * 500 : 0;

    // Apresentando os valores
    document.getElementById('total-carne').innerHTML = `${getValueMesure(totalCarne, 1)}`;



    function getValueMesure(val, type) {
        switch(type) {
            case 1: {
                return val >= 1000 ? `${val/1000}kg` : `${val}g`;
            }
        }
    }


    console.log(totalacompanhamentos);
}
 
