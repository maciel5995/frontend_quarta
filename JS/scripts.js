// console.log( 10 === '10' );
// console.log( 10 !== '10' );

var a = 2;
let b = 3;
const c = 4

if(true) {
    var d = 2;
    let e = 3;
    const f = 4;
    // console.log(a)
    // console.log(b)
    // console.log(c)
}
// console.log(d)
// console.log(e)
// console.log(f)
const g = 1, h = 2, i = 3;

const user = 'rodrigo'
if(user === 'rodrigo') {
    console.log('Usuário logado..!')
} else {
    console.log('Usuário não cadastrado...!')
}

// operador ternário
// user === 'rodrig' ? console.log('Usuário logado..!') : console.log('Usuário não cadastrado...!')


const curso = 'SW';
switch(curso) {
    case 'SW':
        // console.log('Engenharia de Software');
        break;
    case 'ENC':
        console.log('Engenharia da Computação');
        break;
    default:
        console.log('Curso não cadastrado...!');
}

let j = 0;
while(j < 10) {
    // j++;
    // console.log(j);
    j++;
}

let k = 0;
do {
    // console.log(k);
    k++;
} while(k < 10);

for(let i = 0; i < 10; i++) {
    // console.log(i);
}

for(let i = 0; i < 10; i++) {
    if(i === 3) {
        break;
    }
    // console.log(i);
}

for(let i = 0; i < 10; i++) {
    if(i === 3) {
        continue;
    }
    // console.log(i);
}

// função sem passagem de parâmetro e sem retorno
function myFunction() {
    console.log('oi');
}

// myFunction();

const myFunction2 = () => {
    console.log('oi arrow');
}

// myFunction2();

// função com passagem de parâmetro e sem retorno
function defineParOuImpar(numero) {
    if(numero % 2 === 0) {
        console.log(`${numero} é par`);
    } else {
        console.log(`${numero} é ímpar`);
    }
}

// defineParOuImpar(6);

const defineParOuImpar2 = (numero) => {
    numero % 2 === 0 ? console.log(`${numero} é par`) : console.log(`${numero} é ímpar`);
}

// defineParOuImpar2(7);

// função com passagem de parâmetro e com retorno
function calculaRaiz(numero) {
    return Math.sqrt(numero)
}

const resultado = calculaRaiz(81);
// console.log(resultado);

// ARRAYS

let nomes = ['joão', 'maria', 'rodrigo'];
// console.log(nomes[0]);
// console.log(nomes);
// console.log(typeof nomes);
// console.log(nomes.length);
// console.log(Object.keys(nomes));

// métodos
nomes.unshift('nevio'); // insere no início
nomes.push('alice');
// console.log(nomes);
// nomes.pop();
// nomes.shift();
// console.log(nomes);

const filteredArray = nomes.filter((nome) => nome.length > 4);
// console.log(filteredArray);

const foundName = nomes.find((nome) => nome.length > 5);
// console.log(foundName);

const foundNameIndex = nomes.findIndex((nome) => nome.length > 5);
// console.log(foundNameIndex);

// console.log(nomes);
// const slicedNames = nomes.slice(0,4);
const slicedNames = nomes.slice(2);
// console.log(slicedNames);

const reversedNames = nomes.reverse();
// console.log(reversedNames);

const numeros = [2, 3, 4, 7, 8];
for(let i = 0; i < numeros.length; i++) {
    // console.log(numeros[i]);
};

for(let num of numeros) {
    // console.log(num);
}

// numeros.forEach(num => console.log(num));
// numeros.map(num => console.log(num));
const mappedNumbers = numeros.map((num) => num * 2);
// console.log(mappedNumbers);

// OBJETOS
// forma literal
const aluno = {
    id: 1,
    nome: 'joão',
    email: 'joao@email.com',
    info: function () {
        console.log(`Nome: ${this.nome}\nEmail: ${this.email}`)
    }
}
// console.log(aluno);
// console.log(aluno.nome);
// aluno.info()
aluno.matricula = '012345';
delete aluno.id;
// console.log(aluno);

// via função construtora
const pessoa = new Object();
pessoa.nome = 'maria';
pessoa.idade = 20;
pessoa.email = 'maria@email.com';
// console.log(pessoa);

class Carro {
    #potencia; // atributo privado
    constructor(marca, cor, potencia) {
        this.marca = marca;
        this.cor = cor;
        this.#potencia = potencia; // atributo privado
    }

    getPotencia() {
        return this.#potencia;
    }

}

const carro = new Carro('vw','prata', '65');
console.log(carro);
console.log(carro.getPotencia());


