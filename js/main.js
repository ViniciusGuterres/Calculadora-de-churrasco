const botao = document.getElementById("botaCalcular");

const calcularChurrasco = () => {

    // colecting inputs valures
    const mulheres = document.getElementById("mulheres-qnt").value;
    const homens = document.getElementById("homens-qnt").value;
    const criancas = document.getElementById("criancas-qnt").value;

    const acompanhamentos = document.getElementById('acompanhamentos').checked;
    const bebidasAlcoolicas = document.getElementById("bebidas-alcoolicas").value;
    const bebidasNaoAlcoolicas = document.getElementById("bebidas-nao-alcoolicas").value;

    // calc meat, total de pessoas * grama
    let totalCarne = (Number(mulheres) * 300) + (Number(homens) * 400) + (Number(criancas) * 150);
    
    // total of participants
    const totalPessoas = Number(mulheres) + Number(homens) + Number(criancas);

    // for person, 50g of side dish
    const totalAcompanhamentos = acompanhamentos ? Number(totalPessoas) * 50 : 0;


    // 400ml of no alcoolic drinks for person
    const totalBebidasNaoAlcoolicas = bebidasNaoAlcoolicas ? Number(totalPessoas) * 500 : 0;

    // 500ml of alcoolic drinks for person
    const totalBebidasAlcoolicas = bebidasAlcoolicas ? Number(totalPessoas) * 400 : 0;




    // Apresentando os valores
    document.getElementById('total-carne').innerHTML = `${getValueMesure(totalCarne, 1)}`;
    document.getElementById('total-acompanhamento').innerHTML = `${getValueMesure(totalAcompanhamentos, 1)};`;
    document.getElementById('total-bebidas-alcoolicas').innerHTML = `${getValueMesure(totalBebidasAlcoolicas, 2)}`;
    document.getElementById("total-bebidas-nao-alcoolicas").innerHTML = `${getValueMesure(totalBebidasNaoAlcoolicas, 2)}`;
    
    // formating the measure type
    /*
    type 1: comidas
    type 2: bebidas
    */

    function getValueMesure(val, type) {
        switch(type) {
            case 1: {
                return val >= 1000 ? `${val/1000}kg` : `${val}g`;
                break;
            }

            case 2: {
                return val >= 1000 ? `${val/1000}L` : `${val}ml`;
                break;
            }
            
        }
    }

    console.log(bebidasNaoAlcoolicas);
}
 
