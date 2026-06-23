// ===== GALERIA =====
const lista = document.getElementById("lista");  
const janela = document.querySelector(".carrossel .janela"); 
let posicao = 0; // posição da galeria

const colunas = 3;        
const alturaItem = 280;     
const gap = 20;            
const alturaLinha = alturaItem + gap; 

function descer() {
    const totalItens = lista.children.length;          
    const totalLinhas = Math.ceil(totalItens / colunas); 
    const alturaTotal = totalLinhas * alturaLinha; 
    const restante = alturaTotal - Math.abs(posicao) - janela.offsetHeight;

    if (restante > 0) {
        posicao -= Math.min(alturaLinha, restante);
        lista.style.transform = `translateY(${posicao}px)`;
    }
}

function subir() {
    posicao += alturaLinha;
    if (posicao > 0) posicao = 0; 
    lista.style.transform = `translateY(${posicao}px)`;
}

// ===== MATERIAIS DIDÁTICOS =====
const listaDidaticos = document.getElementById("lista-didaticos");  
const janelaDidaticos = document.querySelector(".carrossel:nth-of-type(2) .janela"); // pega o carrossel dos didáticos
let posicaoDidaticos = 0;

function descerDidaticos() {
    const totalItens = listaDidaticos.children.length;          
    const totalLinhas = Math.ceil(totalItens / colunas); 
    const alturaTotal = totalLinhas * alturaLinha;     
    const restante = alturaTotal - Math.abs(posicaoDidaticos) - janelaDidaticos.offsetHeight;

    if (restante > 0) {
        posicaoDidaticos -= Math.min(alturaLinha, restante);
        listaDidaticos.style.transform = `translateY(${posicaoDidaticos}px)`;
    }
}

function subirDidaticos() {
    posicaoDidaticos += alturaLinha;
    if (posicaoDidaticos > 0) posicaoDidaticos = 0;
    listaDidaticos.style.transform = `translateY(${posicaoDidaticos}px)`;
}