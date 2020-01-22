const usuario = {
    nome: 'William',
    idade: 30,
    endereco: {
        cidade: 'Não-Me-Toque',
        estado: 'RS'
    },
};

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade, endereco: { cidade } }) {
    console.log(nome);
    console.log(idade);
    console.log(cidade);
};

mostraNome(usuario);
